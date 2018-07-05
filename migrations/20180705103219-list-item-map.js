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
  db.createTable('list_item_map', {
    idlist_item_map: {
      type: 'int',
      primaryKey: true
    },
    listid: {
      type: 'int'
    },
    itemid: {
      type: 'itemid'
    },
    listname: {
      type: 'string',
      length: 45
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('list_item_map');
};

exports._meta = {
  "version": 1
};
