import { Entity } from "@loopback/repository";
export declare class Order extends Entity {
    idorder: number;
    store: string;
    date: string;
    userid: number;
}
