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
var SiteDataService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteDataService = void 0;
const common_1 = require("@nestjs/common");
const util_1 = require("util");
const child_process_1 = require("child_process");
const docker_hosts_service_1 = require("../docker-hosts/docker-hosts.service");
const containers_service_1 = require("../containers/containers.service");
const docker_volumes_service_1 = require("../docker-volumes/docker-volumes.service");
const docker_images_service_1 = require("../docker-images/docker-images.service");
const docker_networks_service_1 = require("../docker-networks/docker-networks.service");
const rxjs_1 = require("rxjs");
let SiteDataService = SiteDataService_1 = class SiteDataService {
    constructor(hostsService, containersService, volumesService, imagesService, networksservice) {
        this.hostsService = hostsService;
        this.containersService = containersService;
        this.volumesService = volumesService;
        this.imagesService = imagesService;
        this.networksservice = networksservice;
        this.logger = new common_1.Logger(SiteDataService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
    }
    async getSiteData() {
        try {
            console.log('<---------------------------------------------- Getting Site Data');
            let hosts;
            const h = await this.hostsService.getHosts({ limit: 1000 });
            if (h.status === 'success') {
                hosts = h.data;
            }
            else {
                throw new Error(h.error);
            }
            const returnObj = await (0, rxjs_1.firstValueFrom)((0, rxjs_1.forkJoin)({
                containers: this.processItems('containers', 'containers'),
                volumes: this.processItems('volumes', 'volumes'),
                images: this.processItems('images', 'images'),
                networks: this.processItems('networks', 'networks'),
            }));
            const mappedHosts = {};
            hosts.map((host) => {
                mappedHosts[host.id] = host;
            });
            returnObj.hosts = mappedHosts;
            return { data: returnObj };
        }
        catch (error) {
            this.logger.warn(error);
            throw error;
        }
    }
    async processItems(type, key) {
        console.log('processItems', type, key);
        try {
            let c;
            switch (type) {
                case 'containers':
                    c = await this.containersService.getContainers({ limit: 1000 });
                    break;
                case 'volumes':
                    c = await this.volumesService.getVolumes({ limit: 1000 });
                    break;
                case 'images':
                    c = await this.imagesService.getImages({ limit: 1000 });
                    break;
                case 'networks':
                    c = await this.networksservice.getNetworks({ limit: 1000 });
                    break;
            }
            if (c.status === 'success') {
                const data = {};
                await c.data.map((item) => {
                    var _a;
                    let hostId;
                    if ((_a = item.host) === null || _a === void 0 ? void 0 : _a.id) {
                        hostId = item.host.id;
                    }
                    else if (item.hostId) {
                        hostId = hostId;
                    }
                    if (!data[hostId]) {
                        data[hostId] = {};
                        data[hostId][key] = {};
                    }
                    data[hostId][key][item.id] = item;
                });
                return data;
            }
            else {
                throw new Error(c.message);
            }
        }
        catch (error) {
            this.logger.warn(error);
            throw new Error(error.message);
        }
    }
};
SiteDataService = SiteDataService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [docker_hosts_service_1.DockerHostsService,
        containers_service_1.ContainersService,
        docker_volumes_service_1.DockerVolumesService,
        docker_images_service_1.DockerImagesService,
        docker_networks_service_1.DockerNetworksService])
], SiteDataService);
exports.SiteDataService = SiteDataService;
//# sourceMappingURL=site-data.service.js.map