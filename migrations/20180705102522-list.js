'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('list', { 
    idlist: {         
      type: 'int',         
      primaryKey: true       
    },       
    userId: {         
      type: 'int'      
    },       
    name: {         
      type: 'string',         
      length: 45       
    },     
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('list');
};

exports._meta = {
  "version": 1
};
