const pool = require('./index.js');

const model = {
  getRange: (start, end, callback) => {
    return pool.query(`SELECT * FROM products, reviews WHERE products.id = reviews.product_id AND products.id > ${start} AND products.id < ${end};`, (err, results) => {
      if (err) {
        callback(err);
      }
      callback(null, results);
    })
  },
  getOne: (id, callback) => {
    return pool.query(`SELECT * FROM products JOIN reviews USING(product_id) WHERE product_id = ${id}`, (err, results) => {
      if (err) {
        callback(err);
      }
      callback(null, results);
    })
  }
}


module.exports = model;