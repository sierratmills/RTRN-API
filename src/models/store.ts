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

    @property({
        type: "string",
    })
    returnurl: string;

    @property({
        type: "string",
    })
    address: string;

    @property({
        type: "string",
    })
    lat: string;

    @property({
        type: "string",
    })
    long: string;

    @property({
        type: "string",
    })
    googleid: string;

    @property({
        type: "number",
    })
    userid: number;

}
