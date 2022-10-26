// requerindo um módulo HTTP do NODE
var http = require('http');

// criando um servidor HTTP escutando a porta 3000
// req = request;
// res = response;

http.createServer(function(req, res){

  var indice = req.url.indexOf('=');
  var parametro = req.url.substring(indice+1)
  res.end(parametro);
  
}).listen(3000, function() {
  // indica que o servidor está escutando a porta 3000
  console.log("to ouvindo");
});