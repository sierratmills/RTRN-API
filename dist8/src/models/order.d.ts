import { Entity } from "@loopback/repository";
import { User } from "./user";
import { Item } from "./item";
export declare class Order extends Entity {
    user: User;
    items: Item;
    orderNumber: string;
    address: string;
    payment: string;
    receipt: string;
}
