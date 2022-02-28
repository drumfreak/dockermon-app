"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const containers_controller_1 = require("./containers.controller");
const container_entity_1 = require("./container.entity");
const containers_service_1 = require("./containers.service");
const stat_entity_1 = require("../stats/stat.entity");
const docker_volumes_entity_1 = require("../docker-volumes/docker-volumes.entity");
const docker_volumes_module_1 = require("../docker-volumes/docker-volumes.module");
const docker_networks_entity_1 = require("../docker-networks/docker-networks.entity");
const docker_networks_module_1 = require("../docker-networks/docker-networks.module");
const docker_hosts_entity_1 = require("../docker-hosts/docker-hosts.entity");
const docker_hosts_module_1 = require("../docker-hosts/docker-hosts.module");
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
let ContainersModule = class ContainersModule {
};
ContainersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([docker_volumes_entity_1.DockerVolume, docker_networks_entity_1.DockerNetwork, container_entity_1.Container, stat_entity_1.Stat, docker_hosts_entity_1.DockerHost, activity_logs_entity_1.ActivityLog]),
            docker_volumes_module_1.DockerVolumesModule,
            docker_hosts_module_1.DockerHostsModule,
            docker_networks_module_1.DockerNetworksModule,
        ],
        controllers: [containers_controller_1.ContainersController],
        providers: [containers_service_1.ContainersService],
        exports: [typeorm_1.TypeOrmModule, containers_service_1.ContainersService],
    })
], ContainersModule);
exports.ContainersModule = ContainersModule;
//# sourceMappingURL=containers.module.js.map