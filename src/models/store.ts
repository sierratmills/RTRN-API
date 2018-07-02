import { property, Entity, model } from "@loopback/repository";
import { Item } from "./item";

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
    })
    storeName: string;

    @property({
        type: "string",
    })
    storeType: string;

    @property({
        type: "string",
    })
    address: string;

    @property({
        type: "string",
    })
    storeUrl: string;

    @property({
        type: "string",
    })
    lat: string;

    @property({
        type: "string",
    })
    long: string;

    @property({
        type: "item",
    })
    products: Item;


}
