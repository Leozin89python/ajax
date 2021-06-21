<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>&reg;logon</title>
</head>
<body>
	
	<button onclick="voltar(Event)">voltar</button>
	<hr>
	
	<form action="LoginServlet" method="post">
	
		<input type="text" id="login" name="login" placeholder="login">
		<br/>
		<input type="password" id="senha" name="senha" placeholder="senha">
		<input type="submit" value="enviar">
		
	</form>
	
	<script>
		function voltar() {
			document.location.href = './index.jsp'
		}
	</script>
</body>
</html>