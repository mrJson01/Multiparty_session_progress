const express = require('express');
const bodyP = require('body-parser');
const cookieP = require('cookie-parser');
const path = require('path');
const router = require('./router.js');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(express.static('public'));
app.use(bodyP.urlencoded({extended:true}));
app.use(bodyP.json());
app.use(cookieP());

app.use('/',router);

module.exports = app;
