module.exports.noticia = (app, req, res) => {
    let id = req.query.id_noticia;

    if (!id) {
      res.render('../views/noticias/noticia.ejs', {noticia:''});

      return;
    }

    const connection  = app.config.dbConnection();
    const noticiasDAO = new app.app.models.noticiasDAO;

    noticiasDAO.getNoticia(connection, id)
    .then(resultado => res.render('../views/noticias/noticia.ejs',
      {
        noticia:resultado
      }
    )).catch(erro => console.log(erro))

    /*noticiasDAO.getNoticia(connection, (erro, resultado) => {
        res.render('../views/noticias/noticia.ejs', {noticia:resultado});
    }, id*/
  }
