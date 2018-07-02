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
    type: "Array<item>"
  })
  users: Array<User>;

  @property({
    type: "Array<Item>"
  })
  items: Array<Item>;
}
