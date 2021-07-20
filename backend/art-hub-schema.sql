CREATE TABLE users (
  id                    SERIAL PRIMARY KEY,
  username              TEXT NOT NULL UNIQUE,
  email                 TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  password              TEXT NOT NULL,
  first_name            TEXT NOT NULL,
  last_name             TEXT NOT NULL,
  profile_img_url       TEXT,
  banner_img_url        TEXT,
  instagram_url         TEXT,
  facebook_url          TEXT,
  twitter_url           TEXT,
  is_admin              BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE photoUpload (
  id                    SERIAL PRIMARY KEY,
  user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  post_img_url          TEXT,
  type                  TEXT
);

CREATE TABLE photoPost (
  id                    SERIAL PRIMARY KEY,
  user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  img_id                INTEGER NOT NULL REFERENCES photoUpload(id) ON DELETE CASCADE,
  post_title            TEXT NOT NULL,
  post_description      TEXT,
  type                  TEXT,
  photo_created_at      TIMESTAMP DEFAULT NOW()
);


CREATE TABLE photoComments (
  id                    SERIAL PRIMARY KEY,
  user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  post_id               INTEGER NOT NULL REFERENCES photoPost(id) ON DELETE CASCADE,
  comment_description   TEXT,
  comment_created_at    TIMESTAMP DEFAULT NOW()
);

CREATE TABLE forumUpload (
  id                    SERIAL PRIMARY KEY,
  user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  forum_img_url         TEXT,
  type                  TEXT
);

CREATE TABLE forumPost (
  id                    SERIAL PRIMARY KEY,
  user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  img_id                INTEGER NOT NULL REFERENCES forumUpload(id) ON DELETE CASCADE,
  forum_title           TEXT NOT NULL,
  forum_description     TEXT,
  type                  TEXT,
  forum_created_at      TIMESTAMP DEFAULT NOW()
);

CREATE TABLE forumComments (
  id                    SERIAL PRIMARY KEY,
  user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  forum_id              INTEGER NOT NULL REFERENCES forumPost(id) ON DELETE CASCADE,
  comment_description   TEXT,
  comment_created_at    TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tags (
  id                    SERIAL PRIMARY KEY,
  tag_name              TEXT,
  post_id               INTEGER NOT NULL REFERENCES photoPost(id) ON DELETE CASCADE,
  img_id                INTEGER NOT NULL REFERENCES photoUpload(id) ON DELETE CASCADE,
  forum_id              INTEGER NOT NULL REFERENCES forumPost(id) ON DELETE CASCADE
);