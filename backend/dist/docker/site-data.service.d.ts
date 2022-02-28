/// <reference types="node" />
import { exec } from 'child_process';
import { DockerHostsService } from 'src/docker-hosts/docker-hosts.service';
import { ContainersService } from 'src/containers/containers.service';
import { DockerVolumesService } from 'src/docker-volumes/docker-volumes.service';
import { DockerImagesService } from 'src/docker-images/docker-images.service';
import { DockerNetworksService } from 'src/docker-networks/docker-networks.service';
export declare class SiteDataService {
    private readonly hostsService;
    private readonly containersService;
    private readonly volumesService;
    private readonly imagesService;
    private readonly networksservice;
    private readonly logger;
    exec: typeof exec.__promisify__;
    constructor(hostsService: DockerHostsService, containersService: ContainersService, volumesService: DockerVolumesService, imagesService: DockerImagesService, networksservice: DockerNetworksService);
    getSiteData(): Promise<{
        data: any;
    }>;
    processItems(type: any, key: any): Promise<any>;
}
