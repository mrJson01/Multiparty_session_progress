### Examples

**MySQL**
```javascript

var Pool = mysql.createPool({
    host:"localhost",
    user:'root',
    password:'',
    database:'test'
});

Pool.getConnection((error,connection)=>{

    connection.query('...',(error,result,field)=>{
    
    
        connection.release();
    });
    
});

var Connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'test'
});

Connection.connect();

Connection.query('...',(error,result,field)=>{
    
});

Connection.end();

```

**express-validator**

```javascript

const {checkSchema} = require('express-validator');

Router.post('/login',checkSchema({
    
    email:{
    isEmail:true,
    //For custom validator
    custom:{
        options:(value,{req,location,path})=>{
            return 'if error than its message become validation message(withMessage)';
        }
    },
    id:{
        isInt:true,
        optional:{options:{nullable:true}}
    }
}
}));

```

**express-session**

```javascript

const session = require('express-session');
const express = require('express');
const uuid = require('uuid');

const app = express();

app.use(session({
    //OPTIONS
    
    secret:'string',
    expires:new Date('2021-12-12'),//Date when the session data expires
    maxAge:1000*60 ,//Now()+maxAge = expires , maxAge in miliseconds
    store: MemoryStore , //store where the data of session is stored
    cookie:{
        //OPTIONS FOR SESSIONID COOKIE
        secure:true, //CLIENT WILL NOT SEND BACK COOKIES IF NOT HTTPS
        httpOnly:true, //ACCESS TO COOKIES CLIENT-SIDE
        maxAge:1000 , //MAXAGE OF COOKIE
        path:'/', //SPECIFIES PATH SET-COOKIE
        sameSite:'strict', //strict,lax,null . IT DECIDES WHETER YES OR NO ATTACH COOKIES TO THE REQUESTS
    },
    genid:function(req){
        return uuid.v4();
        //req IF YOU WANT SOME DATA ATTACHED TO REQ WHEN GENERATING ID
    },
    name:'towa', // NAME OF A SESSION ID SET IN THE RESPONSE ,DEFAULT IS 'connect.sid'
    resave:true, // SAVE EVEN WHEN NO CHANGES MADE
    saveUninitialised:false //SAVE THE SESSION WHEN SOMETHING ON A SESSION IS SAVED
    
}));

req.session.regenerate(callback);
req.session.save(callback);
req.session.reload(callback);
req.session.destroy(callback);
req.session.touch();

req.session.cookie ;//TO ALTER A SESSION COOKIE PER VISITOR

req.sessionID; //SESSIONID BUT READ-ONLY

```


