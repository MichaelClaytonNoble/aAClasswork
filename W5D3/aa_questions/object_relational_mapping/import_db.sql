PRAGMA foreign_keys = ON;

DROP TABLE if exists question_follows;
DROP TABLE if exists question_likes;
DROP TABLE if exists questions;
DROP TABLE if exists replies;
DROP TABLE if exists users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id)
);

--this table supports the many-to-many relationship between questions and users
--(a user can have many questions she is following, and a question can have 
--many follows)

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE replies (

  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  reply_id INTEGER, 
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,

FOREIGN KEY (question_id) REFERENCES questions(id),
FOREIGN KEY (reply_id) REFERENCES replies(id),
FOREIGN KEY (user_id) REFERENCES users(id)  
);

CREATE TABLE question_likes (

  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO
  users (fname, lname)
VALUES
  ('Arthur', 'Miller'),
  ('Eugene', 'O''Neill');

INSERT INTO
  questions (title, body, user_id)
VALUES
  ('All My Sons', 'Body like Beyonce?', (SELECT id FROM users WHERE fname = 'Arthur' AND lname = 'Miller')),
  ('Long Day''s Journey Into Night', 'Kind of what?', (SELECT id FROM users WHERE fname = 'Eugene' AND lname = 'O''Neill'));

INSERT INTO
  question_follows (question_id, user_id)
VALUES
  ((SELECT id FROM questions WHERE title = 'All My Sons'), (SELECT id FROM users WHERE fname = 'Arthur' AND lname = 'Miller'));

 

  -- ('All My Sons', 1947, (SELECT id FROM playwrights WHERE name = 'Arthur Miller')),
