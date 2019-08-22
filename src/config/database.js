const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exec1'
});

connection.connect(function (err) {
    if (err)
        console.log('CONEXÃO - ERRO!')
    else
        console.log('CONEXÃO - OK!')
});

module.exports = connection;