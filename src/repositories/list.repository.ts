import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { List } from '../models/list';


export class ListRepository extends DefaultCrudRepository<
  List,
  typeof List.prototype.id
  >

{
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(List, datasource);
  }
}
