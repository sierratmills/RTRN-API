import { Entity } from "@loopback/repository";
import { Item } from "./item";
export declare class Store extends Entity {
    id: number;
    storeName: string;
    storeType: string;
    address: string;
    storeUrl: string;
    lat: string;
    long: string;
    products: Item;
}
