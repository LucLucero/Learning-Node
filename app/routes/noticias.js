var dbConnection = require("../../config/dbConnection");

function newsToRender(app) {

    var connection = dbConnection();

    app.get('/noticias', function (req,res) {       
        //query espera dois parametros: QUERY SQL , func callback
        //a func callback tbm demanda dois paramentros, o primeiro é o error e o segundo o resultado a ser tratado.
        connection.query('select * from noticias', function(error,result){
            res.render('noticias/noticias', {noticias: result}); 
            console.log(result);            
                       
        });
            
    
    });
}
module.exports = newsToRender;