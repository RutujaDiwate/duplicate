var mysql = require("mysql");

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Mysql_1590357',
    database:'employee'
    
});

module.exports = con;