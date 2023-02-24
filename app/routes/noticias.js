function newsToRender(app) {
    app.get('/noticias', function (req,res) {
        
        res.render('noticias/noticias');
    
    });
}

module.exports = newsToRender;