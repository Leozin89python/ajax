<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>&reg;App</title>
</head>
<body>
		<h3>chamada de ajax</h3>
		<button id="page" onClick="newPage(Event)">voltar</button>
		<hr>
		<%=session.getAttribute("msg") %>
		<br>
		<%@ page import="java.util.Date" %>
		<%= "data:" + new Date() %>
		
		<script>
		console.log(`online into Tomcat - v7.0`)
		function newPage() {
			document.location.href = './index.jsp'
		}
	</script>
</body>
</html>