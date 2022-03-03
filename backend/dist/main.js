"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
require("dotenv/config");
const redis_io_adapter_1 = require("./adapters/redis-io.adapter");
const port = process.env.DOCKERMON_BACKEND_API_PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    });
    await app.enableCors({
        allowedHeaders: '*',
        origin: '*',
    });
    app.useWebSocketAdapter(new redis_io_adapter_1.RedisIoAdapter(app));
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map