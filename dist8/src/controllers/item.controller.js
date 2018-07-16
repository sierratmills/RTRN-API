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
const item_repository_1 = require("../repositories/item.repository");
const Item_1 = require("../models/Item");
const jsonwebtoken_1 = require("jsonwebtoken");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let OrderController = class OrderController {
    constructor(itemRepo) {
        this.itemRepo = itemRepo;
    }
    verifyToken(jwt) {
        try {
            let payload = jsonwebtoken_1.verify(jwt, "shh");
            return payload.userid;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid token");
        }
        // The user is authenticated and we can process...
    }
    async getAllItems(itemname) {
        return await this.itemRepo.find();
    }
    getSpecificItem(itemId) {
        let itemArr = this.getAllItems;
        return itemArr;
    }
    async createItem(item) {
        var itemToStore = new Item_1.Item();
        itemToStore.iditem = item.iditem;
        itemToStore.itemname = item.itemname;
        itemToStore.storename = item.storename;
        itemToStore.orderid = item.orderid;
        return await this.itemRepo.create(itemToStore);
    }
};
__decorate([
    rest_1.get("/verifyOrder"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "verifyToken", null);
__decorate([
    rest_1.get("/items"),
    __param(0, rest_1.param.query.string("itemId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAllItems", null);
__decorate([
    rest_1.get("/item/itemid"),
    __param(0, rest_1.param.path.string("itemId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], OrderController.prototype, "getSpecificItem", null);
__decorate([
    rest_1.post("/createitem"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Item_1.Item]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createItem", null);
OrderController = __decorate([
    __param(0, repository_1.repository(item_repository_1.ItemRepository.name)),
    __metadata("design:paramtypes", [item_repository_1.ItemRepository])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=item.controller.js.map