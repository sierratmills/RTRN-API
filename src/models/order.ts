import { property, Entity, model } from "@loopback/repository";
import { User } from "./user";

@model({
    name: "order"
})

export class Order extends Entity {

    @property({
        type: "user",
        id: true
    })
    user: User;

    @property({
        type: "string"
    })
    items: Array<string>;

    @property({
        type: "string"
    })
    orderNumber: string;

    @property({
        type: "string"
    })
    address: string;   
    
    @property({
        type: "string"
    })
    payment: string;

    @property({
        type: "string"
    })
    receipt: string;

}