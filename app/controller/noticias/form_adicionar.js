module.exports.form = (app, req, res) => {
  res.render("../views/noticias/form_adicionar.ejs", {camposComErro : null, campos : ''});
}
