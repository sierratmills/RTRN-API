import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<User>>;
    getSpecificUser(userId: string): Promise<any>;
    registerUser(user: User): Promise<User>;
}
