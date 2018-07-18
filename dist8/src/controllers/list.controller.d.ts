<<<<<<< HEAD
import { ListRepository } from "../repositories/List.repository";
import { List } from "../models/List";
=======
import { ListRepository } from "../repositories/list.repository";
import { List } from "../models/list";
>>>>>>> b2e60bfaaf3f90b668bcbb2f22ecd25e907cf94b
export declare class OrderController {
    private listRepo;
    constructor(listRepo: ListRepository);
    getAllOrders(listname: string): Promise<Array<List>>;
    getSpecificList(listname: string): any;
    createList(list: List): Promise<List>;
}
