<jsp:useBean id="calcula" class="app.beans.JavaBeans" type="app.beans.JavaBeans" scope="page"/>
<jsp:useBean id="usuario" class="app.beans.DadosBeans" type="app.beans.DadosBeans" scope="page"/>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>&reg;more content</title>
	<style>
		div{
			margin-top: 90px;
			
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			}
	</style>
</head>
<body>	
		<% String newMsg = "novo conteúdo"; %>
		<%= newMsg %>
		<br>
		<br>
		<button id="page" onClick="newPage(Event)">voltar</button>
		<hr>
		<%= session.getAttribute("msg") %>
		
		
		<div>
			<% String outraMsg = "recebendo beans"; %>
			<%= outraMsg %>
			<br><br><br>
			<p>resposta:</p>
			<%=calcula.calcula(4)  %>
			<br><br><br>
			
			<form action="otherPage.jsp" method="post" id="dados">
				<br />
				<input id="nome" type="text" name="nome"  placeholder="nome...">
				<br />
				<input id="idade" type="text" name="idade"  placeholder="idade...">
				<br />
				<input id="sexo" type="text" name="sexo"  placeholder="sexo...">
				<br />
				<input type="submit" value="testar">
			</form>
			
		</div>
		
		<script>
			function newPage() {
				document.location.href = './index.jsp'
			}
		</script>
</body>
</html>