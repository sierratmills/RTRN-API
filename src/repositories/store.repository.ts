import {DefaultCrudRepository} from '@loopback/repository';
import {inject} from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Store } from '../models/store';

export class StoreRepository extends DefaultCrudRepository <
    Store,
    typeof Store.prototype.id
>

{
    constructor(@inject('datasources.db') protected datasource: DataSource) {
        super(Store, datasource);
    }
}