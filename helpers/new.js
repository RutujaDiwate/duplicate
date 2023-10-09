var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    database:'employee_database',
    user:'root',
    password:'Mysql_1590357' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;

