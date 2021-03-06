export * from './ping.controller';
export * from './user.controller';
import { ItemRepository } from "../repositories/item.repository";
import { Item } from "../models/item";
export declare class ItemController {
    private itemRepo;
    constructor(itemRepo: ItemRepository);
    getAllItems(ordername: string): Promise<Array<Item>>;
    getSpecificItem(itemname: string): any;
    createItem(item: Item): Promise<Item>;
}
