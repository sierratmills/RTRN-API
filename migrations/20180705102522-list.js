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
  db.createTable('list', {
    idlist: {
      type: 'int',
      primaryKey: true
    },
    name: {
      type: 'string',
      length: 45
    },
    userid: {
      type: 'int'
    }
  }, () => {
    db.addForeignKey('list', 'user', 'list_user_fk',
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
  db.dropTable('list');
  db.removeForeignKey('list', 'list_user_fk',
    {
      dropIndex: true,
    }, callback);
};

exports._meta = {
  "version": 1
};
