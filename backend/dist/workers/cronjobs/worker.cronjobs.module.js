"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerCronjobsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const stat_entity_1 = require("../../stats/stat.entity");
const user_entity_1 = require("../../users/user.entity");
const container_entity_1 = require("../../containers/container.entity");
const role_entity_1 = require("../../roles/role.entity");
require("dotenv/config");
const axios_1 = require("@nestjs/axios");
const docker_images_entity_1 = require("../../docker-images/docker-images.entity");
const docker_volumes_entity_1 = require("../../docker-volumes/docker-volumes.entity");
const bull_1 = require("@nestjs/bull");
const profiling_entity_1 = require("../../profiling/profiling.entity");
const docker_networks_entity_1 = require("../../docker-networks/docker-networks.entity");
const worker_cronjobs_processor_1 = require("./worker.cronjobs.processor");
const worker_cronjobs_service_1 = require("./worker.cronjobs.service");
const workers_socket_io_client_proxy_service_1 = require("../socket/workers.socket-io-client.proxy.service");
const workers_socket_io_client_provider_1 = require("../socket/workers.socket-io-client.provider");
const config_1 = require("@nestjs/config");
const stats_module_1 = require("../../stats/stats.module");
const containers_module_1 = require("../../containers/containers.module");
const workercronjobs_controller_1 = require("./workercronjobs.controller");
const docker_service_1 = require("../../docker/docker.service");
const docker_images_module_1 = require("../../docker-images/docker-images.module");
const docker_volumes_module_1 = require("../../docker-volumes/docker-volumes.module");
const docker_networks_module_1 = require("../../docker-networks/docker-networks.module");
const docker_hosts_entity_1 = require("../../docker-hosts/docker-hosts.entity");
const docker_hosts_module_1 = require("../../docker-hosts/docker-hosts.module");
const stats_util_1 = require("../../utility/stats.util");
const stats_service_1 = require("../../stats/stats.service");
const activity_logs_entity_1 = require("../../activity-logs/activity-logs.entity");
const typeORMLogging = process.env.TYPEORM_LOGGING === 'false' ? false : false;
const typeORMMigrations = process.env.TYPEORM_MIGRATIONS === 'false' ? false : false;
let WorkerCronjobsModule = class WorkerCronjobsModule {
    onModuleInit() {
        console.log('------------->>>  Cronjobs WORKER: ', process.pid);
    }
};
WorkerCronjobsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.MYSQL_DEV_HOST,
                port: Number(process.env.MYSQL_DEV_PORT),
                username: process.env.MYSQL_DEV_USER,
                password: process.env.MYSQL_DEV_PW,
                database: process.env.MYSQL_DEV_DB,
                entities: [user_entity_1.User, role_entity_1.Role, stat_entity_1.Stat, container_entity_1.Container, docker_hosts_entity_1.DockerHost, docker_images_entity_1.DockerImage, docker_volumes_entity_1.DockerVolume, docker_networks_entity_1.DockerNetwork, profiling_entity_1.Profiling, activity_logs_entity_1.ActivityLog],
                synchronize: false,
                logging: typeORMLogging,
                migrationsTableName: 'migrations',
                migrations: ['dist/migration/*{.ts,.js}'],
                cli: {
                    migrationsDir: 'src/migration',
                },
                migrationsRun: typeORMMigrations,
            }),
            bull_1.BullModule.forRoot({
                redis: {
                    host: process.env.REDIS_HOST,
                    port: Number(process.env.REDIS_PORT),
                },
            }),
            bull_1.BullModule.registerQueue({
                name: 'cronProcessor',
            }),
            axios_1.HttpModule.register({
                timeout: 0,
                maxRedirects: 5,
            }),
            docker_hosts_module_1.DockerHostsModule,
            containers_module_1.ContainersModule,
            docker_images_module_1.DockerImagesModule,
            stats_module_1.StatsModule,
            docker_volumes_module_1.DockerVolumesModule,
            docker_networks_module_1.DockerNetworksModule,
        ],
        controllers: [workercronjobs_controller_1.WorkerCronjobsController],
        providers: [
            worker_cronjobs_processor_1.WorkerCronjobsProcessor,
            worker_cronjobs_service_1.WorkerCronjobsService,
            workers_socket_io_client_proxy_service_1.WorkersSocketIoClientProxyService,
            workers_socket_io_client_provider_1.WorkersSocketIoClientProvider,
            config_1.ConfigService,
            docker_service_1.DockerService,
            stats_util_1.StatsUtility,
            stats_service_1.StatsService,
        ],
    })
], WorkerCronjobsModule);
exports.WorkerCronjobsModule = WorkerCronjobsModule;
//# sourceMappingURL=worker.cronjobs.module.js.map