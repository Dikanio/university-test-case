require('dotenv/config');

const mysql = {
  user:  process.env.DB_USER, // your database username
  password:  process.env.DB_PASSWORD, // your database password
  server:  process.env.DB_HOST, // database host
  database:  process.env.DB_NAME, // your database name,
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    enableArithAbort:  true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port:  Number(process.env.DB_PORT), // default MySQL port
}

module.exports = mysql;
