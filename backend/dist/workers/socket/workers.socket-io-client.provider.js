"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkersSocketIoClientProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const socket_io_client_1 = require("socket.io-client");
let WorkersSocketIoClientProvider = class WorkersSocketIoClientProvider {
    constructor() {
        this.getSocket = () => {
            if (!this.socket) {
                return this.connect();
            }
            return this.socket;
        };
    }
    connect() {
        const server = 'ws://' + process.env.WORKER_HOST_ADDRESS + ':' + this.config.get('BACKEND_WS_PORT') + '/events';
        this.socket = (0, socket_io_client_1.io)(server);
        this.socket.emit('ping', { message: 'hello' });
        return this.socket;
    }
};
__decorate([
    (0, common_1.Inject)(config_1.ConfigService),
    __metadata("design:type", config_1.ConfigService)
], WorkersSocketIoClientProvider.prototype, "config", void 0);
WorkersSocketIoClientProvider = __decorate([
    (0, common_1.Injectable)()
], WorkersSocketIoClientProvider);
exports.WorkersSocketIoClientProvider = WorkersSocketIoClientProvider;
//# sourceMappingURL=workers.socket-io-client.provider.js.map