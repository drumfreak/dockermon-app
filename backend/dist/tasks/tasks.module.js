"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const axios_1 = require("@nestjs/axios");
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const containers_module_1 = require("../containers/containers.module");
const docker_module_1 = require("../docker/docker.module");
const events_module_1 = require("../events/events.module");
const stat_entity_1 = require("../stats/stat.entity");
const stats_module_1 = require("../stats/stats.module");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([stat_entity_1.Stat]),
            bull_1.BullModule.registerQueue({
                name: 'cronProcessor',
            }),
            axios_1.HttpModule,
            containers_module_1.ContainersModule,
            stats_module_1.StatsModule,
            docker_module_1.DockerModule,
            events_module_1.EventsModule,
        ],
        controllers: [],
        providers: [],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map