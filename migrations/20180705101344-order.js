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
  db.createTable('order', {
    idorder: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    store: {
      type: 'string',
      length: 45
    },
    date: {
      type: 'string',
      length: 45
    },
    price: {
      type: 'int',
      length: 45
    },
    userid: {
      type: 'int',
      foreignKey: {
        name: 'order_user_fk',
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
  db.dropTable('order');
  db.removeForeignKey('order', 'order_user_fk',
    {
      dropIndex: true,
    }, callback);
};

exports._meta = {
  "version": 1
};
