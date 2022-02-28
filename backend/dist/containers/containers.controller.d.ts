import { ContainersService } from './containers.service';
export declare class ContainersController {
    private readonly containersService;
    constructor(containersService: ContainersService);
    getContainers(body: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    getContainer(param: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: string;
    }>;
}
