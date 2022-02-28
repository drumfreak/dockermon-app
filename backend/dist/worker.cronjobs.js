"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const worker_cronjobs_module_1 = require("./workers/cronjobs/worker.cronjobs.module");
const workers_socket_io_client_provider_1 = require("./workers/socket/workers.socket-io-client.provider");
const workers_socket_io_client_strategy_1 = require("./workers/socket/workers.socket-io-client.strategy");
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(worker_cronjobs_module_1.WorkerCronjobsModule);
    const socketIoClientProvider = app.get(workers_socket_io_client_provider_1.WorkersSocketIoClientProvider);
    app.connectMicroservice({
        strategy: new workers_socket_io_client_strategy_1.WorkersSocketIoClientStrategy(socketIoClientProvider.getSocket()),
    });
    await app.startAllMicroservices();
    process.env.WORKER_HTTP2_PORT = (_a = process.env.WORKER2_HTTP_PORT) !== null && _a !== void 0 ? _a : '4003';
    await app.listen(process.env.WORKER2_HTTP_PORT);
}
bootstrap();
//# sourceMappingURL=worker.cronjobs.js.map