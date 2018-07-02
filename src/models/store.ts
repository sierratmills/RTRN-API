import { property, Entity, model } from "@loopback/repository";

@model({
    name: "store"
})

export class Store extends Entity {
    @property({
        type: "number",
        id: true
    })
    id: number;

    @property({
        type: "string",
        id: true
    })
    storeName: string;

    @property({
        type: "string",
        id: true
    })
    storeType: string;

    @property({
        type: "string",
        id: true
    })
    address: string;

    @property({
        type: "string",
        id: true
    })
    storeUrl: string;

    @property({
        type: "string",
        id: true
    })
    lat: string;

    @property({
        type: "string",
        id: true
    })
    long: string;

    @property({
        type: "string",
        id: true
    })
    products: Array<string>;


}