import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Order } from '../models/order';
export declare class OrderRepository extends DefaultCrudRepository<Order, typeof Order.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
