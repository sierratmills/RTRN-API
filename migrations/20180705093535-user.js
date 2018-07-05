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
  db.createTable('user', {
    id: {
      type: 'int',
      primaryKey: true
    },
    username: {
      type: 'string',
      length: 45
    },
    password: {
      type: 'string',
      length: 45
    },
    firstname: {
      type: 'string',
      length: 45
    },
    lastname: {
      type: 'string',
      length: 45
    },
    email: {
      type: 'string',
      length: 45
    },
    image: {
      type: 'string',
      length: 45
    },
    payment: {
      type: 'string',
      length: 45
    }
  }, callback);
  db.addForeignKey('item', 'store', 'item_store_fk',
    {
      'storeid': 'idstore'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('user');
};

exports._meta = {
  "version": 1
};
