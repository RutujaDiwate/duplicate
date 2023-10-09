var con = require('./connection');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/Regis.html');
});

app.post('/',function(req,res){
    var name = req.body.username;
    var email = req.body.email;

    con.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO data(username,email) VALUES('"+name+"','"+email+"')";
        con.query(sql,function(error,result){
            if(error) throw error;
            res.send('Employee registered successfully!');
        })
    })
});

app.listen(2500);