var app = require('./config/server');
var homeRota = require('./app/routes/home');
homeRota(app);

var noticiasRota = require('./app/routes/noticias');
noticiasRota(app);

var formRota = require('./app/routes/formulario_inclusao_noticia');
formRota(app);


app.listen(3000, function(){

    console.log("Server ON");
    

});