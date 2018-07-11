import { OrderRepository } from "../repositories/Order.repository";
import { Order } from "../models/Order";
export declare class OrderController {
    private orderRepo;
    constructor(orderRepo: OrderRepository);
    verifyToken(jwt: string): any;
    getAllOrders(ordername: string): Promise<Array<Order>>;
    getSpecificOrder(orderId: string): any;
    createOrder(order: Order): Promise<Order>;
}
