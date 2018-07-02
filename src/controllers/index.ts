export * from './ping.controller';
export * from './user.controller';
import { get, param, requestBody, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { ItemRepository } from "../repositories/Item.repository";
import { Class, Repository, RepositoryMixin, juggler } from '@loopback/repository';
import { Item } from "../models/Item";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class ItemController {

  constructor(
    @repository(ItemRepository.name) private itemRepo: ItemRepository
  ) { }

  @get("/items")
  async getAllItems(
    @param.query.string("itemId") ordername: string
  ): Promise<Array<Item>> {
    return await this.itemRepo.find();
  }

  @get("/item/itemname")
  getSpecificItem(
    @param.path.string("itemname") itemname: string
  ): any {

    return "Not found";

  }

  @post("/item")
  async createItem(
    @requestBody() item: Item
  ): Promise<Item> {
    let createdItem = await this.itemRepo.create(item);
    return createdItem;
  }
}
