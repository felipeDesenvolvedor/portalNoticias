module.exports.adicionar = (app, req, res) => {
  let campos = req.body;

  console.log(campos);

  req.assert('titulo', 'O titulo é obrigatório').notEmpty();
  req.assert('autor', 'O autor é obrigatório').notEmpty();
  req.assert('resumo', 'O resumo deve conter entre 10 e 100 caracteres !!!').len(10, 100);
  req.assert('data_noticia', 'Data Obrigatoria').notEmpty().isISO8601({format:'YYYY-MM-DD'});
  req.assert('noticia', 'A noticia é obrigatória').notEmpty();

  let erros = req.validationErrors();

  if(erros) {
    res.render("../views/noticias/form_adicionar.ejs", {camposComErro : erros, campos : campos});
    return;
  }

  // conexao
  const connection  = app.config.dbConnection();
  const noticiasDAO = new app.app.models.noticiasDAO;

  noticiasDAO.adicionar(campos ,connection, (erro, resultado, fields) => {
    if(erro) {
      return;
    }

    res.redirect('/');
  });
}
