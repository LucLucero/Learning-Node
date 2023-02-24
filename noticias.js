var http = require('http');

var server = http.createServer(function(req,res) {

    var endpoint = req.url;
    if (endpoint == "/moda") {

        res.end("<html><body>Portal de Moda</body></html>");
    } else if (endpoint == "/beleza") {
        
        res.end("<html><body>Portal de Beleza</body></html>");
        
    } else if (endpoint == "/futebol") {
        
        res.end("<html><body>Portal de Futebol</body></html>");
    } else {
        
        res.end("<html><body>Portal de Noticias</body></html>");
    }

    
});
//<html><body>Portal de Noticias</body></html>
server.listen(3000);