const mysql= require('mysql2');

const pool=mysql.createPool({
    host:"aws.connect.psdb.cloud",
    user:"02hjhs1r251yqirp2rp8",
    database:"bd_admnotif",
    password:"pscale_pw_hISKvkENt9nQMyxwA5qyUm0rDwQrM0hFfgY7cNeiN2Y",
    ssl:{
        rejectUnauthorized:true
    }
})

module.exports=pool