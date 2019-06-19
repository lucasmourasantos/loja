module.exports = function(app){
  app.get('/contatos', function(req, res){

    var connection = app.infra.connectionFactory();

    var contatosDAO = new app.infra.ContatosDAO(connection);

    contatosDAO.lista(function(erros,resultados){
      res.render('contatos/lista', {lista:resultados});
    });
    connection.end();
  });

  app.get('/contatos/form', function(req, res){
        res.render('contatos/form');
  });

  app.post('/contatos/salva', function(req, res){
  		var contato = req.body;
  		// console.log(produto);

        		var connection = app.infra.connectionFactory();
        		var contatosDAO = new app.infra.ContatosDAO(connection);
        		contatosDAO.salva(contato,function(erros,resultados){
            contatosDAO.lista(function(erros,resultados){
            res.render('contatos/lista', {lista:resultados});
      	});
    	});
  	});
}
