package io.github.crashy.routing

import io.github.crashy.crashlogs.api.Encoding
import io.github.crashy.crashlogs.api.Response
import io.github.crashy.utils.log.CrashyLogger
import io.github.crashy.utils.log.LogContext
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.pipeline.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.decodeFromStream


private inline fun <reified R : Any> Routing.crashyPost(
    path: String,
    crossinline handler: suspend context(LogContext, PipelineContext<Unit, ApplicationCall>) (R) -> Unit
) {
    post<R>(path) { body ->
        CrashyLogger.startCall(path) { logContext ->
            handler(logContext, this@post, body)
        }
    }
}

private inline fun Routing.route(
    vararg routes: String,
    crossinline body: suspend PipelineContext<Unit, ApplicationCall>.() -> Unit
) {
    for (route in routes) {
        get(route) {
            CrashyLogger.startCall(route){
                body()
            }
        }
    }
}

@OptIn(ExperimentalSerializationApi::class)
 inline fun <reified T : Any> Routing.json(
    path: String,
    crossinline handler: suspend context(LogContext, PipelineContext<Unit, ApplicationCall>)(T) -> Unit
) {
    post(path) {
        CrashyLogger.startCall(path) { log ->
            call.receiveStream().use { body ->
                try {
                    handler(log, this@post, Json.decodeFromStream(body))
                } catch (e: IllegalArgumentException) {
                    call.respondText("Error deserializing body", status = HttpStatusCode.UnsupportedMediaType)
                }
            }
        }
    }
}


 suspend fun PipelineContext<Unit, ApplicationCall>.respond(response: Response) {
    when (response.encoding) {
        Encoding.Brotli -> call.response.header(HttpHeaders.ContentEncoding, "br")
        Encoding.None -> {}
    }
    for ((key, value) in response.extraHeaders) {
        call.response.header(key, value)
    }

    addCorsHeader()

    call.respondBytes(
        response.bytes, status = response.statusCode, contentType = response.contentType
    )
}


 fun PipelineContext<Unit, ApplicationCall>.addCorsHeader() {
    // This makes it easier to test out the api in development since the React app runs in port 3000
    call.response.header("Access-Control-Allow-Origin", "*")
}