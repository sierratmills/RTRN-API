import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Item } from '../models/item';


export class ItemRepository extends DefaultCrudRepository<
  Item,
  typeof Item.prototype.id
  >

{
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Item, datasource);
  }
}
