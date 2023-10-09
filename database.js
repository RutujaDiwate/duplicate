const {
    createPool
}= require ('mysql');

const pool = createPool({
    host: 'localhost',
    user:'root',
    password : 'mysql_1590357',
    database :'employee',
    connectionLimit:10

})

pool.query("select * from data where username = ?", (err, result, fields)=>{
    if(err){
        return console.log(err);
        }
        return console.log(result);
})