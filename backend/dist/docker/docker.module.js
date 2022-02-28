"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
const activity_logs_service_1 = require("../activity-logs/activity-logs.service");
const container_entity_1 = require("../containers/container.entity");
const containers_module_1 = require("../containers/containers.module");
const docker_hosts_module_1 = require("../docker-hosts/docker-hosts.module");
const docker_hosts_service_1 = require("../docker-hosts/docker-hosts.service");
const docker_images_entity_1 = require("../docker-images/docker-images.entity");
const docker_images_module_1 = require("../docker-images/docker-images.module");
const docker_networks_entity_1 = require("../docker-networks/docker-networks.entity");
const docker_networks_module_1 = require("../docker-networks/docker-networks.module");
const docker_volumes_entity_1 = require("../docker-volumes/docker-volumes.entity");
const docker_volumes_module_1 = require("../docker-volumes/docker-volumes.module");
const events_module_1 = require("../events/events.module");
const stat_entity_1 = require("../stats/stat.entity");
const stats_module_1 = require("../stats/stats.module");
const docker_events_service_1 = require("./docker-events.service");
const docker_hub_service_1 = require("./docker-hub.service");
const docker_controller_1 = require("./docker.controller");
const docker_service_1 = require("./docker.service");
const site_data_service_1 = require("./site-data.service");
let DockerModule = class DockerModule {
};
DockerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([stat_entity_1.Stat, container_entity_1.Container, docker_images_entity_1.DockerImage, docker_volumes_entity_1.DockerVolume, docker_networks_entity_1.DockerNetwork, activity_logs_entity_1.ActivityLog]),
            axios_1.HttpModule,
            containers_module_1.ContainersModule,
            stats_module_1.StatsModule,
            docker_hosts_module_1.DockerHostsModule,
            docker_images_module_1.DockerImagesModule,
            docker_volumes_module_1.DockerVolumesModule,
            docker_networks_module_1.DockerNetworksModule,
            events_module_1.EventsModule,
        ],
        controllers: [docker_controller_1.DockerController],
        exports: [docker_service_1.DockerService, docker_events_service_1.DockerEventsService, docker_hub_service_1.DockerHubService],
        providers: [docker_service_1.DockerService, docker_events_service_1.DockerEventsService, docker_hub_service_1.DockerHubService, docker_hosts_service_1.DockerHostsService, site_data_service_1.SiteDataService, activity_logs_service_1.ActivityLogService],
    })
], DockerModule);
exports.DockerModule = DockerModule;
//# sourceMappingURL=docker.module.js.map