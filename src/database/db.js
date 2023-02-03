const Database = require("better-sqlite3");
require("dotenv").config();

const db = new Database(process.env.DB_FILE);
// console.log(db);

module.exports = { db };
