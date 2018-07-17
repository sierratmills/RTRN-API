import { OrderRepository } from "../repositories/Order.repository";
import { Order } from "../models/order";
export declare class OrderController {
    private orderRepo;
    constructor(orderRepo: OrderRepository);
    verifyToken(jwt: string): any;
    getAllOrders(ordername: string): Promise<Array<Order>>;
    getSpecificOrder(orderId: string): any;
    getOrderHistory(userId: number): Promise<Order[]>;
    createOrder(order: Order): Promise<Order>;
}
