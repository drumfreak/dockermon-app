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
exports.Container = void 0;
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
const docker_hosts_entity_1 = require("../docker-hosts/docker-hosts.entity");
const docker_images_entity_1 = require("../docker-images/docker-images.entity");
const docker_networks_entity_1 = require("../docker-networks/docker-networks.entity");
const docker_volumes_entity_1 = require("../docker-volumes/docker-volumes.entity");
const typeorm_1 = require("typeorm");
let Container = class Container {
    constructor() {
        this.processes = {};
        this.changedFiles = {};
        this.details = {};
        this.stats = {};
        this.statsSummary = {};
        this.mounts = {};
        this.labels = {};
        this.ports = {};
        this.portsInUse = {};
        this.usageData = {};
        this.dockerTemplate = {};
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Container.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: true,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], Container.prototype, "containerId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: true,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], Container.prototype, "containerLongId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], Container.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Container.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Container.prototype, "dockerImage", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Container.prototype, "running", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Container.prototype, "paused", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Container.prototype, "dead", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Container.prototype, "restarting", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Container.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Container.prototype, "statusMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Container.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Container.prototype, "error", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], Container.prototype, "command", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: null, nullable: true }),
    __metadata("design:type", Number)
], Container.prototype, "exitCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], Container.prototype, "fileSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], Container.prototype, "fileSizeRoot", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Container.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Container.prototype, "endedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Container.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "processes", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Container.prototype, "processesDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "changedFiles", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Container.prototype, "changedFilesDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "stats", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "statsSummary", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "mounts", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "labels", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "ports", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "portsInUse", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "usageData", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], Container.prototype, "dockerTemplate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Container.prototype, "protected", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Container.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Container.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], Container.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => docker_volumes_entity_1.DockerVolume, (volume) => volume.containers, { eager: false }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", docker_volumes_entity_1.DockerVolume)
], Container.prototype, "volumes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docker_images_entity_1.DockerImage, (image) => image.containers, { eager: false }),
    __metadata("design:type", docker_images_entity_1.DockerImage)
], Container.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docker_hosts_entity_1.DockerHost, (host) => host.containers, { eager: false }),
    __metadata("design:type", docker_hosts_entity_1.DockerHost)
], Container.prototype, "host", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => docker_networks_entity_1.DockerNetwork, (network) => network.containers, { eager: false }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", docker_networks_entity_1.DockerNetwork)
], Container.prototype, "networks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => activity_logs_entity_1.ActivityLog, (activityLog) => activityLog.container, { eager: false }),
    __metadata("design:type", Array)
], Container.prototype, "activityLogs", void 0);
Container = __decorate([
    (0, typeorm_1.Entity)()
], Container);
exports.Container = Container;
//# sourceMappingURL=container.entity.js.map