import { model, property, Entity } from "@loopback/repository";
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
    type: "Store"
  })
  store: Store;

  @property({
    type: "string"
  })
  image: string;

  @property({
    type: "Array<User>"
  })
  carts: Array<User>;

  @property({
    type: "Array<List>"
  })
  lists: Array<List>;

  @property({
    type: "Array<Order>"
  })
  orders: string;
}
