import { model, property, Entity, Order } from "@loopback/repository";

@model({
  name: "item"
})

export class Item extends Entity {

  @property({
    type: "number",
    id: true,
    autoincrement: true,
  })
  iditem: number;

  @property({
    type: "string"
  })
  itemname: string;

  @property({
    type: "string"
  })
  storename: string;

  @property({
    type: "number"
  })
  orderid: number;

}
