import { property, Entity, model } from "@loopback/repository";

@model({
    name: "order"
})

export class Order extends Entity {
    @property({
        type: "number",
        id: true,
        autoincrement: true,
    })
    idorder: number;

    @property({
        type: "string",
    })
    store: string;

    @property({
        type: "string",
    })
    date: string;

    @property({
        type: "number"
    })
    userid: number;


}
