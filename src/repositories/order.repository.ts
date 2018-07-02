import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Order } from '../models/order';

export class OrderRepository extends DefaultCrudRepository <
    Order,
    typeof Order.prototype.id
>

{
    constructor(@inject('datasources.db') protected datasource: DataSource) {
        super(Order, datasource);
    }
}