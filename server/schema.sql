CREATE DATABASE schedule;

USE schedule;

CREATE TABLE tasks (
  id INTEGER(3) AUTO_INCREMENT,
  decription VARCHAR(500),
  name VARCHAR(25),
  email VARCHAR(25),
  PRIMARY KEY (ID)
  
);

-- CREATE TABLE users (
--   id INTEGER(3) AUTO_INCREMENT,
--   username VARCHAR(25) NOT NULL,
--   PRIMARY KEY (ID)
-- );