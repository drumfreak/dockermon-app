import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { ContainersService } from 'src/containers/containers.service';
import { DockerImagesService } from 'src/docker-images/docker-images.service';
import { DockerVolumesService } from 'src/docker-volumes/docker-volumes.service';
import { DockerNetworksService } from 'src/docker-networks/docker-networks.service';
import { DockerHostsService } from 'src/docker-hosts/docker-hosts.service';
export declare class DockerService {
    private readonly http;
    private readonly containersService;
    private readonly dockerImagesService;
    private readonly dockerVolumesService;
    private readonly dockerNetworkService;
    private readonly dockerHostService;
    private readonly logger;
    private readonly exec;
    constructor(http: HttpService, containersService: ContainersService, dockerImagesService: DockerImagesService, dockerVolumesService: DockerVolumesService, dockerNetworkService: DockerNetworksService, dockerHostService: DockerHostsService);
    handleData(data: any): Promise<any>;
    dockerInfo(host?: number): Promise<any>;
    dockerPing(host?: number): Promise<any>;
    dockerVersion(host?: number): Promise<any>;
    dockerUsage(host?: number): Promise<{
        volumes: any;
        containers: any;
        images: any;
    }>;
    processVoumes(volumes: any, hostId: any): Promise<any>;
    processContainers(containers: any, hostId: any): Promise<any>;
    processImages(images: any, hostId: any): Promise<any>;
    inspectContainer(container: any, broadcast?: boolean): Promise<any>;
    containerStats(container: any, hostId: number): Promise<any>;
    pauseContainer(container: any): Promise<any>;
    execContainer(container: any): Promise<any>;
    containerProcesses(container: any): Promise<any>;
    containerFiles(container: any): Promise<any>;
    renameContainer(container: any): Promise<any>;
    updateContainer(container: any): Promise<any>;
    unpauseContainer(container: any): Promise<any>;
    stopContainer(container: any): Promise<any>;
    startContainer(container: any): Promise<any>;
    restartContainer(container: any): Promise<any>;
    createContainer(container: any, hostId?: number): Promise<any>;
    killContainer(container: any): Promise<any>;
    removeContainer(container: any): Promise<any>;
    listContainers(body: any): Promise<any>;
    containerLogs(body: any): Promise<Observable<any>>;
    listImages(body: any): Promise<any>;
    inspectImage(image: any): Promise<any>;
    pullImage(data: any): Promise<Observable<any>>;
    createImage(data: any, hostId?: number): Promise<Observable<any>>;
    removeImage(image: any): Promise<any>;
    listVolumes(body: any): Promise<any>;
    inspectVolume(volume: any, hostId?: number): Promise<any>;
    createVolume(data: any): Promise<any>;
    removeVolume(volume: any): Promise<any>;
    listNetworks(body: any): Promise<any>;
    inspectNetwork(network: any): Promise<any>;
    createNetwork(data: any): Promise<any>;
    removeNetwork(network: any): Promise<any>;
    connectContainerNetwork(network: any): Promise<any>;
    disconnectContainerNetwork(network: any): Promise<any>;
    searchDockerHub(body: any): Promise<{
        hook: string;
        data: any;
    }>;
    dockerHubImage(body: any): Promise<{
        hook: string;
        data: any;
    }>;
    getHostId(item: any): any;
}
