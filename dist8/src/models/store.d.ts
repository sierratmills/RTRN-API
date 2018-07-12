import { Entity } from "@loopback/repository";
export declare class Store extends Entity {
    idstore: number;
    storename: string;
    storetype: string;
    url: string;
}
