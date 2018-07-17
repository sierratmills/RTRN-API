import { Entity } from "@loopback/repository";
export declare class Store extends Entity {
    idstore: number;
    storename: string;
    storetype: string;
    url: string;
    returnurl: string;
    address: string;
    lat: string;
    long: string;
    googleid: number;
}
