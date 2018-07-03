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
    type: "User"
  })
  users: User;

  @property({
    type: "Item"
  })
  items: Item;
}
