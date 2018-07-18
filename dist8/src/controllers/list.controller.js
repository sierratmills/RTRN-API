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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
<<<<<<< HEAD
const List_repository_1 = require("../repositories/List.repository");
const List_1 = require("../models/List");
=======
const list_repository_1 = require("../repositories/list.repository");
const list_1 = require("../models/list");
>>>>>>> b2e60bfaaf3f90b668bcbb2f22ecd25e907cf94b
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let OrderController = class OrderController {
    constructor(listRepo) {
        this.listRepo = listRepo;
    }
    async getAllOrders(listname) {
        return await this.listRepo.find();
    }
    getSpecificList(listname) {
        return "Not found";
    }
    async createList(list) {
        let createdList = await this.listRepo.create(list);
        return createdList;
    }
};
__decorate([
    rest_1.get("/list"),
    __param(0, rest_1.param.query.string("listname")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    rest_1.get("/list/listname"),
    __param(0, rest_1.param.path.string("listname")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], OrderController.prototype, "getSpecificList", null);
__decorate([
    rest_1.post("/createlist"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
<<<<<<< HEAD
    __metadata("design:paramtypes", [List_1.List]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createList", null);
OrderController = __decorate([
    __param(0, repository_1.repository(List_repository_1.ListRepository.name)),
    __metadata("design:paramtypes", [List_repository_1.ListRepository])
=======
    __metadata("design:paramtypes", [list_1.List]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createList", null);
OrderController = __decorate([
    __param(0, repository_1.repository(list_repository_1.ListRepository.name)),
    __metadata("design:paramtypes", [list_repository_1.ListRepository])
>>>>>>> b2e60bfaaf3f90b668bcbb2f22ecd25e907cf94b
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=list.controller.js.map