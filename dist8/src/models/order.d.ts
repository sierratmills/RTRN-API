import { Entity } from "@loopback/repository";
export declare class Order extends Entity {
    idorder: number;
    address: string;
    payment: string;
    receipt: string;
    userid: number;
}
