<html>
<head>
	<title></title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/fotorama.css">
</head>
<body>
	<?php 
		include "json.php"
	?>

	<div class="results"></div>
	<div class="fotorama-container">
		<div class="fotorama" data-width="100%" data-height="100%" data-loop="true" data-nav="false" data-autoplay="false" data-stopautoplayontouch="true" data-max-width="100%" data-arrows="true" data-nav="dots">
			<!--content goes here -->
			<h1>test slide 1!</h1>
			<h1>test slide 2!</h1>
			<h1>test slide 3!</h1>
			<h1>test slide 4!</h1>
		</div>
	</div>
	<script type="text/javascript" src="libraries/fotorama.js"></script>

	<script type="text/javascript">

		var query = window.location.search.slice(1);
		function loadContent () {
			var res = query.split("&");
			var contentArray = []

			for (var i = 0; i < res.length; i++) {
				var results =  parseSpecial(res[i]);
				console.log(results)
				var append = grabObject(results)
				contentArray.push({html: append})
			};

			console.log(res);
			fotorama.load(contentArray);
		}

		function parseSpecial(string) {
			var parsed =  string.replace(/%20/g, " ").replace(/%92/g, "'")
			return parsed;
		}

		function grabObject(name){
			for (var i = 0; i < database.name.length; i++) {
				if (name == database.name[i]) {
					var name = database.name[i];
					var subhead = database.subhead[i];
					var description = database.description[i]
					var returnObject = '<div class="item"><h1 class="item">' + name + '</h1><h2 class="item">' + subhead + '</h2><p class="item">' + description + '</p></div>'
					return returnObject;
				}
			};
		}

		//make fotorama object
		var fotorama;

		$(function () {
		    // 1. Initialize fotorama manually.
		    var $fotoramaDiv = $('.fotorama').fotorama();

		    // 2. Get the API object.
		    fotorama = $fotoramaDiv.data('fotorama');

		    // 3. Inspect it in console.
		    console.log(fotorama);

		    loadContent();
		    
		});


	</script>
</body>
</html>