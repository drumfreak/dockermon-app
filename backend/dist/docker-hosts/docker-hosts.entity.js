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
exports.DockerHost = void 0;
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
const container_entity_1 = require("../containers/container.entity");
const docker_images_entity_1 = require("../docker-images/docker-images.entity");
const docker_networks_entity_1 = require("../docker-networks/docker-networks.entity");
const docker_volumes_entity_1 = require("../docker-volumes/docker-volumes.entity");
const typeorm_1 = require("typeorm");
let DockerHost = class DockerHost {
    constructor() {
        this.details = {};
        this.version = {};
        this.info = {};
        this.usageData = {};
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DockerHost.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: true,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "hostId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Number)
], DockerHost.prototype, "port", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 10,
        unique: false,
        default: 'http',
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "connectionType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "hostname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerHost.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerHost.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerHost.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerHost.prototype, "usageData", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], DockerHost.prototype, "containerCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], DockerHost.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], DockerHost.prototype, "ping", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "dockerVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "os", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "error", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerHost.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], DockerHost.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], DockerHost.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], DockerHost.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], DockerHost.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => container_entity_1.Container, (container) => container.host, { eager: false }),
    __metadata("design:type", Array)
], DockerHost.prototype, "containers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => docker_volumes_entity_1.DockerVolume, (volume) => volume.host, { eager: false }),
    __metadata("design:type", Array)
], DockerHost.prototype, "volumes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => docker_images_entity_1.DockerImage, (image) => image.host, { eager: false }),
    __metadata("design:type", Array)
], DockerHost.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => docker_networks_entity_1.DockerNetwork, (network) => network.host, { eager: false }),
    __metadata("design:type", Array)
], DockerHost.prototype, "networks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => activity_logs_entity_1.ActivityLog, (activityLog) => activityLog.host, { eager: false }),
    __metadata("design:type", Array)
], DockerHost.prototype, "activityLogs", void 0);
DockerHost = __decorate([
    (0, typeorm_1.Entity)()
], DockerHost);
exports.DockerHost = DockerHost;
//# sourceMappingURL=docker-hosts.entity.js.map