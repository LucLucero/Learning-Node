function formToRender(app) {
    app.get('/formulario_inclusao_noticia', function (req,res) {
        
        res.render('admin/form_add_noticia');
    
    });
}

module.exports = formToRender;