const Pool = require('ps').Pool;
const config = require('./config.json');

const pool = new Pool({
  "host": config.host,
  "user": config.user,
  "db": config.db,
  "port": config.port
});

module.exports = pool;