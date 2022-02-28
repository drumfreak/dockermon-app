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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt.auth.guard");
const containers_service_1 = require("./containers.service");
let ContainersController = class ContainersController {
    constructor(containersService) {
        this.containersService = containersService;
    }
    async getContainers(body) {
        const containers = await this.containersService.getContainers(body);
        return containers;
    }
    async getContainer(param) {
        const c = await this.containersService.getContainerById(param.id);
        if (c) {
            return {
                status: 'success',
                data: c,
            };
        }
        else {
            return {
                status: 'fail',
                data: null,
                message: 'No container found',
            };
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContainersController.prototype, "getContainers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContainersController.prototype, "getContainer", null);
ContainersController = __decorate([
    (0, common_1.Controller)('api/v1/containers'),
    __metadata("design:paramtypes", [containers_service_1.ContainersService])
], ContainersController);
exports.ContainersController = ContainersController;
//# sourceMappingURL=containers.controller.js.map