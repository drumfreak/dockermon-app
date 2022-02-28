export declare class StatsDto {
    readonly id: number;
    readonly containerId: number;
    readonly cpu: number;
    readonly memory: number;
    readonly memoryLimit: number;
    readonly memoryPercent: number;
    readonly networkIn: number;
    readonly networkOut: number;
    readonly blockRead: number;
    readonly blockWrite: number;
    readonly pids: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deleted: Date;
}
