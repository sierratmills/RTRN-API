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
  db.createTable('cart_item_map', {
    idcart_item_map: {
      type: 'int',
      primaryKey: true
    },
    cartid: {
      type: 'int'
    },
    itemid: {
      type: 'int'
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('cart_item_map');
};

exports._meta = {
  "version": 1
};

