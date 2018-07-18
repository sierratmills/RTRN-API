import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Item } from '../models/item';
export declare class ItemRepository extends DefaultCrudRepository<Item, typeof Item.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
