var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var userModel = require('../modules/user');
const bcrypt = require('bcrypt')

router.post("/signup",function(req, res, next){

    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var confirmpassword = req.body.confirmpassword;

    if (password !==confirmpassword){
        res.json({
            message:"Password not match",
        });
    }else{

        bcrypt.hash(password, 10, function(err, hash){
         //store hash in your password DB.
         if(err){
            return res.json({
                message:"something wrong, try later",
                error:err
            });
         }else{

            console.log(hash);
            var userDetails= new userModel({
                _id:mysql.Types.ObjectId(),
                username:username,
                email:email,
                password:hash
            });
        
            userDetails.save()
            .then(doc=>{
                res.status(201).json({
                    message:"User Registered Sucessfully",
                    result:doc
                });   
            })
            .catch(err=>{
                res.json(err);
            });
        }

    });

    }
        
    });

module.exports=router;