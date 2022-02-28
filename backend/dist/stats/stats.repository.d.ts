import { Repository } from 'typeorm';
import { StatsDto } from './stats.dto';
import { Stat } from './stat.entity';
export declare class StatsRepository extends Repository<Stat> {
    createStats: (stats: StatsDto) => Promise<StatsDto & Stat>;
}
