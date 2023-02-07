PRAGMA foreign_keys = ON;
-- pragma foreign_keys = on enforces foreign keys. This is usually necessary because by default, SQLite does not enforce foreign keys.

BEGIN;

CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
cohort TEXT,
username TEXT UNIQUE,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);; 

COMMIT;