import { DockerHubService } from './docker-hub.service';
export declare class DockerController {
    private readonly dockerHubService;
    constructor(dockerHubService: DockerHubService);
    getContainers(query: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        message: any;
        data?: undefined;
    }>;
}
