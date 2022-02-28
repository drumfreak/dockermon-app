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
exports.DockerImage = void 0;
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
const container_entity_1 = require("../containers/container.entity");
const docker_hosts_entity_1 = require("../docker-hosts/docker-hosts.entity");
const typeorm_1 = require("typeorm");
let DockerImage = class DockerImage {
    constructor() {
        this.details = {};
        this.repoTags = {};
        this.labels = {};
        this.usageData = {};
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DockerImage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "imageId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "pullTag", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "parentImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], DockerImage.prototype, "containerId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "containerDockerId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "architecture", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "hostname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "dockerImage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerImage.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerImage.prototype, "repoTags", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerImage.prototype, "labels", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerImage.prototype, "usageData", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], DockerImage.prototype, "containerCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], DockerImage.prototype, "fileSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], DockerImage.prototype, "virtualSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', default: 0 }),
    __metadata("design:type", Number)
], DockerImage.prototype, "sharedSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], DockerImage.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "dockerVersion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "os", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "error", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerImage.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], DockerImage.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], DockerImage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], DockerImage.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], DockerImage.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docker_hosts_entity_1.DockerHost, (host) => host.images, { eager: false }),
    __metadata("design:type", docker_hosts_entity_1.DockerHost)
], DockerImage.prototype, "host", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => container_entity_1.Container, (container) => container.image, { eager: false }),
    __metadata("design:type", Array)
], DockerImage.prototype, "containers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => activity_logs_entity_1.ActivityLog, (activityLog) => activityLog.image, { eager: false }),
    __metadata("design:type", Array)
], DockerImage.prototype, "activityLogs", void 0);
DockerImage = __decorate([
    (0, typeorm_1.Entity)('images')
], DockerImage);
exports.DockerImage = DockerImage;
//# sourceMappingURL=docker-images.entity.js.map