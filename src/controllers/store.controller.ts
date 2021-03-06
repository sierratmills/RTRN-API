import { get, param, requestBody, post, writeResultToResponse, put, HttpErrors } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { Store } from "../models/store";
import { StoreRepository } from "../repositories/store.repository";
import { verify } from "jsonwebtoken";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class StoreController {

  constructor(
    @repository(StoreRepository.name) private storeRepo: StoreRepository) { }

  @get("/stores")
  async getAllStores(
    @param.query.string("storename") storename: string
  ): Promise<Array<Store>> {
    return await this.storeRepo.find();
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
    storeToStore.userid = store.userid;
    return await this.storeRepo.create(storeToStore);

  }

  @get("/favoritestores")
  async getFavoriteStores(
    @param.query.string("jwt") jwt: string
  ): Promise<Store[]> {
    var payload;
    try {
      payload = verify(jwt, "shh") as any;

    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid token");
    }
    let foundStores = await this.storeRepo.find({
      where: {
        and: [
          { userid: payload.user.id }
        ],
      },
    }) as Store[];
    return foundStores;
  }

  @put('/addfavorite')
  async addFavoriteStore(@requestBody() store: Store, @param.query.string("jwt") jwt: string) {
    var payload;
    try {
      payload = verify(jwt, "shh") as any;

    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid token");
    }

    let foundstore = await this.storeRepo.findOne({
      where: {
        and: [
         { storename: store.storename,
           lat: store.lat,
            long: store.long},
        ],
      },
    }) as Store;
    foundstore.userid = payload.user.id;
    this.storeRepo.save(foundstore);
  }

}
