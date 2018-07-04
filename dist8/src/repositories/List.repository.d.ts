import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { List } from '../models/list';
export declare class ListRepository extends DefaultCrudRepository<List, typeof List.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
