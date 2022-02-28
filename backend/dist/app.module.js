"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const profiling_module_1 = require("./profiling/profiling.module");
const jobs_module_1 = require("./jobs/jobs.module");
const docker_volumes_module_1 = require("./docker-volumes/docker-volumes.module");
const docker_volumes_controller_1 = require("./docker-volumes/docker-volumes.controller");
const docker_module_1 = require("./docker/docker.module");
const events_module_1 = require("./events/events.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const containers_module_1 = require("./containers/containers.module");
const roles_module_1 = require("./roles/roles.module");
const stats_module_1 = require("./stats/stats.module");
const auth_module_1 = require("./auth/auth.module");
const stat_entity_1 = require("./stats/stat.entity");
const user_entity_1 = require("./users/user.entity");
const container_entity_1 = require("./containers/container.entity");
const schedule_1 = require("@nestjs/schedule");
const tasks_module_1 = require("./tasks/tasks.module");
const role_entity_1 = require("./roles/role.entity");
require("dotenv/config");
const axios_1 = require("@nestjs/axios");
const docker_images_module_1 = require("./docker-images/docker-images.module");
const docker_images_entity_1 = require("./docker-images/docker-images.entity");
const docker_volumes_entity_1 = require("./docker-volumes/docker-volumes.entity");
const bull_1 = require("@nestjs/bull");
const jobs_processor_1 = require("./jobs/jobs.processor");
const jobs_service_1 = require("./jobs/jobs.service");
const jobs_controller_1 = require("./jobs/jobs.controller");
const profiling_entity_1 = require("./profiling/profiling.entity");
const docker_networks_module_1 = require("./docker-networks/docker-networks.module");
const docker_networks_entity_1 = require("./docker-networks/docker-networks.entity");
const docker_hosts_entity_1 = require("./docker-hosts/docker-hosts.entity");
const docker_hosts_module_1 = require("./docker-hosts/docker-hosts.module");
const activity_logs_entity_1 = require("./activity-logs/activity-logs.entity");
const activity_logs_module_1 = require("./activity-logs/activity-logs.module");
const typeORMLogging = process.env.TYPEORM_LOGGING === 'false' ? false : true;
const typeORMSync = process.env.TYPEORM_SYNC === 'false' ? false : true;
const typeORMMigrations = process.env.TYPEORM_MIGRATIONS === 'false' ? false : true;
let AppModule = class AppModule {
    onModuleInit() {
    }
};
AppModule = __decorate([
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
                synchronize: typeORMSync,
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
                name: 'jobsProcessor',
            }),
            bull_1.BullModule.registerQueue({
                name: 'eventsProcessor',
            }),
            events_module_1.EventsModule,
            jobs_module_1.JobsModule,
            schedule_1.ScheduleModule.forRoot(),
            activity_logs_module_1.ActivityLogModule,
            docker_volumes_module_1.DockerVolumesModule,
            docker_hosts_module_1.DockerHostsModule,
            users_module_1.UsersModule,
            containers_module_1.ContainersModule,
            roles_module_1.RolesModule,
            stats_module_1.StatsModule,
            auth_module_1.AuthModule,
            tasks_module_1.TasksModule,
            axios_1.HttpModule.register({
                timeout: 0,
                maxRedirects: 5,
            }),
            docker_module_1.DockerModule,
            docker_images_module_1.DockerImagesModule,
            docker_volumes_module_1.DockerVolumesModule,
            profiling_module_1.ProfilingModule,
            docker_networks_module_1.DockerNetworksModule,
        ],
        controllers: [docker_volumes_controller_1.DockerVolumesController, app_controller_1.AppController, jobs_controller_1.JobsController],
        providers: [app_service_1.AppService, jobs_processor_1.JobsProcessor, jobs_service_1.JobsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map