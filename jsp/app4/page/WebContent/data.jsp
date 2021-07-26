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
<title>Insert title here</title>
</head>
<body>
	<h4>
		<jsp:setProperty property="*" name="el"/>
		<jsp:getProperty property="element" name="el"/>
	</h4>
</body>
</html>