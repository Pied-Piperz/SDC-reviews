require('newrelic');
const express = require('express');
const server = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const router = require('./router.js');
const port = 3000;
const Product = require('../database/index.js').Product;
const Reviews = require('../database/index.js').Reviews;
const path = require('path');

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));
server.use(cors());
// server.use(morgan('dev'));
server.use('/api', router);

// server.get('/api/products/:id', (req, res) => {
//   Product.find({'_id': req.params.id}).populate({path: 'reviews', model: 'Reviews'})
//   .then((product) => {
//     res.status(200).json(product);
//   })
//   .catch((err) => {
//     res.status(400).send(err);
//   });
// });

// server.put('/api/products/:id/review', (req, res) => {
//   Product.update({"reviews._id": req.params.id}, {"$set": {
//     'reviews.$.helpfulCount': req.body.helpfulCount
//   }})
//   .then((result) => {
//     res.status(200).json(result);
//   })
//   .catch((err) => {
//     res.status(400).send(err);
//   });
// })

// server.delete('/api/products/delete', (req, res) => {
//   Product.deleteMany({})
//     .then(() => {
//       res.status(200).send('Deleted All');
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// server.post('/api/products/post', (req, res) => {
//   Product.create(req.body)
//     .then(() => {
//       res.status(200).send('Successfully posted!');
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });


server.use(express.static(path.join(__dirname, '../client/dist')));

server.listen(port, () => {
  console.log('connected to server and listening on port 3000');
});

