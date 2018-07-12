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
const Order_repository_1 = require("../repositories/Order.repository");
const Order_1 = require("../models/Order");
const jsonwebtoken_1 = require("jsonwebtoken");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let OrderController = class OrderController {
    constructor(orderRepo) {
        this.orderRepo = orderRepo;
    }
    verifyToken(jwt) {
        try {
            let payload = jsonwebtoken_1.verify(jwt, "shh");
            return payload.user.orderid;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid token");
        }
        // The user is authenticated and we can process...
    }
    async getAllOrders(ordername) {
        return await this.orderRepo.find();
    }
    getSpecificOrder(orderId) {
        let orderArr = this.getAllOrders;
        return orderArr;
    }
    async getOrderHistory(userId) {
        let foundOrder = await this.orderRepo.findOne({
            where: {
                and: [
                    { userid: userId }
                ],
            },
        });
        return foundOrder;
    }
    async createOrder(order) {
        var orderToStore = new Order_1.Order();
        orderToStore.id = order.id;
        orderToStore.store = order.store;
        orderToStore.date = order.date;
        return await this.orderRepo.create(orderToStore);
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
    rest_1.get("/orders"),
    __param(0, rest_1.param.query.string("orderId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    rest_1.get("/order/orderid"),
    __param(0, rest_1.param.path.string("orderId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], OrderController.prototype, "getSpecificOrder", null);
__decorate([
    rest_1.get("/orderhistory"),
    __param(0, rest_1.param.path.string("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderHistory", null);
__decorate([
    rest_1.post("/createorder"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Order_1.Order]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "createOrder", null);
OrderController = __decorate([
    __param(0, repository_1.repository(Order_repository_1.OrderRepository.name)),
    __metadata("design:paramtypes", [Order_repository_1.OrderRepository])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map