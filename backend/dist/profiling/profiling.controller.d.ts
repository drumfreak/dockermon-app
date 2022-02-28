import { ProfilingService } from './profiling.service';
export declare class ProfilingController {
    private readonly profilingService;
    constructor(profilingService: ProfilingService);
    getProfilings(body: any): Promise<{
        status: string;
        data: import("./profiling.entity").Profiling[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    getProfiling(param: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: string;
    }>;
}
