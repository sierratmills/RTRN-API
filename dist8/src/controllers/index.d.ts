export * from './ping.controller';
export * from './user.controller';
<<<<<<< HEAD
import { ItemRepository } from "../repositories/Item.repository";
import { Item } from "../models/Item";
=======
import { ItemRepository } from "../repositories/item.repository";
import { Item } from "../models/item";
>>>>>>> b2e60bfaaf3f90b668bcbb2f22ecd25e907cf94b
export declare class ItemController {
    private itemRepo;
    constructor(itemRepo: ItemRepository);
    getAllItems(ordername: string): Promise<Array<Item>>;
    getSpecificItem(itemname: string): any;
    createItem(item: Item): Promise<Item>;
}
