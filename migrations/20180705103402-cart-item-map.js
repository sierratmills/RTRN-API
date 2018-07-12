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
      primaryKey: true,
      autoIncrement: true
    },
    itemid: {
      type: 'int',
      foreignKey: {
        name: 'item_user_fk',
        table: 'item',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'iditem'
      }
    },
    cartid: {
      type: 'int',
      foreignKey: {
        name: 'user_item_fk',
        table: 'user',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    }
  }, callback);




};

exports.down = function (db, callback) {
  db.dropTable('cart_item_map');
  db.removeForeignKey('cart_item_map', 'item_user_fk',
    {
      dropIndex: true,
    }, () => {
      db.removeForeignKey('cart_item_map', 'user_item_fk',
        {
          dropIndex: true,
        }, callback);
    });

};

exports._meta = {
  "version": 1
};

