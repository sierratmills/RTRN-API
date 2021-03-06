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
const user_repository_1 = require("../repositories/user.repository");
const user_1 = require("../models/user");
const jsonwebtoken_1 = require("jsonwebtoken");
var bcrypt = require('bcryptjs');
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let UserController = class UserController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    verifyToken(jwt) {
        try {
            let payload = jsonwebtoken_1.verify(jwt, "shh");
            console.log(payload);
            return payload;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid token");
        }
        // The user is authenticated and we can process...
    }
    async getAllUsers() {
        return await this.userRepo.find();
    }
    async getSpecificUser(userId) {
        var userArr = await this.getAllUsers();
        for (var i = 0; i < userArr.length; i++) {
            var current = userArr[i];
            if (current.username == userId) {
                return current;
            }
        }
    }
    async registerUser(user) {
        if (!user.email || !user.password || !user.username || !user.firstname || !user.lastname) {
            throw new rest_1.HttpErrors.BadRequest('user is missing data');
        }
        if (await this.userRepo.count({ email: user.email })) {
            throw new rest_1.HttpErrors.BadRequest('user already exists');
        }
        if (await this.userRepo.count({ username: user.username })) {
            throw new rest_1.HttpErrors.BadRequest('username already exists');
        }
        let hashedPassword = await bcrypt.hash(user.password, 10);
        var userToStore = new user_1.User();
        userToStore.id = user.id;
        userToStore.firstname = user.firstname;
        userToStore.lastname = user.lastname;
        userToStore.email = user.email;
        userToStore.password = hashedPassword;
        userToStore.username = user.username;
        return await this.userRepo.create(userToStore);
    }
    async loginUser(user) {
        // Check that email and password are both supplied
        if (!user.email || !user.password) {
            throw new rest_1.HttpErrors.Unauthorized('invalid credentials');
        }
        // Check that email and password are valid
        let userExists = !(await this.userRepo.count({
            and: [
                { email: user.email },
                { password: user.password },
            ],
        }));
        if (!userExists) {
            throw new rest_1.HttpErrors.Unauthorized('invalid credentials');
        }
        let foundUser = await this.userRepo.findOne({
            where: {
                and: [
                    { email: user.email }
                ],
            },
        });
        if (!await bcrypt.compare(user.password, foundUser.password)) {
            throw new rest_1.HttpErrors.Unauthorized('invalid credentials');
        }
        let jwt = jsonwebtoken_1.sign({
            user: {
                id: foundUser.id,
                email: foundUser.email,
                firstname: foundUser.firstname,
                lastname: foundUser.lastname,
                username: foundUser.username
            }
        }, "shh", {
            issuer: "auth.ix.com",
            audience: "ix.com"
        });
        return {
            token: jwt
        };
    }
    async editUserInfo(user, jwt) {
        var payload;
        try {
            payload = jsonwebtoken_1.verify(jwt, "shh");
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid token");
        }
        let foundUser = await this.userRepo.findOne({
            where: {
                and: [
                    { id: payload.user.id },
                ],
            },
        });
        if (user.firstname != "") {
            foundUser.firstname = user.firstname;
        }
        if (user.lastname != "") {
            foundUser.lastname = user.lastname;
        }
        if (user.email != "") {
            if (await this.userRepo.count({ email: user.email })) {
                throw new rest_1.HttpErrors.BadRequest('email already taken');
            }
            else {
                foundUser.email = user.email;
            }
        }
        if (user.username != "") {
            if (await this.userRepo.count({ username: user.username })) {
                throw new rest_1.HttpErrors.BadRequest('username already taken');
            }
            else {
                foundUser.username = user.username;
            }
        }
        this.userRepo.save(foundUser);
    }
};
__decorate([
    rest_1.get("/verify"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "verifyToken", null);
__decorate([
    rest_1.get("/users"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    rest_1.get("/user/{userid}"),
    __param(0, rest_1.param.path.string("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getSpecificUser", null);
__decorate([
    rest_1.post("/register"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerUser", null);
__decorate([
    rest_1.post('/login'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    rest_1.put('/editprofile'),
    __param(0, rest_1.requestBody()), __param(1, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "editUserInfo", null);
UserController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository.name)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map