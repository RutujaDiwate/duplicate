const{createPool}= require('mysql')

const pool= createPool({
    host:'localhost',
    database:'employee_database',
    user:'root',
    password:'Mysql_1590357',
    connectionlimit:10
})

pool.query('SELECT * FROM employee_info',(err,res)=>{
    return console.log(res)
})

