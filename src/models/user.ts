import { property, Entity, model } from "@loopback/repository";

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
    imageUrl: string;


}