<html>
<head>
  <title>Contatos</title>
</head>
  <body>
    <h1>Lista de Contatos a remover!</h1>
    <table border="1px">
      <tr>
        <td>ID</td>
        <td>Nome</td>
        <td>E-mail</td>
        <td>Fone</td>
      </tr>

      <%for(var i = 0; i < lista.length; i++) {%>

      <tr>
        <td><%=lista[i].id%></td>
        <td><%=lista[i].nome%></td>
        <td><%=lista[i].email%></td>
        <td><%=lista[i].fone%></td>
      </tr>
      <%}%>
    </table>
  </body>
</html>
