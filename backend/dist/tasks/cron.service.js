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
var CronService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("util");
const child_process_1 = require("child_process");
const stats_service_1 = require("../stats/stats.service");
const containers_service_1 = require("../containers/containers.service");
const docker_service_1 = require("../docker/docker.service");
require("dotenv/config");
const events_gateway_1 = require("../events/events.gateway");
let CronService = CronService_1 = class CronService {
    constructor(statsService, containersService, dockerService, eventGateway) {
        this.statsService = statsService;
        this.containersService = containersService;
        this.dockerService = dockerService;
        this.eventGateway = eventGateway;
        this.logger = new common_1.Logger(CronService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async statsCron() {
        try {
            this.logger.verbose('FIX THIS NOW!!!! --------------------------------------------Running docker poller on old service...');
            const stats = [];
            const output = await this.exec('docker stats --no-stream --format "{{.ID}}\t{{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}\t{{.NetIO}}\t{{.BlockIO}}\t{{.PIDs}}"');
            await this.containersService.resetContainersRunning();
            const arr = output.stdout.split('\n');
            arr.map((a) => {
                if (a.includes('\t')) {
                    const b = a.split('\t');
                    if (b.length > 1) {
                        const r = {
                            id: b[0],
                            name: b[1],
                            cpu: b[2],
                            memory: b[3],
                            memoryPercent: b[4],
                            network: b[5],
                            block: b[6],
                            pids: b[7],
                        };
                        stats.push(r);
                    }
                }
            });
            this.statsService.saveStats(stats);
            this.logger.log('Poller Done');
        }
        catch (error) {
            this.logger.debug(error);
        }
    }
    async dockerUsage() {
        this.logger.verbose('FIX THIS NOW!!!! --------------------------------------------Running docker usage...');
    }
};
CronService = CronService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stats_service_1.StatsService,
        containers_service_1.ContainersService,
        docker_service_1.DockerService,
        events_gateway_1.EventsGateway])
], CronService);
exports.CronService = CronService;
//# sourceMappingURL=cron.service.js.map