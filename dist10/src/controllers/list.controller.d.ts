import { ListRepository } from "../repositories/list.repository";
import { List } from "../models/List";
export declare class OrderController {
    private listRepo;
    constructor(listRepo: ListRepository);
    getAllOrders(listname: string): Promise<Array<List>>;
    getSpecificList(listname: string): any;
    createList(list: List): Promise<List>;
}
