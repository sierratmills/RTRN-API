import { property, Entity, model } from "@loopback/repository";

@model({
  name: "location"
})

export class location extends Entity {
  @property({
    type: "number",
    id: true,
    autoincrement: true,
  })
  idlocation: number;

  @property({
    type: "string",
  })
  street: string;

  @property({
    type: "string",
  })
  city: string;

  @property({
    type: "string",
  })
  lat: string;

  @property({
    type: "string",
  })
  long: string;

  @property({
    type: "number",
  })
  storeid: number;

}
