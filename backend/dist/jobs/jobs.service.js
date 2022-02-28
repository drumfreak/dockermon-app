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
var JobsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("util");
const child_process_1 = require("child_process");
const docker_service_1 = require("../docker/docker.service");
require("dotenv/config");
const docker_events_service_1 = require("../docker/docker-events.service");
const docker_hosts_service_1 = require("../docker-hosts/docker-hosts.service");
const events_gateway_1 = require("../events/events.gateway");
let JobsService = JobsService_1 = class JobsService {
    constructor(dockerHostService, dockerService, dockerEventsService, eventGateway) {
        this.dockerHostService = dockerHostService;
        this.dockerService = dockerService;
        this.dockerEventsService = dockerEventsService;
        this.eventGateway = eventGateway;
        this.logger = new common_1.Logger(JobsService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async dockerUsage() {
        try {
            const f = await this.dockerHostService.getHosts({ active: true });
            if ((f === null || f === void 0 ? void 0 : f.status) === 'success') {
                f.data.forEach(async (host) => {
                    this.logger.log('Running docker usage... on host ', host.id);
                    const results = await this.dockerService.dockerUsage(host.id);
                    if (results) {
                        this.eventGateway.updateDockerUsage(results);
                    }
                });
            }
        }
        catch (error) {
            this.logger.debug(error);
        }
    }
    async startup() {
        try {
            this.logger.log('Running dockermon startup...');
            const f = await this.dockerHostService.getHosts({ active: true });
            if ((f === null || f === void 0 ? void 0 : f.status) === 'success') {
                f.data.forEach((host) => {
                    this.dockerService.listVolumes({ hostId: host.id });
                    this.dockerService.listImages({ hostId: host.id });
                    this.dockerService.listNetworks({ hostId: host.id });
                    this.dockerService.listContainers({ hostId: host.id });
                    this.dockerService.dockerUsage(host.id);
                });
            }
            return true;
        }
        catch (error) {
            this.logger.debug(error);
        }
    }
    async dockerEventsListener() {
        try {
            this.logger.log('Running docker listener...');
            await this.dockerEventsService.subscribeDockerEvents();
            return true;
        }
        catch (error) {
            this.logger.debug(error);
        }
    }
};
JobsService = JobsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [docker_hosts_service_1.DockerHostsService,
        docker_service_1.DockerService,
        docker_events_service_1.DockerEventsService,
        events_gateway_1.EventsGateway])
], JobsService);
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map