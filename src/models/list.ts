import { model, property, Entity } from "@loopback/repository";

@model({
  name: "list"
})

export class List extends Entity {

  @property({
    type: "number",
    id: true
  })
  idlist: number;

  @property({
    type: "number"
  })
  userId: number;

  @property({
    type: "string",
  })
  name: string;
}
