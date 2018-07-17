import { get, param, requestBody, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { ListRepository } from "../repositories/list.repository";
import { Class, Repository, RepositoryMixin, juggler } from '@loopback/repository';
import { List } from "../models/List";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class OrderController {

  constructor(
    @repository(ListRepository.name) private listRepo: ListRepository
  ) { }

  @get("/list")
  async getAllOrders(
    @param.query.string("listname") listname: string
  ): Promise<Array<List>> {
    return await this.listRepo.find();
  }

  @get("/list/listname")
  getSpecificList(
    @param.path.string("listname") listname: string
  ): any {

    return "Not found";

  }

  @post("/createlist")
  async createList(
    @requestBody() list: List
  ): Promise<List> {
    let createdList = await this.listRepo.create(list);
    return createdList;
  }
}
