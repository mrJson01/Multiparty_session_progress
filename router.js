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
    
}),(req,res,next)=>{
    const errors = validationResult(req);
    
    if(errors.isEmpty()){
        
            req.session.regenerate((err)=>{
            //console.log(err);
                
            req.session.email = req.body.email;
            
            req.session.save((error)=>{
                
                 next();
            })
        });
        
    }
    
    
    
},controller1.POSTlogin);

Router.get('/logout',controller1.logout);

module.exports = Router;