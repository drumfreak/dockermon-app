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
var WorkerProfilerProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerProfilerProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const worker_profiler_service_1 = require("./worker.profiler.service");
let WorkerProfilerProcessor = WorkerProfilerProcessor_1 = class WorkerProfilerProcessor {
    constructor(workerService) {
        this.workerService = workerService;
        this.logger = new common_1.Logger(WorkerProfilerProcessor_1.name);
    }
    onActive(job) {
        console.log(`------------>>>>   Processing job ${job.id} of type ${job.name} with data ${job.data}...`);
    }
    onError(job) {
        console.log(`------------>>>>   Error on job ${job.id} of type ${job.name} with data ${job.data}...`);
    }
    onRemoved(job) {
        console.log(`------------>>>>   Removed on job ${job.id} of type ${job.name} with data ${job.data}...`);
    }
    onFailed(job) {
        console.warn(`------------>>>>   Failed on job ${job.id} of type ${job.name} with data ${job.data}...`);
    }
    onComplete(job) {
        console.warn(`------------>>>> Completed on job ${job.id} of type ${job.name} with data ${job.data}...`);
    }
    async handleContainerMonitor(job) {
        this.logger.warn(`[${process.pid}] ${JSON.stringify(job.data)}`);
        this.workerService.containerMonitor(job.data, job);
    }
    async onGlobalQueue(job, result) {
        console.warn('------------>>>> onGlobalQueue', job, result);
        await this.workerService.stopContainerMonitor(job, result);
    }
};
__decorate([
    (0, bull_1.OnQueueActive)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkerProfilerProcessor.prototype, "onActive", null);
__decorate([
    (0, bull_1.OnQueueError)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkerProfilerProcessor.prototype, "onError", null);
__decorate([
    (0, bull_1.OnQueueRemoved)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkerProfilerProcessor.prototype, "onRemoved", null);
__decorate([
    (0, bull_1.OnQueueFailed)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkerProfilerProcessor.prototype, "onFailed", null);
__decorate([
    (0, bull_1.OnQueueCompleted)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkerProfilerProcessor.prototype, "onComplete", null);
__decorate([
    (0, bull_1.Process)('containerMonitor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkerProfilerProcessor.prototype, "handleContainerMonitor", null);
__decorate([
    (0, bull_1.OnGlobalQueueCompleted)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WorkerProfilerProcessor.prototype, "onGlobalQueue", null);
WorkerProfilerProcessor = WorkerProfilerProcessor_1 = __decorate([
    (0, bull_1.Processor)('eventsProcessor'),
    __metadata("design:paramtypes", [worker_profiler_service_1.WorkerProfilerService])
], WorkerProfilerProcessor);
exports.WorkerProfilerProcessor = WorkerProfilerProcessor;
//# sourceMappingURL=worker.profiler.processor.js.map