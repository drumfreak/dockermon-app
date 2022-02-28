import { ClientProxy, ReadPacket, WritePacket } from '@nestjs/microservices';
export declare class WorkersSocketIoClientProxyService extends ClientProxy {
    protected publish(packet: ReadPacket<any>, callback: (packet: WritePacket<any>) => void): () => void;
    private client;
    connect(): Promise<any>;
    close(): Promise<void>;
    dispatchEvent(packet: ReadPacket<any>): Promise<any>;
}
