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
var CronProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const cron_service_1 = require("./cron.service");
let CronProcessor = CronProcessor_1 = class CronProcessor {
    constructor(cronService) {
        this.cronService = cronService;
        this.logger = new common_1.Logger(CronProcessor_1.name);
    }
    handlePoller() {
        this.cronService.statsCron();
    }
    handleDockerUsage() {
        this.cronService.dockerUsage();
    }
};
__decorate([
    (0, bull_1.Process)('poller'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronProcessor.prototype, "handlePoller", null);
__decorate([
    (0, bull_1.Process)('dockerUsage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronProcessor.prototype, "handleDockerUsage", null);
CronProcessor = CronProcessor_1 = __decorate([
    (0, bull_1.Processor)('cronProcessor'),
    __metadata("design:paramtypes", [cron_service_1.CronService])
], CronProcessor);
exports.CronProcessor = CronProcessor;
//# sourceMappingURL=cron.processor.js.map