import { get, param, requestBody, post, writeResultToResponse } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { Store } from "../models/store";
import { StoreRepository } from "../repositories/store.repository";
<<<<<<< HEAD

=======
>>>>>>> 37745c33d7c05a2dc33ce4b584e7ad294e46b460


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class StoreController {

  constructor(
    @repository(StoreRepository.name) private userRepo: StoreRepository) { }

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

}
