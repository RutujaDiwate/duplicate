 const mysql = require("mysql");
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use("",express.static(""));

var connection = mysql.createConnection({ 
    host: "localhost",
    user: "root",
    password: "Mysql_1590357",
    database: "employee"
});

// connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database successfully!")
});


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index(1).html");
})

app.post("/", function(req,res){
    var username = req.body.username;
    var email = req.body.email;
    // var password = req.body.password;


    connection.query("select * from data where username = ? and email = ? ",[username,email],function(error,results,fields){
        if(error) throw error;

        var sql = "INSERT INTO data(username,email,password) VALUES('"+username+"','"+email+"',)";
        connection.query(sql,function(error,result){
            if(error) throw error;
            res.send('Employee registered successfully!');
        })
    })
});

// when login is success
app.get("/index(1)",function(req,res){
    res.sendFile(__dirname + "/index(1).html")
})

// set app port 
app.listen(2500);
