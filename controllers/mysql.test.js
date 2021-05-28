const mysql = require('./mysql');

test('Test searching for a email in database',()=>{
    return expect(mysql.checkEmail('piotr-rekos@wp.pl')).resolves.toBeTruthy();
});


test('Test checking password',()=>{
    return expect(mysql.checkPassword('json','piotr-rekos@wp.pl')).resolves.toBeTruthy();
});
