import { Socket } from 'socket.io-client';
export declare class WorkersSocketIoClientProvider {
    private readonly config;
    private socket;
    private connect;
    getSocket: () => Socket<import("@socket.io/component-emitter").DefaultEventsMap, import("@socket.io/component-emitter").DefaultEventsMap>;
}
