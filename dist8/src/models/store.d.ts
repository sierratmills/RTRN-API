import { Entity } from "@loopback/repository";
export declare class Store extends Entity {
    id: number;
    storeName: string;
    storeType: string;
    address: string;
    storeUrl: string;
    lat: string;
    long: string;
    productId: number;
}
