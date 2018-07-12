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
  url: string;

  @property({
    type: "number"
  })
  storeid: number;

  @property({
    type: "string"
  })
  image: string;

  @property({
    type: "string"
  })
  size: string;
}
