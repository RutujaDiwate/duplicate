
import express from "express";
import mysql from "mysql";
const app = express();

const port = 3009;

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Mysql_1590357',
  database:'employee'
});

connection.connect((err)=>{
  if(err) throw err;
  console.log('Connected to the database');
});

app.get('',(req,res)=>{
  const password = req.body.password;
  const encryptedPassword =  bcrypt.hash(password,saltRounds);
  var users = {
    "email": req.body.email,
    "password":encryptedPassword
  }
  connection.query('INSERT INTO data SET ?',users, function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    } else {
        if(results.length>0){
          const comparision = bcrypt.compare(password, results[0].password)
          if(comparision){
              res.send({
                "code":200,
                "success":"login sucessfull"
              })
          }
          else{
            res.send({
                "code":204,
                "success":"Email and password does not match"
            })
          }
        }else{
          res.send({
            "code":200,
            "success":"user registered sucessfully"
              });
        }
      }
  });
});

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
})