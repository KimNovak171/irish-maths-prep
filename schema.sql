CREATE TABLE IF NOT EXISTS leads (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 email TEXT NOT NULL UNIQUE,
 session_id TEXT,
 source TEXT,
 focus_json TEXT,
 consent INTEGER NOT NULL DEFAULT 0,
 price_intent INTEGER NOT NULL DEFAULT 0,
 created_at TEXT NOT NULL,
 updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS events (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 session_id TEXT NOT NULL,
 event_name TEXT NOT NULL,
 page TEXT,
 properties_json TEXT,
 created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_events_name ON events(event_name);
CREATE INDEX IF NOT EXISTS idx_events_session ON events(session_id);
