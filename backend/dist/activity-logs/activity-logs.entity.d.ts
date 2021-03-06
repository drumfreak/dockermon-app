import { Container } from 'src/containers/container.entity';
import { DockerImage } from 'src/docker-images/docker-images.entity';
import { DockerNetwork } from 'src/docker-networks/docker-networks.entity';
import { DockerVolume } from 'src/docker-volumes/docker-volumes.entity';
import { Profiling } from 'src/profiling/profiling.entity';
import { User } from 'src/users/user.entity';
export declare class ActivityLog {
    id: number;
    event: any;
    action: string;
    type: string;
    dockerId: string;
    contentId: number;
    contentType: string;
    contentName: string;
    data: any;
    containerSnapshotBefore: any;
    containerSnapshotAfter: any;
    notes: string;
    viewed: boolean;
    createdAt: Date;
    updatedAt: Date;
    deleted: Date;
    container: Container;
    volume: DockerVolume;
    image: DockerImage;
    host: DockerImage;
    network: DockerNetwork;
    profiling: Profiling;
    user: User;
}
