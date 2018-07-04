import { Entity } from "@loopback/repository";
import { Order } from "./order";
import { Item } from "./item";
export declare class User extends Entity {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    payment: string;
    password: string;
    orderhistory: Order;
    cart: Item;
}
