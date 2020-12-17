const model = require('./model.js');
const redis = require('redis');
const redisClient = redis.createClient(6379);

const controllers = {
  getRange: (req, res) => {
    model.getRange(req.params.start, req.params.end, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results.rows);
      }
    })
  },
  getOne: (req, res) => {
    model.getOne(req.params.id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        redisClient.setex(req.params.id, 3600, JSON.stringify(results.rows[0]));
        res.status(200).send(results.rows[0]);
      }
    })
  }
}

module.exports = controllers;