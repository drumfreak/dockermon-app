"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerHostsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
const container_entity_1 = require("../containers/container.entity");
const docker_images_entity_1 = require("../docker-images/docker-images.entity");
const docker_networks_entity_1 = require("../docker-networks/docker-networks.entity");
const docker_volumes_entity_1 = require("../docker-volumes/docker-volumes.entity");
const docker_hosts_controller_1 = require("./docker-hosts.controller");
const docker_hosts_entity_1 = require("./docker-hosts.entity");
const docker_hosts_service_1 = require("./docker-hosts.service");
let DockerHostsModule = class DockerHostsModule {
};
DockerHostsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([docker_hosts_entity_1.DockerHost, container_entity_1.Container, docker_images_entity_1.DockerImage, docker_volumes_entity_1.DockerVolume, docker_networks_entity_1.DockerNetwork, activity_logs_entity_1.ActivityLog])],
        controllers: [docker_hosts_controller_1.DockerHostsController],
        providers: [docker_hosts_service_1.DockerHostsService],
        exports: [typeorm_1.TypeOrmModule, docker_hosts_service_1.DockerHostsService],
    })
], DockerHostsModule);
exports.DockerHostsModule = DockerHostsModule;
//# sourceMappingURL=docker-hosts.module.js.map