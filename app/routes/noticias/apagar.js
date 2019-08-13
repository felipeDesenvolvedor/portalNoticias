module.exports = app => {
  app.delete('/noticia', (req, res) => {
    app.app.controller.noticias.apagar.apagar(app, req, res);
  });
};
