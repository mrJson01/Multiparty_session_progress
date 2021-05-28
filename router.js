const express = require('express');
const controller1 = require('./controllers/controller1');
const mysqlModule = require('./controllers/mysql.js');
const { checkSchema , validationResult} = require('express-validator');
const Router = express.Router();


Router.get('/',controller1.login);
Router.post('/',checkSchema({
    email:{
        
        isEmail:true,
        custom:
        {
            options: async ( value )=>{
                let checks = await mysqlModule.checkEmail(value);
                return checks;
            }
        }
    
    },
    password:{
        
        custom:{
            options: async (value, {req})=>{
                return await mysqlModule.checkPassword(value,req.body['email']);
            }
        }
    }
    
}),(req,res)=>{
    const errors = validationResult(req);
    
    console.log(errors.array());
});

module.exports = Router;