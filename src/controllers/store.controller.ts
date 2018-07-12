import { get, param, requestBody, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { Store } from "../models/store";
import { StoreRepository } from "../repositories/store.repository";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class StoreController {

  constructor(
    @repository(StoreRepository.name) private userRepo: StoreRepository
  ) { }

  @get("/stores")
  async getAllStores(
    @param.query.string("storename") storename: string
  ): Promise<Array<Store>> {
    return await this.userRepo.find();
  }

  @get("/store/storeid")
  getSpecificStore(
    @param.path.string("storeId") storeId: string
  ): any {

    return "Not found";

  }

  @post("/stores")
  async createStore(
    @requestBody() store: Store
  ): Promise<Store> {
    let createdStore = await this.userRepo.create(store);
    return createdStore;
  }

  @post("/findStores")
  async findStores(
    @requestBody() category: String, zipcode: String){
      //search uses google maps api
      //create stores in database for results if they dont already exist
    }
}
