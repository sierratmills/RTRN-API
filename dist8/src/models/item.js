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
const repository_1 = require("@loopback/repository");
const store_1 = require("./store");
const user_1 = require("./user");
const list_1 = require("./list");
let Item = class Item extends repository_1.Entity {
};
__decorate([
    repository_1.property({
        type: "string",
        id: true
    }),
    __metadata("design:type", String)
], Item.prototype, "itemname", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Item.prototype, "itemtype", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Item.prototype, "price", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Item.prototype, "URL", void 0);
__decorate([
    repository_1.property({
        type: "Store"
    }),
    __metadata("design:type", store_1.Store)
], Item.prototype, "store", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], Item.prototype, "image", void 0);
__decorate([
    repository_1.property({
        type: "User"
    }),
    __metadata("design:type", user_1.User)
], Item.prototype, "carts", void 0);
__decorate([
    repository_1.property({
        type: "list"
    }),
    __metadata("design:type", list_1.List)
], Item.prototype, "lists", void 0);
__decorate([
    repository_1.property({
        type: "order"
    }),
    __metadata("design:type", Object)
], Item.prototype, "orders", void 0);
Item = __decorate([
    repository_1.model({
        name: "item"
    })
], Item);
exports.Item = Item;
//# sourceMappingURL=item.js.map