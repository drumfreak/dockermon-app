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
var DockerHubService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerHubService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const util_1 = require("util");
const child_process_1 = require("child_process");
const rxjs_1 = require("rxjs");
let DockerHubService = DockerHubService_1 = class DockerHubService {
    constructor(http) {
        this.http = http;
        this.logger = new common_1.Logger(DockerHubService_1.name);
        this.exec = (0, util_1.promisify)(child_process_1.exec);
        this.dockerHubUrl = 'http://hub.docker.com/v2/';
    }
    async searchRepositories(searchTerm) {
        if (!searchTerm) {
            return null;
        }
        try {
            const r = await (0, rxjs_1.firstValueFrom)(this.http.get(this.dockerHubUrl + '/search/repositories/?page_size=1000&query=' + searchTerm));
            if (r.status === 200) {
                return { status: 'success', data: r.data };
            }
            else {
                throw Error('Could not fetch');
            }
        }
        catch (error) {
            this.logger.warn(error);
            return { status: 'fail', message: error };
        }
    }
    async repositoryDetails(repository) {
        repository = repository.includes('/') ? '/' + repository : '/library/' + repository;
        if (!repository) {
            return null;
        }
        try {
            const link = this.dockerHubUrl + 'repositories' + repository;
            const r = await (0, rxjs_1.firstValueFrom)(this.http.get(link));
            if (r.status === 200) {
                return { status: 'success', data: r.data, hook: 'dockerHubRepositoryDetails' };
            }
            else {
                throw Error('Could not fetch');
            }
        }
        catch (error) {
            this.logger.warn(error);
            return { status: 'fail', message: error, hook: 'dockerHubRepositoryDetails' };
        }
    }
    async repositoryTags(repository, options = {}) {
        repository = repository.includes('/') ? '/' + repository : '/library/' + repository;
        if (!repository) {
            return null;
        }
        try {
            const limit = options.limit ? options.limit : 10;
            const page = options.page ? options.page : 1;
            let link = this.dockerHubUrl + 'repositories' + repository + '/tags?page=' + page + '&page_size=' + limit;
            if (options.useLink) {
                link = options.useLink;
            }
            const r = await (0, rxjs_1.firstValueFrom)(this.http.get(link));
            if (r.status === 200) {
                return { status: 'success', data: r.data, hook: 'dockerHubRepositoryTags' };
            }
            else {
                throw Error('Could not fetch');
            }
        }
        catch (error) {
            this.logger.warn(error);
            return { status: 'fail', message: error, hook: 'dockerHubRepositoryTags' };
        }
    }
};
DockerHubService = DockerHubService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], DockerHubService);
exports.DockerHubService = DockerHubService;
//# sourceMappingURL=docker-hub.service.js.map