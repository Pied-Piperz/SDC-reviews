DROP DATABASE IF EXISTS SDC;
CREATE DATABASE SDC;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id INT,
  product VARCHAR(255)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
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

DROP SEQUENCE IF EXISTS reviews_sequence;

CREATE SEQUENCE reviews_sequence
START 1
INCREMENT 1;