module.exports = app => {
  app.get('/noticias', (req, res) => {
      app.app.controller.noticias.form_adicionar.form(app, req, res);
  });
}
