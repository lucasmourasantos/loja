function ClientesDAO(connection){
  this._connection = connection;
}

ClientesDAO.prototype.lista = function(callback){
  this._connection.query('select * from clientes', callback);
}

ClientesDAO.prototype.salva = function(cliente, callback){
  this._connection.query('insert into clientes set ?', cliente, callback);
}

module.exports = function(){
  //console.log(this);
  return ClientesDAO;

}
