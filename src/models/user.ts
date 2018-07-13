import { property, Entity, model } from "@loopback/repository";

@model({
    name: "user"
})

export class User extends Entity {
    @property({
        type: "number",
        id: true,
        autoincrement: true,
    })
    id: number;

    @property({
        type: "string",
    })
    username: string;

    @property({
        type: "string",
    })
    firstname: string;

    @property({
        type: "string",
    })
    lastname: string;

    @property({
        type: "string",
    })
    email: string;

    @property({
        type: "string",
    })
    image: string;

    @property({
        type: "string",
    })
    payment: string;

    @property({
        type: "string",
    })
    password: string;


}
