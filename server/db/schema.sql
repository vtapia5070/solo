CREATE DATABASE schedule;

USE schedule;

CREATE TABLE tasks (
  id INTEGER(3) AUTO_INCREMENT,
  time VARCHAR(25),
  name VARCHAR(25),
  email VARCHAR(25),
  description VARCHAR(500),
  PRIMARY KEY (ID)
);
 