import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Store } from '../models/store';
export declare class StoreRepository extends DefaultCrudRepository<Store, typeof Store.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
