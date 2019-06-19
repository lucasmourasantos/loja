function ContatosDAO(connection){
  this._connection = connection;
}

ContatosDAO.prototype.lista = function(callback){
  this._connection.query('select * from contatos', callback);
}

ContatosDAO.prototype.salva = function(contato, callback){
  this._connection.query('insert into contatos set ?', contato, callback);
}

module.exports = function(){
  //console.log(this);
  return ContatosDAO;

}
