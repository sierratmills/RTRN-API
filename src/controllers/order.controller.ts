import { get, param, requestBody, post, HttpErrors } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { OrderRepository } from "../repositories/Order.repository";
import { Order } from "../models/Order";
import { verify } from "jsonwebtoken";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class OrderController {

  constructor(
    @repository(OrderRepository.name) private orderRepo: OrderRepository
  ) { }

  @get("/verify")
  verifyToken(@param.query.string("jwt") jwt: string) {

    try {
        let payload = verify(jwt, "shh") as any;
        return payload.user.orderid;
    } catch (err) {
        throw new HttpErrors.Unauthorized("Invalid token");
    }

    // The user is authenticated and we can process...
  }

  @get("/orders")
  async getAllOrders(
    @param.query.string("orderId") ordername: string
  ): Promise<Array<Order>> {
    return await this.orderRepo.find();
  }

  @get("/order/orderid")
  getSpecificOrder(
    @param.path.string("orderId") orderId: string
  ): any {
    let orderArr = this.getAllOrders;
    return "Not found";

  }

  @post("/orders")
  async createOrder(
    @requestBody() order: Order
  ): Promise<Order> {
    let createdOrder = await this.orderRepo.create(order);
    return createdOrder;
  }
}
