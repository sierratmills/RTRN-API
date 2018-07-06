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
    id: {
      type: 'int',
      primaryKey: true
    },
    itemname: {
      type: 'string',
      length: 45
    },
    itemtype: {
      type: 'string',
      length: 45
    },
    price: {
      type: 'string',
      length: 45
    },
    url: {
      type: 'string',
      length: 45
    },
    image: {
      type: 'string',
      length: 45
    },
    size: {
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
    }
  }, callback);


};

exports.down = function (db, callback) {
  db.dropTable('item');
  db.removeForeignKey('item', 'item_store_fk',
    {
      dropIndex: true,
    }, callback);
};

exports._meta = {
  "version": 1
};
