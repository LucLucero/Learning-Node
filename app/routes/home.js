function homeToRender(app) {
    app.get('/', function (req,res) {
        
        res.render('home/index');
    
    });
}

module.exports = homeToRender;