import { get, param, requestBody, post, writeResultToResponse } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { Store } from "../models/store";
import { StoreRepository } from "../repositories/store.repository";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class StoreController {
  storeRepo: any;

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

  @post("/createstore")
  async createStore(
    @requestBody() store: Store
  ): Promise<Store> {
    var storeToStore = new Store();
    storeToStore.storename = store.storename;
    storeToStore.storetype = store.storetype;
    storeToStore.url = store.url;
    storeToStore.returnurl = store.returnurl;
    storeToStore.address = store.address;
    storeToStore.lat = store.lat;
    storeToStore.long = store.long;
    storeToStore.googleid = store.googleid;
    return await this.storeRepo.createStore(storeToStore);

  }

}
