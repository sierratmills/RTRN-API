import { property, Entity, model } from "@loopback/repository";

@model({
    name: "store"
})

export class Store extends Entity {
    @property({
        type: "number",
        id: true
    })
    idstore: number;

    @property({
        type: "string",
    })
    storename: string;

    @property({
        type: "string",
    })
    storetype: string;

    @property({
        type: "string",
    })
    url: string;

}
