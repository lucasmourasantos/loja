module.exports = function(app){
  app.get('/clientes', function(req, res){

    var connection = app.infra.connectionFactory();

    var clientesDAO = new app.infra.ClientesDAO(connection);

    clientesDAO.lista(function(erros,resultados){
      res.render('clientes/lista', {lista:resultados});
    });
    connection.end();
  });

  app.get('/clientes/form', function(req, res){
        res.render('clientes/form');
  });

  app.post('/clientes/salva', function(req, res){
      var cliente = req.body;

            var connection = app.infra.connectionFactory();
            var clientesDAO = new app.infra.ClientesDAO(connection);
            clientesDAO.salva(cliente,function(erros,resultados){
            clientesDAO.lista(function(erros,resultados){
            res.render('clientes/lista', {lista:resultados});
        });
      });
    });
  }
