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
      type: 'itemid'
    },
    orderid: {
      type: 'int'
    }
  }, () => {
    db.addForeignKey('order_item_map', 'item', 'item_order_fk',
      {
        'itemid': 'iditem'
      },
      {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      }, () => {
        db.addForeignKey('order_item_map', 'order', 'order_item_fk',
          {
            'orderid': 'idorder'
          },
          {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          }, callback);
      });
  });

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

