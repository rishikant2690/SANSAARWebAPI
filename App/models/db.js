const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createPool({
  connectionLimit : dbConfig.connectionLimit,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});


connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


// // open the MySQL connection
connection.getConnection(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;