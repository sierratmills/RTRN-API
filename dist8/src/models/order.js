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
const user_1 = require("./user");
const item_1 = require("./item");
let Order = class Order extends repository_1.Entity {
};
__decorate([
    repository_1.property({
        type: "user",
        id: true
    }),
    __metadata("design:type", user_1.User)
], Order.prototype, "user", void 0);
__decorate([
    repository_1.property({
        type: "item",
    }),
    __metadata("design:type", item_1.Item)
], Order.prototype, "items", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Order.prototype, "orderNumber", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Order.prototype, "address", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Order.prototype, "payment", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Order.prototype, "receipt", void 0);
Order = __decorate([
    repository_1.model({
        name: "order"
    })
], Order);
exports.Order = Order;
//# sourceMappingURL=order.js.map