import { DockerVolumesService } from './docker-volumes.service';
export declare class DockerVolumesController {
    private readonly volumesService;
    constructor(volumesService: DockerVolumesService);
    getVolumes(body: any): Promise<{
        status: string;
        data: import("./docker-volumes.entity").DockerVolume[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    getVolume(param: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: string;
    }>;
}
