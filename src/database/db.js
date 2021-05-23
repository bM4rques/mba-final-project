const Database = require('sqlite-async');

function execute(db) {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    password TEXT,
    email TEXT,
    isAdmin TEXT,
    isActivated TEXT
    );
  `);
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute);
