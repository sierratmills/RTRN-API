import { model, property, Entity, Order } from "@loopback/repository";
import { Store } from "./store";
import { User } from "./user";
import { List } from "./list";

@model({
  name: "item"
})

export class Item extends Entity {

  @property({
    type: "string",
    id: true
  })
  itemname: string;

  @property({
    type: "string",
  })
  itemtype: string;

  @property({
    type: "string"
  })
  price: string;

  @property({
    type: "string"
  })
  URL: string;

  @property({
    type: "number"
  })
  storeId: number;

  @property({
    type: "string"
  })
  image: string;

  @property({
    type: "User"
  })
  carts: User;

  @property({
    type: "number"
  })
  listId: number;

  @property({
    type: "number"
  })
  ordersId: number;
}
