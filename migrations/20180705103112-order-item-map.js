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
  db.createTable('order_item_map', {
    idorder_item_map: {
      type: 'int',
      primaryKey: true
    },
    itemid: {
      type: 'int'
    },
    orderid: {
      type: 'int'
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('order_item_map');
};

exports._meta = {
  "version": 1
};

