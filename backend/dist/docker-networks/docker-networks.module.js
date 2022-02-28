"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerNetworksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
const container_entity_1 = require("../containers/container.entity");
const docker_hosts_entity_1 = require("../docker-hosts/docker-hosts.entity");
const docker_networks_controller_1 = require("./docker-networks.controller");
const docker_networks_entity_1 = require("./docker-networks.entity");
const docker_networks_service_1 = require("./docker-networks.service");
let DockerNetworksModule = class DockerNetworksModule {
};
DockerNetworksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([docker_networks_entity_1.DockerNetwork, container_entity_1.Container, docker_hosts_entity_1.DockerHost, activity_logs_entity_1.ActivityLog])],
        controllers: [docker_networks_controller_1.DockerNetworksController],
        providers: [docker_networks_service_1.DockerNetworksService],
        exports: [typeorm_1.TypeOrmModule, docker_networks_service_1.DockerNetworksService],
    })
], DockerNetworksModule);
exports.DockerNetworksModule = DockerNetworksModule;
//# sourceMappingURL=docker-networks.module.js.map