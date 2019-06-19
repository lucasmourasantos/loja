function ServicosDAO(connection){
  this._connection = connection;
}

ServicosDAO.prototype.lista = function(callback){
  this._connection.query('select * from servicos', callback);
}

ServicosDAO.prototype.salva = function(servico, callback){
  this._connection.query('insert into servicos set ?', servico, callback);
}

module.exports = function(){
  //console.log(this);
  return ServicosDAO;

}
