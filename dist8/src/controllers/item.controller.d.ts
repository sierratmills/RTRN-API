import { ItemRepository } from "../repositories/item.repository";
import { Item } from "../models/item";
export declare class OrderController {
    private itemRepo;
    constructor(itemRepo: ItemRepository);
    verifyToken(jwt: string): any;
    getAllItems(itemname: string): Promise<Array<Item>>;
    getSpecificItem(orderId: number): Promise<Item[]>;
    createItem(item: Item): Promise<Item>;
}
