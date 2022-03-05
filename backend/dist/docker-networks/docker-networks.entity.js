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
exports.DockerNetwork = void 0;
const activity_logs_entity_1 = require("../activity-logs/activity-logs.entity");
const container_entity_1 = require("../containers/container.entity");
const docker_hosts_entity_1 = require("../docker-hosts/docker-hosts.entity");
const typeorm_1 = require("typeorm");
let DockerNetwork = class DockerNetwork {
    constructor() {
        this.details = {};
        this.usageData = {};
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DockerNetwork.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: true,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DockerNetwork.prototype, "networkId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerNetwork.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerNetwork.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Object)
], DockerNetwork.prototype, "usageData", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], DockerNetwork.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], DockerNetwork.prototype, "dead", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerNetwork.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerNetwork.prototype, "driver", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], DockerNetwork.prototype, "protected", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        unique: false,
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerNetwork.prototype, "scope", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", String)
], DockerNetwork.prototype, "error", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], DockerNetwork.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], DockerNetwork.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], DockerNetwork.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'timestamp',
        default: null,
        nullable: true,
    }),
    __metadata("design:type", Date)
], DockerNetwork.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => container_entity_1.Container, (container) => container.networks, { eager: true }),
    __metadata("design:type", Array)
], DockerNetwork.prototype, "containers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docker_hosts_entity_1.DockerHost, (host) => host.networks, { eager: false }),
    __metadata("design:type", docker_hosts_entity_1.DockerHost)
], DockerNetwork.prototype, "host", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => activity_logs_entity_1.ActivityLog, (activityLog) => activityLog.network, { eager: false }),
    __metadata("design:type", Array)
], DockerNetwork.prototype, "activityLogs", void 0);
DockerNetwork = __decorate([
    (0, typeorm_1.Entity)()
], DockerNetwork);
exports.DockerNetwork = DockerNetwork;
//# sourceMappingURL=docker-networks.entity.js.map