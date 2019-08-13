module.exports = app => {
  app.get('/', (req, res) => {
    app.app.controller.home.index(app, req, res);
  });
};
