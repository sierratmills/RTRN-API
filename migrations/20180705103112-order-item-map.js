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
      type: 'itemid',
      foreignKey: {
        name: 'item_order_fk',
        table: 'item',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'iditem'
      }
    },
    orderid: {
      type: 'int',
      foreignKey: {
        name: 'order_item_fk',
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
  db.dropTable('order_item_map');
  db.removeForeignKey('order_item_map', 'item_order_fk',
    {
      dropIndex: true,
    }, () => {
      db.removeForeignKey('order_item_map', 'item_order_fk',
        {
          dropIndex: true,
        }, callback);
    });

};

exports._meta = {
  "version": 1
};

