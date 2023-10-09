require("dotenv").config();

const express = require('express');
const cors = require('cors');
require('./config/dbconnection');
const app = express();

app.use(cors());

// error handling
app.use((err, req, res, next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server error";
    res.status(err.statusCode).json({
        message:err.message,
    });
});

app.listen(1633,()=>console.log('server is running on port 1633'));
