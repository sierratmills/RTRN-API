import { ItemRepository } from "../repositories/item.repository";
<<<<<<< HEAD
import { Item } from "../models/Item";
=======
import { Item } from "../models/item";
>>>>>>> b2e60bfaaf3f90b668bcbb2f22ecd25e907cf94b
export declare class OrderController {
    private itemRepo;
    constructor(itemRepo: ItemRepository);
    verifyToken(jwt: string): any;
    getAllItems(itemname: string): Promise<Array<Item>>;
    getSpecificItem(orderId: number): Promise<Item[]>;
    createItem(item: Item): Promise<Item>;
}
