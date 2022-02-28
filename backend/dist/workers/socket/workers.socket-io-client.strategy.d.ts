import { CustomTransportStrategy, Server } from '@nestjs/microservices';
import { Socket } from 'socket.io-client';
export declare class WorkersSocketIoClientStrategy extends Server implements CustomTransportStrategy {
    private client;
    constructor(client: Socket);
    listen(callback: () => void): void;
    close(): void;
}
