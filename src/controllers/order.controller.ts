import { get, param, requestBody, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { OrderRepository } from "../repositories/Order.repository";
import { Order } from "../models/Order";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class OrderController {

  constructor(
    @repository(OrderRepository.name) private orderRepo: OrderRepository
  ) { }

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
