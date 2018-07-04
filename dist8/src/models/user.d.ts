import { Entity } from "@loopback/repository";
export declare class User extends Entity {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    payment: string;
    password: string;
    orderhistoryId: number;
    cartId: number;
}
