import { property, Entity, model } from "@loopback/repository";
import { Order } from "./order";
import { Item } from "./item";

@model({
    name: "user"
})

export class User extends Entity {
    @property({
        type: "number",
        id: true
    })
    id: number;

    @property({
        type: "string",
        id: true
    })
    userName: string;

    @property({
        type: "string",
        id: true
    })
    firstName: string;

    @property({
        type: "string",
        id: true
    })
    lastName: string;

    @property({
        type: "string",
        id: true
    })
    email: string;

    @property({
        type: "string",
        id: true
    })
    imageUrl: string;

    @property({
        type: "string",
        id: true
    })
    payment: string;

    @property({
        type: "string",
        id: true
    })
    password: string;
    
    @property({
        type: "array<order>",
        id: true
    })
    orderhistory: Array<Order>;

    @property({
        type: "array<item>",
    })
    cart: Array<Item>;


}