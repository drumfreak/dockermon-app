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
exports.WorkersSocketIoClientProxyService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const workers_socket_io_client_provider_1 = require("./workers.socket-io-client.provider");
let WorkersSocketIoClientProxyService = class WorkersSocketIoClientProxyService extends microservices_1.ClientProxy {
    publish(packet, callback) {
        throw new Error('Method not implemented.');
    }
    async connect() {
        this.client.getSocket();
    }
    async close() {
        this.client.getSocket().disconnect();
    }
    async dispatchEvent(packet) {
        this.client.getSocket().emit(packet.pattern, packet.data);
        return;
    }
};
__decorate([
    (0, common_1.Inject)(workers_socket_io_client_provider_1.WorkersSocketIoClientProvider),
    __metadata("design:type", workers_socket_io_client_provider_1.WorkersSocketIoClientProvider)
], WorkersSocketIoClientProxyService.prototype, "client", void 0);
WorkersSocketIoClientProxyService = __decorate([
    (0, common_1.Injectable)()
], WorkersSocketIoClientProxyService);
exports.WorkersSocketIoClientProxyService = WorkersSocketIoClientProxyService;
//# sourceMappingURL=workers.socket-io-client.proxy.service.js.map