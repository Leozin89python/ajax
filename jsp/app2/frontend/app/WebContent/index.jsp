<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
       
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>&reg;App</title>
</head>
<body>

	<h3>applicação</h3>
	<button id="page" onClick="newPage(Event)">ajax</button>
	<button onClick="newPage2(Event)">mais conteúdo</button>
	<button onClick="newPage3(Event)">outro conteúdo</button>
	<button onClick="newPage4(Event)">Login</button>
	

	<hr>
	<%String msg="JSP - APP"; %>
	<%= msg%>
	<%session.setAttribute("msg", "JSP - APP"); %>
	<br>
	<%="Locale:" + request.getLocale() + " - " +"Protocol:" + request.getProtocol()  + " - " + "Port:" + request.getLocalPort()%>

	<script>
		console.log(`online into Tomcat - v7.0`)
		function newPage() {
			document.location.href = './requisicao.jsp'
		}
		

		function newPage2() {
			document.location.href = './moreContent.jsp'
		}
		
		function newPage3() {
			document.location.href = './otherPage.jsp'
		}
		
		function newPage4() {
			document.location.href = './login.jsp'
		}
	</script>
	
	<footer>
				<%@ include  file="include.jsp"%>
	</footer>
</body>
</html>