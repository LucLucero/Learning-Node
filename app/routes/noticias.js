function newsToRender(app) {

    app.get('/noticias', function (req,res) {
        var mysql = require('mysql');

        //create connection utiliza os parametros em json (chave, valor)
        var connection = mysql.createConnection({

            host : 'localhost', //endereço do servidor neste caso o localhost
            user : 'root',
            password : '3922766',
            database : 'portal_noticias'

        });

        //query espera dois parametros: QUERY SQL , func callback
        //a func callback tbm demanda dois paramentros, o primeiro é o error e o segundo o resultado a ser tratado.
        connection.query('select * from noticias', function(error,result){
            res.send(result);    
                       
        });
            //res.render('noticias/noticias');
    
    });
}


module.exports = newsToRender;