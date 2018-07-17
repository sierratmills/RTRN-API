import { Store } from "../models/store";
import { StoreRepository } from "../repositories/store.repository";
export declare class StoreController {
    private userRepo;
    storeRepo: any;
    constructor(userRepo: StoreRepository);
    getAllStores(storename: string): Promise<Array<Store>>;
    getSpecificStore(storeId: string): any;
    createStore(store: Store): Promise<Store>;
}
