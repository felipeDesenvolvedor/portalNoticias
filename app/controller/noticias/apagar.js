module.exports.apagar = (app, req, res) => {

  const conection = app.config.dbConnection();
  const noticiasDAO = new app.app.models.noticiasDAO;

  let url = require('url');
  const valores = url.parse(req.url, true).query;

  noticiasDAO.apagar(valores.id_noticia, conection, (erro) => {
    if (erro) {
      return;
    }

    res.send('Registro apagado !!!');
  });
}
