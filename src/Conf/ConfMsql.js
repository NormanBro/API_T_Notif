const mysql= require('mysql2');

const pool=mysql.createPool({
    host:"",
    user:"",
    database:"",
    password:"",
    ssl:{
        rejectUnauthorized:true
    }
})

module.exports=pool