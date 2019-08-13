module.exports = app => {
  app.post('/noticias', (req, res) => {
    app.app.controller.noticias.adicionar.adicionar(app, req, res);
  });
}
