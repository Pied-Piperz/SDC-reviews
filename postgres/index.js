const Pool = require('pg').Pool;
const config = require('./config.json');

const pool = new Pool({
  "host": config.host,
  "user": config.user,
  "password": config.password,
  "database": config.database,
  "port": config.port
});

pool.connect()
  .then(() => {
    console.log('Connected to Postgres!');
  })

module.exports = pool;