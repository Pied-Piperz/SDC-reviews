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

// To verify for loader.io testing:
server.get('/loaderio-2d07c630a474e5a0d5dcd06f0c873887', (req, res) => { res.status(200).send('loaderio-2d07c630a474e5a0d5dcd06f0c873887'); });

server.use(express.static(path.join(__dirname, '../client/dist')));

server.listen(port, () => {
  console.log('connected to server and listening on port 3000');
});

