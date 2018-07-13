'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('item', {
    iditem: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    itemname: {
      type: 'string',
      length: 45
    },
    storeid: {
      type: 'int',
      foreignKey: {
        name: 'item_store_fk',
        table: 'store',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'idstore'
      }
    },
    orderid: {
      type: 'int',
      foreignKey: {
        name: 'item_order_fk',
        table: 'order',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'idorder'
      }
    }
  }, callback);


};

exports.down = function (db, callback) {
  db.dropTable('list');
};

exports._meta = {
  "version": 1
};
