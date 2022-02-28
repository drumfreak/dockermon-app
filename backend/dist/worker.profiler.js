"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const worker_profiler_module_1 = require("./workers/profiler/worker.profiler.module");
const workers_socket_io_client_provider_1 = require("./workers/socket/workers.socket-io-client.provider");
const workers_socket_io_client_strategy_1 = require("./workers/socket/workers.socket-io-client.strategy");
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(worker_profiler_module_1.WorkerProfilerModule);
    const socketIoClientProvider = app.get(workers_socket_io_client_provider_1.WorkersSocketIoClientProvider);
    app.connectMicroservice({
        strategy: new workers_socket_io_client_strategy_1.WorkersSocketIoClientStrategy(socketIoClientProvider.getSocket()),
    });
    await app.startAllMicroservices();
    process.env.WORKER_HTTP_PORT = (_a = process.env.WORKER_HTTP_PORT) !== null && _a !== void 0 ? _a : '4009';
    await app.listen(process.env.WORKER_HTTP_PORT);
    console.debug(`Worker is running on ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=worker.profiler.js.map