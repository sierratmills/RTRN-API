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

  @get("/verifyOrder")
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
    return orderArr;
  }

  @get("/orderhistory")
  async getOrderHistory(
    @param.path.string("userId") userId: string
  ): Promise<Order> {
    let foundOrder = await this.orderRepo.findOne({
      where: {
        and: [
          { userid: userId }
        ],
      },
    }) as Order;
    return foundOrder;
  }

  @post("/createorder")
  async createOrder(
    @requestBody() order: Order
  ): Promise<Order> {
    var orderToStore = new Order();
    orderToStore.id = order.id;
    orderToStore.store = order.store;
    orderToStore.date = order.date;
    return await this.orderRepo.create(orderToStore);
  }
}
