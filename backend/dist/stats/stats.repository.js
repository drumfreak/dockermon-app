"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsRepository = void 0;
const typeorm_1 = require("typeorm");
const stat_entity_1 = require("./stat.entity");
let StatsRepository = class StatsRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.createStats = async (stats) => {
            return await this.save(stats);
        };
    }
};
StatsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(stat_entity_1.Stat)
], StatsRepository);
exports.StatsRepository = StatsRepository;
//# sourceMappingURL=stats.repository.js.map