"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModule = void 0;
const events_service_1 = require("./events.service");
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const containers_module_1 = require("../containers/containers.module");
const stat_entity_1 = require("../stats/stat.entity");
const stats_module_1 = require("../stats/stats.module");
const events_gateway_1 = require("./events.gateway");
const docker_service_1 = require("../docker/docker.service");
const docker_hub_service_1 = require("../docker/docker-hub.service");
const docker_images_module_1 = require("../docker-images/docker-images.module");
const docker_volumes_module_1 = require("../docker-volumes/docker-volumes.module");
const docker_volumes_entity_1 = require("../docker-volumes/docker-volumes.entity");
const container_entity_1 = require("../containers/container.entity");
const bull_1 = require("@nestjs/bull");
const docker_networks_module_1 = require("../docker-networks/docker-networks.module");
const docker_hosts_module_1 = require("../docker-hosts/docker-hosts.module");
const site_data_service_1 = require("../docker/site-data.service");
let EventsModule = class EventsModule {
};
EventsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([stat_entity_1.Stat, docker_volumes_entity_1.DockerVolume, container_entity_1.Container]),
            bull_1.BullModule.registerQueue({
                name: 'eventsProcessor',
            }),
            axios_1.HttpModule,
            stats_module_1.StatsModule,
            containers_module_1.ContainersModule,
            docker_images_module_1.DockerImagesModule,
            docker_volumes_module_1.DockerVolumesModule,
            docker_networks_module_1.DockerNetworksModule,
            docker_hosts_module_1.DockerHostsModule,
        ],
        controllers: [],
        exports: [events_gateway_1.EventsGateway],
        providers: [events_service_1.EventsService, events_gateway_1.EventsGateway, docker_service_1.DockerService, docker_hub_service_1.DockerHubService, site_data_service_1.SiteDataService],
    })
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map