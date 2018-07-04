import { Entity } from "@loopback/repository";
export declare class Order extends Entity {
    userId: number;
    itemId: number;
    orderNumber: string;
    address: string;
    payment: string;
    receipt: string;
}
