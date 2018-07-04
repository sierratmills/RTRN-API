import { model, property, Entity } from "@loopback/repository";
import { User } from "./user";
import { Item } from "./item";

@model({
  name: "list"
})

export class List extends Entity {

  @property({
    type: "string",
    id: true
  })
  listname: string;

  @property({
    type: "number"
  })
  userId: number;

  @property({
    type: "number"
  })
  itemId: number;
}
