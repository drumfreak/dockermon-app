import { Repository } from 'typeorm';
import { ContainersDto } from './containers.dto';
import { Container } from './container.entity';
export declare class ContainersRepository extends Repository<Container> {
    createStats: (containers: ContainersDto) => Promise<ContainersDto & Container>;
}
