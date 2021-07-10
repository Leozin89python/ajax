<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
	crossorigin="anonymous">
<link rel="stylesheet" href="app.css">
<title>administration&reg;</title>
</head>
<body>

	<div class="responsive">
	
		<div id="header">

			<div id="return">
				<div class="btn-group" role="group"
					aria-label="Basic mixed styles example">
					<button type="button" class="btn btn-dark" onclick="back(Event)">back</button>
				</div>
			</div>

			<div class="jumbotron jumbotron-fluid">
				<div class="container">
					<h1 class="display-4">Administration&reg;</h1>
					<p class="lead">form to insert products to store!</p>
				</div>
			</div>

			<hr>
		</div>

		<div id="main">
			
			<div class="mb-3">
				<input type="text" class="form-control" id="id" placeholder="id"></input>
			</div>
			
			<div class="mb-3">
				<input type="text" class="form-control" id="img" placeholder="url from image"></input>
			</div>

			<div class="mb-3">
				<input type="text" class="form-control" id="item" placeholder="item"></input>
			</div>

			<div class="mb-3">
				<input type="text" class="form-control" id="des" placeholder="description"></input>
			</div>

			<div class="mb-3">
				<input type="number" class="form-control" id="price"placeholder="price"></input>
			</div>
			
		</div>

		<div id="footer">
			<footer>&reg;2021 administration have all rights reserved.</footer>
		</div>

	</div>

	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"></script>
	<script src="app.js"></script>
</body>
</html>