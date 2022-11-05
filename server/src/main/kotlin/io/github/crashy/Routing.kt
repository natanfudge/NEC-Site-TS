package io.github.crashy

import io.github.crashy.crashlogs.*
import io.github.crashy.crashlogs.storage.CrashlogStorage
import io.github.crashy.crashlogs.storage.RealClock
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.pipeline.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.decodeFromStream

fun Application.configureRouting() {
    val logStorage = runBlocking {
        CrashlogStorage.create(bucket = "crashy-crashlogs", runDir = runDir, clock = RealClock)
    }

    val api = CrashlogApi(logStorage)

    routing {
        post<ByteArray>("/uploadCrash") {
            val isGzipContentType = call.request.header("content-type") == "application/gzip"
            val isGzipContentEncoding = call.request.header("content-encoding") == "gzip"
            if (isGzipContentType != isGzipContentEncoding) {
                //TODO: test this
                call.respondText(
                    "Mismatching content encoding/type is not supported anymore",
                    status = HttpStatusCode.UnsupportedMediaType
                )
            }
            respond(api.uploadCrash(UncompressedLog(it), ip = call.request.origin.remoteAddress))
        }
        json<DeleteCrashlogRequest>("/deleteCrash") {
            respond(api.deleteCrash(it))
        }

        json<GetCrashRequest>("/getCrash") {
            respond(api.getCrash(it))
        }
        preCompressed {
            singlePageApplication {
                useResources = false
                filesPath = staticDir.toString()
            }
        }
    }
}

@OptIn(ExperimentalSerializationApi::class)
private inline fun <reified T : Any> Routing.json(
    path: String,
    crossinline body: suspend PipelineContext<Unit, ApplicationCall>.(T) -> Unit
) {
    post(path) {
        call.receiveStream().use {
            try {
                body(Json.decodeFromStream(it))
            } catch (e: IllegalArgumentException) {
                call.respondText("Error deserializing body", status = HttpStatusCode.UnsupportedMediaType)
            }
        }
    }
}

private suspend fun PipelineContext<Unit, ApplicationCall>.respond(response: Response) {
    call.respondText(response.responseString(), status = response.statusCode)
}