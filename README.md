### Examples

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