import { Store } from "../models/store";
import { StoreRepository } from "../repositories/store.repository";
export declare class StoreController {
    private storeRepo;
    constructor(storeRepo: StoreRepository);
    getAllStores(storename: string): Promise<Array<Store>>;
    getSpecificStore(storeId: string): any;
    createStore(store: Store): Promise<Store>;
<<<<<<< HEAD
    getFavoriteStores(userId: number): Promise<Store[]>;
=======
    getFavoriteStores(jwt: string): Promise<Store[]>;
>>>>>>> 3a9c3de2c23eb5adf7348d2dba888a031bbaf8be
    addFavoriteStore(store: Store, jwt: string): Promise<void>;
}
