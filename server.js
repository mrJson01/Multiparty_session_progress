const app = require('./app');

const server = app.listen(8080,()=>{
    console.log('Server is working');
});