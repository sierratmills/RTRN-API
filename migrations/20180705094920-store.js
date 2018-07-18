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
  db.createTable('store', {
    idstore: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    storename: {
      type: 'string',
      length: 45
    },
    storetype: {
      type: 'string',
      length: 45
    },
    lat: {
      type: 'string',
      length: 45
    },
    long: {
      type: 'string',
      length: 45
    },
    url: {
      type: 'string',
      length: 45
    },
    address: {
      type: 'string',
      length: 45
    },
    returnurl: {
      type: 'string',
      length: 500
    }, 
    userid: {
      type: 'int',
      length: 100
    },
    googleid: {
      type: 'string',
      length: 100
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('store');
};

exports._meta = {
  "version": 1
};
