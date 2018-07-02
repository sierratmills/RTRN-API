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
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
class PizzaController {
    constructor() { }
    getAllPizzas(toppings) {
        var pizzas = [];
        if (toppings == "pineapple") {
            pizzas.push("with pineapple");
        }
        else {
            pizzas.push("Yum");
        }
        return pizzas;
    }
    getSpecificPizza(pizzaId) {
        if (pizzaId == "A") {
            return "ABC";
        }
        if (pizzaId == "B") {
            return "BCD";
        }
        return "Not found";
    }
}
__decorate([
    rest_1.get("/pizzas"),
    __param(0, rest_1.param.query.string("toppings")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], PizzaController.prototype, "getAllPizzas", null);
__decorate([
    rest_1.get("/pizza/pizzaid"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], PizzaController.prototype, "getSpecificPizza", null);
exports.PizzaController = PizzaController;
//# sourceMappingURL=pizza.controller.js.map