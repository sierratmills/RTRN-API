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
const store_1 = require("../models/store");
const store_repository_1 = require("../repositories/store.repository");
const jsonwebtoken_1 = require("jsonwebtoken");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let StoreController = class StoreController {
    constructor(storeRepo) {
        this.storeRepo = storeRepo;
    }
    async getAllStores(storename) {
        return await this.storeRepo.find();
    }
    getSpecificStore(storeId) {
        return "Not found";
    }
    async createStore(store) {
        var storeToStore = new store_1.Store();
        storeToStore.storename = store.storename;
        storeToStore.storetype = store.storetype;
        storeToStore.url = store.url;
        storeToStore.returnurl = store.returnurl;
        storeToStore.address = store.address;
        storeToStore.lat = store.lat;
        storeToStore.long = store.long;
        storeToStore.googleid = store.googleid;
        storeToStore.userid = store.userid;
        return await this.storeRepo.create(storeToStore);
    }
    async getFavoriteStores(userId) {
        let foundStores = await this.storeRepo.find({
            where: {
                and: [
                    { userid: userId }
                ],
            },
        });
        return foundStores;
    }
    async addFavoriteStore(store, jwt) {
        var payload;
        try {
            payload = jsonwebtoken_1.verify(jwt, "shh");
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid token");
        }
        let foundstore = await this.storeRepo.findOne({
            where: {
                and: [
                    { storename: store.storename,
                        lat: store.lat,
                        long: store.long },
                ],
            },
        });
        foundstore.userid = payload.user.id;
        this.storeRepo.save(foundstore);
    }
};
__decorate([
    rest_1.get("/stores"),
    __param(0, rest_1.param.query.string("storename")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getAllStores", null);
__decorate([
    rest_1.get("/store/storeid"),
    __param(0, rest_1.param.path.string("storeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StoreController.prototype, "getSpecificStore", null);
__decorate([
    rest_1.post("/createstore"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_1.Store]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "createStore", null);
__decorate([
    rest_1.get("/favoritestores"),
    __param(0, rest_1.param.path.number("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getFavoriteStores", null);
__decorate([
    rest_1.put('/addfavorite'),
    __param(0, rest_1.requestBody()), __param(1, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_1.Store, String]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "addFavoriteStore", null);
StoreController = __decorate([
    __param(0, repository_1.repository(store_repository_1.StoreRepository.name)),
    __metadata("design:paramtypes", [store_repository_1.StoreRepository])
], StoreController);
exports.StoreController = StoreController;
//# sourceMappingURL=store.controller.js.map