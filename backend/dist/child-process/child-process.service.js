"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildProcessService = void 0;
const common_1 = require("@nestjs/common");
const child_process_1 = require("child_process");
const path = require("path");
let ChildProcessService = class ChildProcessService {
    constructor() {
        this.childFork = null;
        this.forkedPoller = null;
        this.path = path;
    }
    forkChildFile(file) {
        if (!this.childFork) {
            this.childFork = (0, child_process_1.fork)(file);
            this.childFork.on('message', (msg) => {
                console.log('Message from child', msg);
            });
        }
        this.childFork.send({ hello: 'world' });
    }
    getForkedPoller() {
        try {
            if (!this.forkedPoller) {
                const pathName = path.resolve(__dirname, '../../src/tasks/poller.child.service.mjs');
                this.forkedPoller = (0, child_process_1.fork)(pathName);
            }
            return this.forkedPoller;
        }
        catch (error) {
            console.log(error);
        }
    }
};
ChildProcessService = __decorate([
    (0, common_1.Injectable)()
], ChildProcessService);
exports.ChildProcessService = ChildProcessService;
//# sourceMappingURL=child-process.service.js.map