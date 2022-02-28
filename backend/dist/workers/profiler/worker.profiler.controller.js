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
var WorkerProfilerController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerProfilerController = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
require("dotenv/config");
const common_2 = require("@nestjs/common");
let WorkerProfilerController = WorkerProfilerController_1 = class WorkerProfilerController {
    constructor(eventsQueue) {
        this.eventsQueue = eventsQueue;
        this.logger = new common_2.Logger(WorkerProfilerController_1.name);
        setTimeout(() => {
            this.startup();
        }, 1000);
    }
    async startup() {
        try {
            await this.eventsQueue.clean(0);
            const jobs3 = await this.eventsQueue.getJobs([]);
            jobs3.map(async (job) => {
                if (job) {
                    try {
                        await job.moveToCompleted('Completed', true);
                        this.logger.verbose('Cleaned Event Queue', job.id);
                    }
                    catch (error) {
                        console.log('error', error);
                    }
                }
            });
            await this.eventsQueue.clean(0);
            this.logger.verbose('Cleaned Event Queue');
        }
        catch (error) {
            console.log('app.controller', error);
        }
    }
};
WorkerProfilerController = WorkerProfilerController_1 = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, bull_1.InjectQueue)('eventsProcessor')),
    __metadata("design:paramtypes", [Object])
], WorkerProfilerController);
exports.WorkerProfilerController = WorkerProfilerController;
//# sourceMappingURL=worker.profiler.controller.js.map