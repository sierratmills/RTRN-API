import { Entity } from "@loopback/repository";
export declare class Order extends Entity {
    idorder: number;
    store: string;
    price: string;
    date: string;
    userid: number;
}
