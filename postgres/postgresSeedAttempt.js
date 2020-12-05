// const fs = require('fs');
// const path = require('path');
// const { Pool, Client } = require('pg');
// const copyFrom = require('pg-copy-streams').from;
// const config = require('./config.json');

// let productFile = path.join(__dirname, '../productData.csv');
// let productTable = ''
// let reviewFile = path.join(__dirname, '../reviewData.csv');
// let reviewTable = ''

// const host = config.host;
// const user = config.user;
// const db = config.db;
// const port = config.port;
// const port = config.port;
// const conString = `postgres://${user}@${host}:${port}/${db}`;

// const client = new Client({
//   connectionString: conString,
// });
// client.connect();

// let productStream = client.query(copyFrom(`COPY ${productTable} FROM CSV HEADER STDIN`));
// let productFileStream = fs.createReadStream(productFile);

// let reviewStream = client.query(copyFrom(`COPY ${reviewTable} FROM CSV HEADER STDIN`));
// let reviewFileStream = fs.createReadStream(reviewFile);

// NOTE: THIS METHOD WAS UNSUCCESSSFUL, DID NOT FINISH.