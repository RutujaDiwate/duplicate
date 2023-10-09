var express = require ("express");
var app = express();
var connection = require('./database');

app.get('/', function(req, res){
res.send("Hey there!");
});

app.listen(3000,function(){
    console.log('App listening on port 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Connected to DB!');
    })
});