CREATE TABLE clientes(
id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome varchar(255) DEFAULT NULL,
cpf varchar(14) DEFAULT NULL);

//--------------------------------------------------------------------
insert into clientes(nome, cpf) values ('Fulano', '111.111.111.11');
insert into clientes(nome, cpf) values ('Cicrano', '222.222.222.22');
insert into clientes(nome, cpf) values ('Beltrano', '333.333.333.33');

||=================================================||

CREATE TABLE servicos(
id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
tipo int DEFAULT NULL,
descricao varchar(255) DEFAULT NULL);

//--------------------------------------------------------------------
insert into servicos(tipo, descricao) values (010, 'Manuten��o');
insert into servicos(tipo, descricao) values (010, 'Formata��o');
insert into servicos(tipo, descricao) values (015, 'Consultoria');

//--------------------------------------------------------------------
  CREATE TABLE produtos (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo varchar(255) DEFAULT NULL,
  descricao text,
  preco decimal(10,2) DEFAULT NULL
  );

||=================================================||
insert into produtos(titulo, descricao, preco) values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);
insert into produtos(titulo, descricao, preco) values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);
insert into produtos(titulo, descricao, preco) values ('Comecando com express', 'livro introdutório sobre express', 39.90);

//------------------------------------------------------------------------
CREATE TABLE contatos (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  fone varchar(18) DEFAULT NULL
  );

||=================================================||
insert into contatos(nome, email, fone) values ('Fulano', 'fulano@gmail.com', '(89)99900-8765');
insert into contatos(nome, email, fone) values ('Beltrano', 'beltrano@gmail.com', '(89)99411-0645');
insert into contatos(nome, email, fone) values ('Cicrano', 'cicrano@gmail.com', '(89)98398-0011');
//------------------------------------------------------------------------

INICIANDO O MYSQL SERVER E FAZENDO LOGIN
C:\Users\Lucas>cd c:\mysql-5.7.20-winx64

c:\mysql-5.7.20-winx64>cd bin

c:\mysql-5.7.20-winx64\bin>mysqld --console

c:\mysql-5.7.20-winx64\bin>mysql -h localhost -u root
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 51
Server version: 5.5.27 MySQL Community Server (GPL)

Copyright (c) 2000, 2017, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
