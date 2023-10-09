const db =require ("../../index")
const bcrypt = require('bcrypt');

const displayCustomer = async(req, res, next)=>{
    try{
        var db = req.con;
        let result = await db.query("select * from data", function(error, rows){
            if(error){
                res.send({
                    message:"error occurred"
                })
            }
            else{
                res.send({
                    status:1,
                    message:"successfully got list of customers",
                    data:rows
                })
            }

        })
        
    }   
    
    catch(error){
        res.send({
            message:"An error occured"
        })
    }

}
    const customer= async (req, res, next)=>{
        console.log("create customer")
        try{
            var db = req.con;
            var id = Math.floor(Math.random()*9000000)+10000000;
            var value = req.body.password;
            const salt = await bcrypt.genSalt(20);
            value = await bcrypt.hash(value,salt)

            var data = {
                username:req.body.username,
                email:req.body.email,
                password:value
            }
            let result = await db.query("Insert into customer set ?",[username],function(err, rows){

                if (err){

                }
            }
        
    )}

    return res.status();

        )};
