import { Entity } from "@loopback/repository";
export declare class Item extends Entity {
    iditem: number;
    itemname: string;
    itemtype: string;
    price: string;
    url: string;
    storeid: number;
    image: string;
    size: string;
}
