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

exports.up = function(db) {
  db.createTable('item', { 
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
    },          
  }, done);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
