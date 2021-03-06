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
let Store = class Store extends repository_1.Entity {
};
__decorate([
    repository_1.property({
        type: "number",
        id: true
    }),
    __metadata("design:type", Number)
], Store.prototype, "idstore", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Store.prototype, "storename", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Store.prototype, "storetype", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Store.prototype, "url", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Store.prototype, "returnurl", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Store.prototype, "address", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Store.prototype, "lat", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Store.prototype, "long", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], Store.prototype, "googleid", void 0);
__decorate([
    repository_1.property({
        type: "number",
    }),
    __metadata("design:type", Number)
], Store.prototype, "userid", void 0);
Store = __decorate([
    repository_1.model({
        name: "store"
    })
], Store);
exports.Store = Store;
//# sourceMappingURL=store.js.map