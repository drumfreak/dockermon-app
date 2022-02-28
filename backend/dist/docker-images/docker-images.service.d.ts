/// <reference types="node" />
import { DockerImage } from './docker-images.entity';
import { exec } from 'child_process';
import { Repository } from 'typeorm';
export declare class DockerImagesService {
    private readonly imageRepository;
    private readonly logger;
    exec: typeof exec.__promisify__;
    constructor(imageRepository: Repository<DockerImage>);
    getImageById(id: any): Promise<any>;
    getImages(body: any): Promise<{
        status: string;
        data: DockerImage[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    save(image: any): Promise<any>;
    removeImage(where: any): Promise<any>;
    imageDetails(c: any): Promise<any>;
    findOrCreate(c2: any): Promise<any>;
}
