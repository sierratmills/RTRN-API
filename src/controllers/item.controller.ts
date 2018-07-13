import { get, param, requestBody, post, HttpErrors } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { ItemRepository } from "../repositories/item.repository";
import { Item } from "../models/Item";
import { verify } from "jsonwebtoken";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class OrderController {

  constructor(
    @repository(ItemRepository.name) private itemRepo: ItemRepository
  ) { }

  @get("/verifyOrder")
  verifyToken(@param.query.string("jwt") jwt: string) {

    try {
      let payload = verify(jwt, "shh") as any;
      return payload.userid;
    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid token");
    }

    // The user is authenticated and we can process...
  }

  @get("/items")
  async getAllItems(
    @param.query.string("itemId") itemname: string
  ): Promise<Array<Item>> {
    return await this.itemRepo.find();
  }

  @get("/item/itemid")
  getSpecificItem(
    @param.path.string("itemId") itemId: string
  ): any {
    let itemArr = this.getAllItems;
    return itemArr;
  }

  @post("/createitem")
  async createItem(
    @requestBody() item: Item
  ): Promise<Item> {
    var itemToStore = new Item();
    itemToStore.iditem = item.iditem;
    itemToStore.itemname = item.itemname;
    itemToStore.storeid = item.storeid;
    itemToStore.orderid = item.orderid;
    return await this.itemRepo.create(itemToStore);
  }
}
