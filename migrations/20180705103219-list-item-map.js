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
    listname: {
      type: 'string',
      length: 45
    },
    listid: {
      type: 'int'
    }
  }, () => {
    db.addForeignKey('list_item_map', 'list', 'list_item_fk',
      {
        'listid': 'idlist'
      },
      {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      }, () => {
        db.addForeignKey('list_item_map', 'item', 'item_list_fk',
          {
            'itemid': 'iditem'
          },
          {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          }, callback);
      });
  });

};

exports.down = function (db, callback) {
  db.dropTable('list_item_map');
  db.removeForeignKey('list_item_map', 'item_list_fk',
    {
      dropIndex: true,
    }, () => {
      db.removeForeignKey('list_item_map', 'item_list_fk',
        {
          dropIndex: true,
        }, callback);
    });
};

exports._meta = {
  "version": 1
};
