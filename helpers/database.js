// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host:'localhost',
//     database:'employee_database',
//     user:'root',
//     password:'Mysql_1590357'
// });

// module.exports = connection;
const { ConnectionError } = require('mysql');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    database:'employee_database',
    user:'root',
    password:'Mysql_1590357' 
}); 
connection.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = connection;