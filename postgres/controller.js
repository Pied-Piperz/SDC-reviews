const model = require('./model.js');

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
        res.status(200).send(results.rows[0]);
      }
    })
  }
}

module.exports = controllers;