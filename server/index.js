require('newrelic');
const express = require('express');
const server = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const router = require('./router.js');
const port = 3000;
const path = require('path');

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));
server.use(cors());
server.use('/api', router);

server.use(express.static(path.join(__dirname, '../client/dist')));

server.listen(port, () => {
  console.log('connected to server and listening on port 3000');
});

