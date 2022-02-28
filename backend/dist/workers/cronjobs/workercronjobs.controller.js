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
var WorkerCronjobsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerCronjobsController = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
require("dotenv/config");
const common_2 = require("@nestjs/common");
let WorkerCronjobsController = WorkerCronjobsController_1 = class WorkerCronjobsController {
    constructor(cronQueue) {
        this.cronQueue = cronQueue;
        this.logger = new common_2.Logger(WorkerCronjobsController_1.name);
        setTimeout(() => {
            this.startup();
        }, 1000);
    }
    async startup() {
        try {
            await this.cronQueue.clean(0);
            const jobs2 = await this.cronQueue.getJobs([]);
            jobs2.map(async (job) => {
                if (job) {
                    try {
                        await job.remove();
                    }
                    catch (error) {
                        console.log('error', error);
                    }
                }
            });
            this.logger.verbose('Adding Poller Cronjob');
            this.cronQueue.add('poller', {}, { repeat: { cron: process.env.POLLER_INTERVAL || '*/30 * * * * *' } });
            this.logger.verbose('Adding dockerUsage Cronjob');
            this.cronQueue.add('dockerUsage', {}, { repeat: { cron: process.env.USAGE_INTERVAL || '*/3 * * * *' } });
            this.logger.verbose('Adding inspect Cronjob');
            this.cronQueue.add('inspect', {}, { repeat: { cron: process.env.INSPECT_INTERVAL || '*/2 * * * *' } });
        }
        catch (error) {
            console.log('app.controller', error);
        }
    }
};
WorkerCronjobsController = WorkerCronjobsController_1 = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, bull_1.InjectQueue)('cronProcessor')),
    __metadata("design:paramtypes", [Object])
], WorkerCronjobsController);
exports.WorkerCronjobsController = WorkerCronjobsController;
//# sourceMappingURL=workercronjobs.controller.js.map