import { ContainersService } from 'src/containers/containers.service';
import { Repository } from 'typeorm';
import { Stat } from './stat.entity';
export declare class StatsService {
    private readonly statsRepository;
    private readonly containersService;
    private readonly logger;
    constructor(statsRepository: Repository<Stat>, containersService: ContainersService);
    getStats(body: any): Promise<{
        status: string;
        data: Stat[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    removeStats(where: any): Promise<any>;
    saveStats(stats: any): Promise<{
        status: string;
        data: any;
        message: string;
    }>;
    memoryToBytes: (memory: any) => number;
    networkToBytes: (memory: any) => number;
    blocksToBytes: (memory: any) => number;
}
