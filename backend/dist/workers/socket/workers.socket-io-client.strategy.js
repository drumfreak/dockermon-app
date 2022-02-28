"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkersSocketIoClientStrategy = void 0;
const microservices_1 = require("@nestjs/microservices");
class WorkersSocketIoClientStrategy extends microservices_1.Server {
    constructor(client) {
        super();
        this.client = client;
    }
    listen(callback) {
        this.client.on('connection', () => {
            console.log('connect');
        });
        this.client.on('error', (error) => {
            console.log(error);
        });
        this.messageHandlers.forEach((handler, pattern) => {
            this.client.on(pattern, (data) => {
                handler(data, this.client);
            });
        });
        callback();
    }
    close() {
        this.client.disconnect();
    }
}
exports.WorkersSocketIoClientStrategy = WorkersSocketIoClientStrategy;
//# sourceMappingURL=workers.socket-io-client.strategy.js.map