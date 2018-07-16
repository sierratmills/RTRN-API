import { Entity } from "@loopback/repository";
export declare class Item extends Entity {
    iditem: number;
    itemname: string;
    storename: string;
    orderid: number;
}
