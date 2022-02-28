import { DockerImagesService } from './docker-images.service';
export declare class DockerImagesController {
    private readonly imagesService;
    constructor(imagesService: DockerImagesService);
    getImages(body: any): Promise<{
        status: string;
        data: import("./docker-images.entity").DockerImage[];
        message?: undefined;
    } | {
        status: string;
        data: any[];
        message: any;
    }>;
    getImage(param: any): Promise<{
        status: string;
        data: any;
        message?: undefined;
    } | {
        status: string;
        data: any;
        message: string;
    }>;
}
