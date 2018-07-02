import { model, property, Entity } from "@loopback/repository";

@model({
  name: "item"
})

export class Item extends Entity {

  @property({
    type: "itemname",
    id: true
  })
  itemname: String;

  @property({
    type: "itemtype",
  })
  itemtype: String;

  @property({
    type: "price"
  })
  price: String;

  @property({
    type: "URL"
  })
  URL: String;

  @property({
    type: "store"
  })
  store: String;

  @property({
    type: "image"
  })
  image: String;

  @property({
    type: "carts"
  })
  carts: String;

  @property({
    type: "lists"
  })
  lists: String;

  @property({
    type: "orders"
  })
  orders: String;
}
