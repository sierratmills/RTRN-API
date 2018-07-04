import { Entity } from "@loopback/repository";
import { User } from "./user";
export declare class Item extends Entity {
    itemname: string;
    itemtype: string;
    price: string;
    URL: string;
    storeId: number;
    image: string;
    carts: User;
    listId: number;
    ordersId: number;
}
