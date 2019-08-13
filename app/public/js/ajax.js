let request = null;

function createRequest() {
    request = new XMLHttpRequest();

    if (!request) {
        alert('Não foi possivel fazer a requisção !!!!');
    }
}

function getInformacaoQualquer() {
  var query = location.search;
    var partes = query.replace(/[?]+/g, '');
    partes = partes.split('=');
    var obj = {}
    obj['id_noticia'] = partes[1];

    createRequest();
    var url = "/noticia?id_noticia="+partes[1];
    request.open('DELETE', url, true);
    request.onreadystatechange = atualizaPagina;
    request.send(null);
    location.reload();
}


function atualizaPagina() {
    if (request.readyState == 4) {
      var respostaDoServidor = request.responseText;
      alert(respostaDoServidor);
    }
}
