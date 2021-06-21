<jsp:useBean id="usuario" class="app.beans.DadosBeans" type="app.beans.DadosBeans" scope="page"/>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>&reg;other page</title>
</head>
<body>
	<% String msg = "other page"; %>
	<%=msg %>
	<br>
	<br>
	<br>
	<button onClick="newPage(Event)">voltar</button>
	<hr>
	
	<%@ include file="header.jsp" %>
		<hr>
			
			<jsp:setProperty property="*" name="usuario"/>
			<h3>usuário</h3>
			<br />
			<jsp:getProperty property="nome" name="usuario"/>
			<br />
			<jsp:getProperty property="idade" name="usuario"/>
			<br />
			<jsp:getProperty property="sexo" name="usuario"/>
			<br />
			<jsp:getProperty property="ano" name="usuario"/>
			<br />
			<jsp:getProperty property="comentario" name="usuario"/>
		<hr>	
	<%@ include file="footer.jsp" %>
	
	<script>
		function newPage() {
			document.location.href = './index.jsp'
		}
	</script>
</body>
</html>