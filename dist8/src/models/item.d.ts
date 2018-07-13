import { Entity } from "@loopback/repository";
export declare class Item extends Entity {
    iditem: number;
    itemname: string;
    price: string;
    storeid: number;
}
