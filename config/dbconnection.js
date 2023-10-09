const{ DB_HOST,DB_USERNAME, DB_PASSWORD, DB_NAME}= process.env;
// const db = mysql.createConnection({ host: DB_HOST , user : DB_USERNAME, password : <PASSWORD>, database : DB
// _NAME});

var mysql= require('mysql2');
var conn =mysql.createConnection({
    host:DB_HOST,
    user:DB_USERNAME,
    password:DB_PASSWORD,
    database:DB_NAME
});

conn.connect(function(err){
    if (err) console.log(error);
    console.log(DB_NAME+"Connected to the MySQL server.");
})