/// <reference types="node" />
import * as path from 'path';
export declare class ChildProcessService {
    private childFork;
    private forkedPoller;
    path: path.PlatformPath;
    forkChildFile(file: any): void;
    getForkedPoller(): any;
}
