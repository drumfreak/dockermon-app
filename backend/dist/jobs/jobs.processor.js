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
var JobsProcessor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const jobs_service_1 = require("./jobs.service");
let JobsProcessor = JobsProcessor_1 = class JobsProcessor {
    constructor(jobsService) {
        this.jobsService = jobsService;
        this.logger = new common_1.Logger(JobsProcessor_1.name);
    }
    handlePoller(job) {
        try {
            this.logger.verbose('Running job: startup', job.id);
            this.jobsService.startup();
        }
        catch (error) {
            this.logger.error('Could not run startup job');
        }
    }
    handleDockerUsage(job) {
        try {
            this.logger.verbose('Running job: dockerUsage', job.id);
            this.jobsService.dockerUsage();
        }
        catch (error) {
            this.logger.error('Could not run dockerUsage job');
        }
    }
    handleDockerEventsListener(job) {
        try {
            this.logger.verbose('Running job: dockerEvents', job.id);
            this.jobsService.dockerEventsListener();
        }
        catch (error) {
            this.logger.error('Could not run dockerEventsListener job');
        }
    }
};
__decorate([
    (0, bull_1.Process)('startup'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobsProcessor.prototype, "handlePoller", null);
__decorate([
    (0, bull_1.Process)('dockerUsage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobsProcessor.prototype, "handleDockerUsage", null);
__decorate([
    (0, bull_1.Process)('dockerEventsListener'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobsProcessor.prototype, "handleDockerEventsListener", null);
JobsProcessor = JobsProcessor_1 = __decorate([
    (0, bull_1.Processor)('jobsProcessor'),
    __metadata("design:paramtypes", [jobs_service_1.JobsService])
], JobsProcessor);
exports.JobsProcessor = JobsProcessor;
//# sourceMappingURL=jobs.processor.js.map