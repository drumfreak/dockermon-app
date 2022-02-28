export declare class Stat {
    id: number;
    containerId: number;
    hostId: number;
    cpu: number;
    memory: number;
    memoryLimit: number;
    memoryPercent: number;
    networkIn: number;
    networkOut: number;
    blockRead: number;
    blockWrite: number;
    pids: number;
    statsData: any;
    processed: boolean;
    profiling: boolean;
    profilingId: number;
    createdAt: Date;
    updatedAt: Date;
    deleted: Date;
}
