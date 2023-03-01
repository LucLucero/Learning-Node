var app = require('./config/server');
// //var homeRota = require('./app/routes/home')(app);
// var noticiasRota = require('./app/routes/noticias')(app);
// var formRota = require('./app/routes/formulario_inclusao_noticia')(app);
app.listen(3000, function(){
    console.log("Server ON"); 
});