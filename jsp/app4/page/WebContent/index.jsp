<jsp:useBean id="el"  
			 class="page.bean.Element" 
			 type="page.bean.Element" 
			 scope="page"/>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>page&copy;</title>
	<link rel="stylesheet" href="app.css">
</head>
<body>
	<header>
		<%@ include  file="header.jsp"%>
	</header>
	
	<main>
		<div>
			<form action="data.jsp" method="post">
				<input placeholder="id..." type="number" name="id" >
				<input placeholder="element..." type="text" name="element" >
				<input type="submit" class="button" value="send">
			</form>
		</div>
	</main>
	
	<footer>
		<%@ include  file="footer.jsp"%>
	</footer>
	<script src="app.js"></script>
</body>
</html>