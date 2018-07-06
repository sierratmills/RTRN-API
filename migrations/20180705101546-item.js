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

<<<<<<< HEAD
exports.up = function(db, callback) {
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
    storeid: {         
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
  }, callback);
=======
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


>>>>>>> 7893d7c97e5dffd20ca54606c6d182e9aec0f2ab
};

exports.down = function(db, callback) {
  db.dropTable('list');
};

exports._meta = {
  "version": 1
};
