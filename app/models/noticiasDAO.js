function NoticiasDAO () {

}

NoticiasDAO.prototype.getNoticias = function(connection, callback) {
  connection.query('select * from noticias order by data_criacao DESC', callback);
}

NoticiasDAO.prototype.getNoticia = function(connection, id) {

  return new Promise((resolve, reject) => {
    connection.query(`select * from noticias where id_noticia = ${id}`, (erro, resultados) => {
        if (erro) return reject('Não foi possivel consultar a noticia');

      console.log(resolve);
      console.log(reject);
      
      return resolve(resultados);
    });
  })
}

NoticiasDAO.prototype.adicionar = function(noticia, connection, callback) {
  // query com set usa o modulo para inserir automaticamente as campom de acordo com o name do form e o campo da tabela
  //var sql = 'insert into noticias set ?';

  // usa a instrução sql completa, assumindo o risco de por valores em campos que não deveriam, mas deixa um controle maior com o programador !!!
  var sql = 'insert into noticias(titulo, noticia, resumo, autor, data_noticia) Values ?';
  var dataCriacao = new Date().getTime();

  var valores = [
    [noticia.titulo, noticia.noticia, noticia.resumo, noticia.autor, noticia.data_noticia]
  ]
  connection.query(sql, [valores], callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(connection, callback){
  connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

NoticiasDAO.prototype.apagar = function(id, connection, callback) {
  connection.query(`delete from noticias where id_noticia = ${id}`, callback);
}

module.exports = function() {
  return NoticiasDAO;
}
