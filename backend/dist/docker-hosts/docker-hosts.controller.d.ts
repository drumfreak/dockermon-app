import { DockerHostsService } from './docker-hosts.service';
export declare class DockerHostsController {
    private readonly hostsService;
    constructor(hostsService: DockerHostsService);
    getHosts(body: any): Promise<{
        status: string;
        data: import("./docker-hosts.entity").DockerHost[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    getHost(param: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: string;
    }>;
}
