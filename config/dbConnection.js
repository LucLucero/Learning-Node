function dbConnection() {
    var mysql = require('mysql');
    
    //create connection utiliza os parametros em json (chave, valor)
     return mysql.createConnection({
    
        host : 'localhost', //endereço do servidor neste caso o localhost
        user : 'root',
        password : '3922766',
        database : 'portal_noticias'
    
    });
}

module.exports = dbConnection;