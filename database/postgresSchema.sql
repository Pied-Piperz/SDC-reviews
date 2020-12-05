DROP DATABASE IF EXISTS SDC;
CREATE DATABASE SDC;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id INT,
  product VARCHAR(40)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL,
  username VARCHAR(20),
  text varchar(255),
  dateCreated DATE,
  stars INT,
  summary VARCHAR(255),
  helpfulCount INT,
  gameplay INT,
  sound INT,
  graphic INT,
  lastingQuality INT,
  recommended BOOLEAN,
  product_id INT
);

CREATE SEQUENCE reviews_sequence
START 1
INCREMENT 1;