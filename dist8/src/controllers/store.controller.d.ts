import { Store } from "../models/store";
import { StoreRepository } from "../repositories/store.repository";
export declare class StoreController {
    private storeRepo;
    constructor(storeRepo: StoreRepository);
    getAllStores(storename: string): Promise<Array<Store>>;
    getSpecificStore(storeId: string): any;
    createStore(store: Store): Promise<Store>;
}
