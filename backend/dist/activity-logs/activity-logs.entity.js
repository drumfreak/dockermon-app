"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLog = void 0;
const container_entity_1 = require("../containers/container.entity");
const docker_hosts_entity_1 = require("../docker-hosts/docker-hosts.entity");
const docker_images_entity_1 = require("../docker-images/docker-images.entity");
const docker_networks_entity_1 = require("../docker-networks/docker-networks.entity");
const docker_volumes_entity_1 = require("../docker-volumes/docker-volumes.entity");
const profiling_entity_1 = require("../profiling/profiling.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let ActivityLog = class ActivityLog {
    constructor() {
        this.event = {};
        this.data = {};
        this.containerSnapshotBefore = {};
        this.containerSnapshotAfter = {};
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ActivityLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ActivityLog.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], ActivityLog.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], ActivityLog.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], ActivityLog.prototype, "dockerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ActivityLog.prototype, "contentId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], ActivityLog.prototype, "contentType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], ActivityLog.prototype, "contentName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ActivityLog.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ActivityLog.prototype, "containerSnapshotBefore", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], ActivityLog.prototype, "containerSnapshotAfter", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], ActivityLog.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ActivityLog.prototype, "viewed", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], ActivityLog.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], ActivityLog.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], ActivityLog.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => container_entity_1.Container, (container) => container.activityLogs, { eager: false }),
    __metadata("design:type", container_entity_1.Container)
], ActivityLog.prototype, "container", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docker_volumes_entity_1.DockerVolume, (volume) => volume.activityLogs, { eager: false }),
    __metadata("design:type", docker_volumes_entity_1.DockerVolume)
], ActivityLog.prototype, "volume", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docker_images_entity_1.DockerImage, (image) => image.activityLogs, { eager: false }),
    __metadata("design:type", docker_images_entity_1.DockerImage)
], ActivityLog.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docker_hosts_entity_1.DockerHost, (host) => host.activityLogs, { eager: false }),
    __metadata("design:type", docker_images_entity_1.DockerImage)
], ActivityLog.prototype, "host", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docker_networks_entity_1.DockerNetwork, (network) => network.activityLogs, { eager: false }),
    __metadata("design:type", docker_networks_entity_1.DockerNetwork)
], ActivityLog.prototype, "network", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profiling_entity_1.Profiling, (profiling) => profiling.activityLogs, { eager: false }),
    __metadata("design:type", profiling_entity_1.Profiling)
], ActivityLog.prototype, "profiling", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.activityLogs, { eager: false }),
    __metadata("design:type", user_entity_1.User)
], ActivityLog.prototype, "user", void 0);
ActivityLog = __decorate([
    (0, typeorm_1.Entity)()
], ActivityLog);
exports.ActivityLog = ActivityLog;
//# sourceMappingURL=activity-logs.entity.js.map