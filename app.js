require('dotenv').config({path:'.env'});

const express = require('express');
const bodyP = require('body-parser');
const cookieP = require('cookie-parser');
const path = require('path');
const router = require('./router.js');

//         SESSION !!!!!!!!!!!

const session = require('express-session');
const MongoStore = require('connect-mongo');
const uuid = require('uuid');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(express.static('public'));
app.use(bodyP.urlencoded({extended:true}));
app.use(bodyP.json());
app.use(cookieP());

app.use(session({
    secret:'secret',
    resave:false,
    httpOnly:true,
    maxAge:1000*60*5,
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_DB,
        collectionName:'session',
        strigify:false
    }),
    genid:function(req){
        return  uuid.v4();
    },
    saveUninitialized:false
}));

app.use('/',router);


module.exports = app;
