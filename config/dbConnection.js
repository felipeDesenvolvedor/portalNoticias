var conMysql = () => {
    var mysql = require('mysql');

    var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'portal_noticias'
    });

    return connection;
}


module.exports = () => conMysql;
