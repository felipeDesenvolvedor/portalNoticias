module.exports = app => {
    app.get('/tecnologia', (req,res) => {
        res.render("../views/secao/tecnologia.ejs");
    });
}
