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
    })
    userName: string;

    @property({
        type: "string",
    })
    firstName: string;

    @property({
        type: "string",
    })
    lastName: string;

    @property({
        type: "string",
    })
    email: string;

    @property({
        type: "string",
    })
    imageUrl: string;

    @property({
        type: "string",
    })
    payment: string;

    @property({
        type: "string",
    })
    password: string;

    @property({
        type: "number",
    })
    orderhistoryId: number;

    @property({
        type: "number",
    })
    cartId: number;


}
