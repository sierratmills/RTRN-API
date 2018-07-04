import { property, Entity, model } from "@loopback/repository";
import { User } from "./user";
import { Item } from "./item";

@model({
    name: "order"
})

export class Order extends Entity {
    @property({
        type: "number",
        id: true
    })
    userId: number;

    @property({
        type: "number",
    })
    itemId: number;

    @property({
        type: "string",
    })
    orderNumber: string;

    @property({
        type: "string",
    })
    address: string;

    @property({
        type: "string",
    })
    payment: string;

    @property({
        type: "string",
    })
    receipt: string;


}
