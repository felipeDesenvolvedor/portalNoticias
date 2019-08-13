module.exports.index = (app, req, res) => {

  const connection = app.config.dbConnection();
  const noticias = new app.app.models.noticiasDAO;

  noticias.get5UltimasNoticias(connection, (erro, resultado) => {
    res.render("../views/home/index.ejs", {noticias : resultado});
  });
}
