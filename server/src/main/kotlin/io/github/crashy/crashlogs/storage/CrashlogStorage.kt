package io.github.crashy.crashlogs.storage

import software.amazon.awssdk.services.s3.model.S3Object
import io.github.crashy.Crashy
import io.github.crashy.crashlogs.*
import io.github.crashy.utils.log.LogContext
import io.github.crashy.utils.suspend
import kotlinx.coroutines.*
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import software.amazon.awssdk.core.ResponseBytes
import software.amazon.awssdk.core.ResponseInputStream
import software.amazon.awssdk.core.async.AsyncResponseTransformer
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.s3.S3AsyncClient
import software.amazon.awssdk.services.s3.S3Client
import software.amazon.awssdk.services.s3.model.GetObjectRequest
import software.amazon.awssdk.services.s3.model.GetObjectResponse
import java.nio.file.Path
import java.util.concurrent.ConcurrentHashMap
import kotlin.io.path.createDirectories


class CrashlogStorage private constructor(
//    private val s3: S3Client,
    appDataDir: Path,
    private val bucketName: String,
    clock: NowDefinition
) : AutoCloseable {
    val s3 = S3AsyncClient.builder().region(Region.EU_CENTRAL_1).build()
//    companion object {
//        suspend fun create(bucket: String, clock: NowDefinition, appDataDir: Path): CrashlogStorage {
//
//
//            val client = S3Client.fromEnvironment {
//                region = "eu-central-1"
//            }
//            return CrashlogStorage(client, appDataDir, bucket, clock)
//        }
//    }

    private val cache = CrashlogCache(parentDir = appDataDir.resolve("cache").createDirectories(), clock)

    fun store(id: CrashlogId, log: CrashlogEntry) {
        cache.store(id, log)
    }

    suspend fun peek(id: CrashlogId): PeekCrashlogResult {
        // First try to get it from the locally stored logs
        val cachedResult = cache.peek(id)
        if (cachedResult != null) return PeekCrashlogResult.Success(cachedResult)
        // Then try to get it from the S3 storage
        return when (val s3Result = getFromS3(id)) {
            GetCrashlogResult.Archived -> PeekCrashlogResult.Archived
            GetCrashlogResult.DoesNotExist -> PeekCrashlogResult.DoesNotExist
            is GetCrashlogResult.Success -> PeekCrashlogResult.Success(s3Result.log.metadata)
        }
    }

    suspend fun getLog(id: CrashlogId): GetCrashlogResult {
        // First try to get it from the locally stored logs
        val cachedResult = cache.get(id)
        if (cachedResult != null) return GetCrashlogResult.Success(cachedResult)
        // Then try to get it from the S3 storage
        return getFromS3(id)
    }

    private val activeS3LogRequests = ConcurrentHashMap<CrashlogId,Deferred<GetCrashlogResult>>()

    val scope = CoroutineScope(Dispatchers.IO)

//    private suspend fun getFromS3(id: CrashlogId): GetCrashlogResult {
//        // In case multiple people request the same ID from S3, only call the S3 API once and sync between the requests.
//        val deferred = activeS3LogRequests.computeIfAbsent(id) {
//            scope.async {
//                val value = getFromS3Impl(id)
//                // We are done with this request, remove it
//                activeS3LogRequests.remove(id)
//                value
//            }
//        }
//        return deferred.await()
//    }

    val mutex = Mutex()

    private suspend fun getFromS3(id: CrashlogId): GetCrashlogResult  = mutex.withLock{
        val s3Key = id.s3Key()
        try {
            val s3Result = try {
                s3.getObject {
                    bucket(bucketName)
                    key(s3Key)
                    bucket = bucketName
                    key = s3Key
                }
            } catch (e: NoSuchKey) {
                return GetCrashlogResult.DoesNotExist
            }

            // We found the crashlog in the S3. Now we store it in the cache and delete it from the S3 to save on storage costs.
            val body = s3Result.body ?: error("Could not get crashlog body")

            //TODO: crashes with IllegalStateException... I think the fix is to switch to java sdk.
            val crashlog = Crashy.json.decodeFromString(CrashlogEntry.serializer(), body.decodeToString())
            cache.store(id, crashlog)
            s3.deleteObject {
                bucket = bucketName
                key = s3Key
            }

            return GetCrashlogResult.Success(crashlog)
        } catch (e: InvalidObjectState) {
            try {
                s3.restoreObject {
                    bucket = bucketName
                    key = s3Key
                    restoreRequest = RestoreRequest {
                        days = 90
                        glacierJobParameters {
                            tier = Tier.Standard
                        }
                    }

                }
            } catch (e: S3Exception) {
                if (e.sdkErrorMetadata.errorCode != "RestoreAlreadyInProgress") throw e
            }
            return GetCrashlogResult.Archived
        }
    }

    fun delete(id: CrashlogId, key: DeletionKey): DeleteCrashResult {
        // Technically the entry could only exist on the S3, but if the user requested to delete the crash he had
        // to have viewed it just now, which means he pulled it out of the S3 into the cache.
        return cache.delete(id, key)
    }

    context(LogContext)
    suspend fun evictOld() {
        cache.evictOld { id, log ->
            // Once objects are evicted from the cache, we store them on the S3.
            s3.putObject {
                bucket = bucketName
                key = id.s3Key()
                body = ByteStream.fromString(Crashy.json.encodeToString(CrashlogEntry.serializer(), log))
            }

        }
    }

    override fun close() {
        s3.close()
    }
}

sealed interface GetCrashlogResult {
    class Success(val log: CrashlogEntry) : GetCrashlogResult
    object DoesNotExist : GetCrashlogResult {
        override fun toString(): String = "GetCrashlogResponse.DoesNotExist"
    }

    object Archived : GetCrashlogResult {
        override fun toString(): String = "GetCrashlogResponse.Archived"
    }
}

sealed interface PeekCrashlogResult {
    class Success(val metadata: CrashlogMetadata) : PeekCrashlogResult
    object DoesNotExist : PeekCrashlogResult {
        override fun toString(): String = "GetCrashlogResponse.DoesNotExist"
    }

    object Archived : PeekCrashlogResult {
        override fun toString(): String = "GetCrashlogResponse.Archived"
    }
}


//private fun CompressedCrashlog.toByteStream() = ByteStream.fromBytes(bytes)

// Fix up the weird s3 kotlin api
private suspend fun S3AsyncClient.getObject(requestBuilder: GetObjectRequest.Builder.() -> Unit): ResponseBytes<GetObjectResponse> {
    val request = GetObjectRequest.builder().apply(requestBuilder).build()
    return getObject(request, AsyncResponseTransformer.toBytes()).suspend()
}

