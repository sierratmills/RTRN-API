import { Entity } from "@loopback/repository";
import { User } from "./user";
import { Item } from "./item";
export declare class List extends Entity {
    listname: string;
    users: User;
    items: Item;
}
