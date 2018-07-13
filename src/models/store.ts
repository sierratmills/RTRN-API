import { property, Entity, model } from "@loopback/repository";

@model({
    name: "store"
})

export class Store extends Entity {
    @property({
        type: "number",
        id: true,
        autoincrement: true,
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

    @property({
        type: "string",
    })
    returnurl: string;

}
