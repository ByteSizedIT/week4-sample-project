const Database = require("better-sqlite3");
require("dotenv").config();

const db = new Database(process.env.DB_FILE);
// console.log(db);

const { readFileSync } = require("node:fs");
const { join } = require("node:path");

const schemaPath = join("src", "database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

module.exports = { db };
