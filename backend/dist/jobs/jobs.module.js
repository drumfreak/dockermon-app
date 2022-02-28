"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsModule = void 0;
const jobs_controller_1 = require("./jobs.controller");
const jobs_service_1 = require("./jobs.service");
const common_1 = require("@nestjs/common");
const stats_module_1 = require("../stats/stats.module");
const containers_module_1 = require("../containers/containers.module");
const docker_module_1 = require("../docker/docker.module");
const events_module_1 = require("../events/events.module");
const bull_1 = require("@nestjs/bull");
const docker_hosts_module_1 = require("../docker-hosts/docker-hosts.module");
let JobsModule = class JobsModule {
};
JobsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueue({
                name: 'jobsProcessor',
            }),
            docker_hosts_module_1.DockerHostsModule,
            stats_module_1.StatsModule,
            containers_module_1.ContainersModule,
            docker_module_1.DockerModule,
            events_module_1.EventsModule,
        ],
        controllers: [jobs_controller_1.JobsController],
        providers: [jobs_service_1.JobsService],
    })
], JobsModule);
exports.JobsModule = JobsModule;
//# sourceMappingURL=jobs.module.js.map