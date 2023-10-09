var con = require('./helpers/connection');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');//geting data using 
app.use(bodyParser.json());// url encode using use method/ convert json
app.use(bodyParser.urlencoded({extended:true}));// encode

app.get('/',function(req, res){
    res.sendFile(__dirname+'/Regis.html');
});

app.post('/',function(req,res){
    console.log(req.body); //we want do show data on terminal
    var name = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    con.connect(function(error){
        if(error) console.log(error);
    
    
        var sql = "INSERT INTO data(username,email, password) VALUES('"+name+"','"+email+"')";
        con.query(sql,function(error,result){
            if(error) console.log(error);
            // res.redirect('/Regis');
            res.send('Employee registered successfully!'+result);
        });
    });

});

app.listen(3009);

