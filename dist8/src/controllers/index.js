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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./ping.controller"));
__export(require("./user.controller"));
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const Item_repository_1 = require("../repositories/Item.repository");
const Item_1 = require("../models/Item");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let ItemController = class ItemController {
    constructor(itemRepo) {
        this.itemRepo = itemRepo;
    }
    async getAllItems(ordername) {
        return await this.itemRepo.find();
    }
    getSpecificItem(itemname) {
        return "Not found";
    }
    async createItem(item) {
        let createdItem = await this.itemRepo.create(item);
        return createdItem;
    }
};
__decorate([
    rest_1.get("/items"),
    __param(0, rest_1.param.query.string("itemId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "getAllItems", null);
__decorate([
    rest_1.get("/item/itemname"),
    __param(0, rest_1.param.path.string("itemname")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ItemController.prototype, "getSpecificItem", null);
__decorate([
    rest_1.post("/item"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Item_1.Item]),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "createItem", null);
ItemController = __decorate([
    __param(0, repository_1.repository(Item_repository_1.ItemRepository.name)),
    __metadata("design:paramtypes", [Item_repository_1.ItemRepository])
], ItemController);
exports.ItemController = ItemController;
//# sourceMappingURL=index.js.map