"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLogModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const container_entity_1 = require("../containers/container.entity");
const docker_hosts_entity_1 = require("../docker-hosts/docker-hosts.entity");
const docker_images_entity_1 = require("../docker-images/docker-images.entity");
const docker_volumes_entity_1 = require("../docker-volumes/docker-volumes.entity");
const profiling_entity_1 = require("../profiling/profiling.entity");
const user_entity_1 = require("../users/user.entity");
const activity_logs_controller_1 = require("./activity-logs.controller");
const activity_logs_entity_1 = require("./activity-logs.entity");
const activity_logs_service_1 = require("./activity-logs.service");
let ActivityLogModule = class ActivityLogModule {
};
ActivityLogModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([activity_logs_entity_1.ActivityLog, container_entity_1.Container, docker_volumes_entity_1.DockerVolume, docker_hosts_entity_1.DockerHost, docker_images_entity_1.DockerImage, user_entity_1.User, profiling_entity_1.Profiling])],
        controllers: [activity_logs_controller_1.ActivityLogController],
        providers: [activity_logs_service_1.ActivityLogService],
        exports: [typeorm_1.TypeOrmModule, activity_logs_service_1.ActivityLogService],
    })
], ActivityLogModule);
exports.ActivityLogModule = ActivityLogModule;
//# sourceMappingURL=activity-logs.module.js.map