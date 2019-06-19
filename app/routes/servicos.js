module.exports = function(app){
  app.get('/servicos', function(req, res){

    var connection = app.infra.connectionFactory();

    var servicosDAO = new app.infra.ServicosDAO(connection);

    servicosDAO.lista(function(erros,resultados){
      res.render('servicos/lista', {lista:resultados});
    });
    connection.end();
    });

    app.get('/servicos/form', function(req, res){
          res.render('servicos/form');
    });

    app.post('/servicos/salva', function(req, res){
        var servico = req.body;

              var connection = app.infra.connectionFactory();
              var servicosDAO = new app.infra.ServicosDAO(connection);
              servicosDAO.salva(servico,function(erros,resultados){
              servicosDAO.lista(function(erros,resultados){
              res.render('servicos/lista', {lista:resultados});
          });
        });
      });
    }
