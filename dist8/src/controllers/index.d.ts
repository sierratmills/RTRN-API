export * from './ping.controller';
export * from './user.controller';
import { ItemRepository } from "../repositories/Item.repository";
import { Item } from "../models/Item";
export declare class ItemController {
    private itemRepo;
    constructor(itemRepo: ItemRepository);
    getAllItems(ordername: string): Promise<Array<Item>>;
    getSpecificItem(itemname: string): any;
    createItem(item: Item): Promise<Item>;
}
