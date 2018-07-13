import { ItemRepository } from "../repositories/item.repository";
import { Item } from "../models/Item";
export declare class OrderController {
    private itemRepo;
    constructor(itemRepo: ItemRepository);
    verifyToken(jwt: string): any;
    getAllItems(itemname: string): Promise<Array<Item>>;
    getSpecificItem(itemId: string): any;
    createItem(item: Item): Promise<Item>;
}
