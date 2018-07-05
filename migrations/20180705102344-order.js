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
      primaryKey: true
    },
    address: {
      type: 'string',
      length: 45
    },
    payment: {
      type: 'string',
      length: 45
    },
    receipt: {
      type: 'string',
      length: 45
    },
    userid: {
      type: 'int'
    }
  }, () => {
    db.addForeignKey('order', 'user', 'order_user_fk',
      {
        'userid': 'id'
      },
      {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      }, callback);
  });



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
