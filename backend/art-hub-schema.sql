CREATE TABLE users (
  id                    SERIAL PRIMARY KEY,
  password              TEXT NOT NULL,
  email                 TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin              BOOLEAN NOT NULL DEFAULT FALSE,
  created_at            TIMESTAMP NOT NULL DEFAULT NOW()
);