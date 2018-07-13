import { Store } from "../models/store";
import { StoreRepository } from "../repositories/store.repository";
import { Http } from '@angular/http';
export declare class StoreController {
    private userRepo;
    private http;
    constructor(userRepo: StoreRepository, http: Http);
    getAllStores(storename: string): Promise<Array<Store>>;
    getSpecificStore(storeId: string): any;
    createStore(store: Store): Promise<Store>;
}
