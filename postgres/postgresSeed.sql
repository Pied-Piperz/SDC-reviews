\c sdc

COPY products (id, product)
  FROM '/Users/jonathanlim/Documents/JS/SDC/Reviews/productData.csv'
  DELIMITER ',' CSV HEADER;

COPY reviews (username, text, dateCreated, stars, summary, helpfulCount, gameplay, sound, graphic, lastingQuality, recommended, product_id)
  FROM '/Users/jonathanlim/Documents/JS/SDC/Reviews/reviewData.csv'
  DELIMITER ',' CSV HEADER;