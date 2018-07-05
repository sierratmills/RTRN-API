import { property, Entity, model } from "@loopback/repository";

@model({
    name: "order"
})

export class Order extends Entity {
    @property({
        type: "number",
        id: true
    })
    idorder: number;

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

    @property({
        type: "number"
    })
    userid: number;


}
