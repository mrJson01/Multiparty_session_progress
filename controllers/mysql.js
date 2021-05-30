require('dotenv').config({path:'\.env'});

const mysql = require('mysql');

var Pool = mysql.createPool({
    host:process.env.MYSQL_DB_HOST,
    user:process.env.MYSQL_DB_NAME,
    password:process.env.MYSQL_DB_PASSWORD,
    database:process.env.MYSQL_DB_DBNAME
});

var checkEmail = (email) =>{

    return new Promise((resolve,reject)=>{
        
        Pool.getConnection((err,connection)=>{
           
            if(!err){
                
                connection.query(`SELECT id FROM admins WHERE email="${email}"`,(error,result,field)=>{
                    
                    if(error) reject(error);
                    else {
                        
                        if(Object.keys(result).length!==0) resolve(true);
                        else reject('Not such email found in database');
                        
                    }
                    
                    connection.release();
                });
            }
            
        });
        
    });
};

var checkPassword = (password, email) =>{

    return new Promise((resolve,reject)=>{
        
        Pool.getConnection((err,connection)=>{
            
            connection.query(`SELECT password FROM admins WHERE email="${email}"`,(error,result,field)=>{
             
                if(error)reject('Error ocursed during process');
                else{
                    
                    let long = Object.keys(result).length;
                    
                    if(!long) reject(' ');
                    else{
                        let pass_from_database = Object.values(result[0]);
                        
                        if(password===pass_from_database[0])resolve(true);
                        else reject("Wrong Password");
                    }
                }
                
                connection.release();
                
            });
        });
        
    });
};

exports.checkEmail = checkEmail;
exports.checkPassword = checkPassword;

