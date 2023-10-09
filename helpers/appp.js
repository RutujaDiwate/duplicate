var con = require('./connection');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine",'ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname+'/data.ejs');
});

app.post('/',function(req,res){
    var name = req.body.username;
    var email = req.body.email;

    con.connect(function(error){
        if(error) console.log(error);

        var sql = "INSERT INTO data(username,email) VALUES('"+name+"','"+email+"')";
        con.query(sql,function(error,result){
            if(error) console.log(error);
            res.redirect('/data');
            res.send('Employee registered successfully!');
        })
    })
});

app.get('/data',function(req, res){
    con.connect(function(error){
        if(error) console.log(error);

        var sql = "SELECT * FROM data";

        con.query(sql,function(error,result){
            if(error) console.log(error);
            res.render(__dirname+'/data',{data:result});
        });

    });
});

app.get('/delete-data',function(req, res){
    con.connect(function(error){
        if(error) console.log(error);

        var sql = "delete from data where username=? ";
        var username = req.query.username;

        con.query(sql,[username],function(error,result){
            if(error) console.log(error);
            res.redirect('/data');
            res.render(__dirname+'/data',{data:result});
        });

    });
})

app.listen(3000);