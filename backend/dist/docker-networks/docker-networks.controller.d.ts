import { DockerNetworksService } from './docker-networks.service';
export declare class DockerNetworksController {
    private readonly networkService;
    constructor(networkService: DockerNetworksService);
    getNetworks(body: any): Promise<{
        status: string;
        data: import("./docker-networks.entity").DockerNetwork[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    getNetwork(param: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: string;
    }>;
}
