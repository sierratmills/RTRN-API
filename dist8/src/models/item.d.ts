import { Entity, Order } from "@loopback/repository";
import { Store } from "./store";
import { User } from "./user";
import { List } from "./list";
export declare class Item extends Entity {
    itemname: string;
    itemtype: string;
    price: string;
    URL: string;
    store: Store;
    image: string;
    carts: User;
    lists: List;
    orders: Order;
}
