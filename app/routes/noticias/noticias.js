module.exports = app => {
  app.get('/noticia', (req, res) => {
    app.app.controller.noticias.noticias.noticia(app, req, res);
  });
}
