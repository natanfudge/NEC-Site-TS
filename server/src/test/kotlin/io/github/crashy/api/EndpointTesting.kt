package io.github.crashy.api

import ClientLibrary
import HttpTest
import HttpTest.Companion.httpTest
import TestClass
import TestCrash
import TestHttpResponse
import getCrashLogContents
import io.github.crashy.crashlogs.UploadCrashResponse
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.json.Json
import org.junit.FixMethodOrder
import org.junit.Test
import org.junit.runner.OrderWith
import org.junit.runners.MethodSorters
import strikt.api.expectThat
import strikt.assertions.isEqualTo
import java.net.HttpURLConnection
import java.util.*
import kotlin.test.assertEquals

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
class EndpointTesting : TestClass {
    override val useRealServer: Boolean = false

    private inline fun withBothClients(
        ssl: Boolean = false,
        cache: Boolean = true,
        useGzip: Boolean = true, code: HttpTest.() -> Unit
    ) {
        with(httpTest(ssl = ssl, cache, useGzip, ClientLibrary.OkHttp), code)
        with(httpTest(ssl = ssl, cache, useGzip, ClientLibrary.Apache), code)
    }

    @Test
    // Run test last (that's why we have ZZ at the start) because afterwards our IP will be blocked from uploading.
    fun `ZZInvalid uploadCrash requests`(): Unit = runBlocking {
        val response2 = httpTest(useGzip = false).uploadCrash(TestCrash.Fabric)
        assertEquals(HttpURLConnection.HTTP_UNSUPPORTED_TYPE, response2.code)

        with(httpTest()) {
            val response1 = uploadCrash(TestCrash.Fabric, headers = mapOf("content-encoding" to ""))
            assertEquals(HttpURLConnection.HTTP_UNSUPPORTED_TYPE, response1.code)

            val response3 = uploadCrash(TestCrash.Huge)
            assertEquals(HttpURLConnection.HTTP_ENTITY_TOO_LARGE, response3.code)

            repeat(100) {
                // Load the server with loads of trash
                uploadCrash(TestCrash.Fabric)
            }

            expectThat(uploadCrash(TestCrash.Fabric)).get(TestHttpResponse::code).isEqualTo(429)

        }
    }

    @Test
    fun `Upload Crash`() = runBlocking {
        withBothClients {
            val (response, parsed) = uploadCrashAndParse(TestCrash.Fabric)
            assertEquals(HttpURLConnection.HTTP_OK, response.code)

            println("ID = ${parsed.crashId}, code = ${parsed.deletionKey}")
        }

    }

    @Test
    fun `Invalid getCrash requests`() = runBlocking {
        with(httpTest()) {
            for (id in listOf("", "/", "123123", "\"123123\"")) {
                val response = getCrash(id)
                expectThat(response).get(TestHttpResponse::code).isEqualTo(HttpURLConnection.HTTP_UNSUPPORTED_TYPE)
            }

            for (id in listOf("${UUID.randomUUID()}")) {
                val response = getCrash(id)
                assertEquals(HttpURLConnection.HTTP_NOT_FOUND, response.code)
            }
        }
    }

    @Test
    fun `Get Crash`(): Unit = runBlocking {
        with(httpTest()) {
            val (_, uploadResponse) = uploadCrashAndParse(TestCrash.Fabric)

            val getResponse = getCrash(uploadResponse.crashId.toString())
            val getResponseBody = getResponse.body
            expectThat(getCrashLogContents(TestCrash.Fabric))
                .describedAs(getCrashLogContents(TestCrash.Fabric).substring(0, 100))
                .isEqualTo(getResponseBody)
        }
    }


    private suspend fun HttpTest.uploadCrashAndParse(crash: TestCrash): Pair<TestHttpResponse, UploadCrashResponse.Success> {
        val uploadResponse = uploadCrash(crash)
        return uploadResponse to Json.decodeFromString(UploadCrashResponse.Success.serializer(), uploadResponse.body!!)
    }

    @Test
    fun `Invalid deleteCrash requests`() = runBlocking {
        with(httpTest()) {
            val response1 = deleteCrash(null, "asdf")
            assertEquals(HttpURLConnection.HTTP_UNSUPPORTED_TYPE, response1.code)
            val response2 = deleteCrash("asdf", null)
            assertEquals(HttpURLConnection.HTTP_UNSUPPORTED_TYPE, response2.code)
            val response3 = deleteCrash(null, null)
            assertEquals(HttpURLConnection.HTTP_UNSUPPORTED_TYPE, response3.code)

            val response4 = deleteCrash("asdf", "asdf")
            assertEquals(HttpURLConnection.HTTP_UNSUPPORTED_TYPE, response4.code)
            val response5 = deleteCrash(UUID.randomUUID().toString(), "asdf")
            assertEquals(HttpURLConnection.HTTP_NOT_FOUND, response5.code)

            val uploadResponse = uploadCrash(TestCrash.Fabric)
            assertEquals(HttpURLConnection.HTTP_OK, uploadResponse.code)
            val uploadResponseBody =
                Json.decodeFromString(UploadCrashResponse.Success.serializer(), uploadResponse.body!!)

            val deleteResponse = deleteCrash(uploadResponseBody.crashId.toString(), "wrong key")
            assertEquals(HttpURLConnection.HTTP_UNAUTHORIZED, deleteResponse.code)
        }
    }

    @Test
    fun `Delete Crash`() = runBlocking {
        with(httpTest()) {
            val uploadResponse = uploadCrash(TestCrash.Fabric)
            assertEquals(HttpURLConnection.HTTP_OK, uploadResponse.code)
            val uploadResponseBody =
                Json.decodeFromString(UploadCrashResponse.Success.serializer(), uploadResponse.body!!)

            val deleteResponse =
                deleteCrash(uploadResponseBody.crashId.toString(), uploadResponseBody.deletionKey.toString())
            assertEquals(HttpURLConnection.HTTP_OK, deleteResponse.code)

            val getResponse = getCrash(uploadResponseBody.crashId.toString())
            assertEquals(HttpURLConnection.HTTP_NOT_FOUND, getResponse.code)
        }
    }

//    @Test
//    fun `Download database`() = runBlocking {
//        with(httpTest(local = false)) {
//            val unauthorizedResponse = downloadDatabaseOverview("blah")
//            assertEquals(HttpURLConnection.HTTP_UNAUTHORIZED, unauthorizedResponse.code)
//        }
//    }
}
