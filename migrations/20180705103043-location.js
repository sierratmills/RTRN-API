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
  db.createTable('location', {
    idlocation: {
      type: 'int',
      primaryKey: true
    },
    street: {
      type: 'string',
      length: 45
    },
    city: {
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
    }
  }, callback);
  db.addForeignKey('loccation', 'store', 'location_store_fk',
    {
      'storeid': 'idstore'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('location');
  db.removeForeignKey('location', 'location_store_fk',
    {
      dropIndex: true,
    }, callback);
};

exports._meta = {
  "version": 1
};
