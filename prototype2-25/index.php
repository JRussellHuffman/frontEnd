<html>
<head>
	<title>learning php is fun!</title>

	<style type="text/css">

	body {
		margin: 0;
		font-family: helvetica, arial, sans-serif;
	}

	div.halfWidth {
	    width: 45%;
	    /* border: 1px solid black; */
	    float: left;
	    height: 150px;
	    margin: 1%;
	}



	div.addPerson {
		position: relative;
		float: right;
		border: 1px solid black;
		padding:20px;
	}

	div.content {
		position: relative;
		float: left;
		border: 1px solid black;
		padding:10px;
		width: 700px;
	}

	div.wrapper {
		background:#e6e6e6;
		padding:20px;
		margin:10px;
	}

	div.filters {
		overflow: auto;
		border-bottom: 1px solid black;
		margin-bottom: 20px;
	}
	div.queue {
		position: relative;
		width: 100px;
		border-right: 1px solid black;
		box-sizing: border-box;
		float:left;
	}

	div.item {
	    padding:10px;
	    background: #e6e6e6;
	    margin:10px;
	    text-align: center;
	    list-style: none;
	    cursor: all-scroll;
	    z-index: 2;
	}

	#cart { 
	    width: 200px; 
	    float: left; 
	    margin-top: 1em; 
	    position: fixed;
	    bottom: 0;
	    width: 100%;
	    z-index: 1;
	    height: 75px;
	}

	.ui-widget-content {
		height: 75px;
	}

	#cart ol {
	    margin: 0;
	    /*padding: 1em 0 1em 3em;*/
	    overflow: auto;
	}

	ol {
		-webkit-margin-before: 0;
		-webkit-padding-start: 0;
	}

	li {
	    background: #e6e6e6;
	    padding:10px;
	    margin:20px;
	    list-style: none;
	    float:left;
	    cursor: all-scroll;
	}

	div.bottom-padding {
		position: relative;
		width: 100%;
		height: 150px;
		float: left;
	}

	</style>

</head>
<body>

	<?php 
		include "json.php"
	?>

	<script>
	var addToURL = "results.html?";
		//slider
		$(function() {
		    $( "#slider-range" ).slider({
		      range: true,
		      min: 1900,
		      max: 2016,
		      values: [ 1950, 1960 ],
		      slide: function( event, ui ) {
		        $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		        //call the database search by date function, will update in real time
		        database.searchbyDate(".content", ui.values[ 0 ], ui.values[ 1 ])
		      }
		    });
		    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) +
		      " - " + $( "#slider-range" ).slider( "values", 1 ) );
		});
		//drag and drop
		$(function() {
	    //$( "#catalog" ).accordion();
	    $( "div.item" ).draggable({
	      appendTo: "body",
	      helper: "clone"
	    });
	    $( "#cart ol" ).droppable({
	      activeClass: "ui-state-default",
	      hoverClass: "ui-state-hover",
	      accept: ":not(.ui-sortable-helper)",
	      drop: function( event, ui ) {
	        $( this ).find( ".placeholder" ).remove();
	        $( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
	        addToURL += ui.draggable.text() + "&";
	        window.history.pushState({"html":"something.html"},"test", addToURL );
	        var res = addToURL.split("&");
	        console.log(res);
	        //window.location.search += ui.draggable.text()+"&"; //append item name to URL
	      }
	    }).sortable({
	      items: "li:not(.placeholder)",
	      sort: function() {
	        // gets added unintentionally by droppable interacting with sortable
	        // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
	        $( this ).removeClass( "ui-state-default" );
	      }
	    });
	  });
  	</script>

  	<div class="queue">
  		<div class="item">item 0</div>
	  	<div class="item">item 1</div>
	  	<div class="item">item 2</div>
	  	<div class="item">item 3</div>
	  	<div class="item">item 4</div>
	  	<div class="item">item 5</div>
	  	<div class="item">item 6</div>
	  	<div class="item">item 7</div>
	  	<div class="item">item 8</div>
	  	<div class="item">item 9</div>
	  	<div class="item">item 10</div>
	  	<div class="item">item 11</div>
	  	<div class="item">item 12</div>
	  	<div class="item">item 13</div>
	  	<div class="item">item 14</div>
	  	<div class="item">item 15</div>
	  	<div class="item">item 16</div>
	  	<div class="item">item 17</div>
	  	<div class="item">item 18</div>
	  	<div class="item">item 19</div>
  	</div>

	<div class="filters">
		<div class="halfWidth">
			<h1>Tag Filter:</h1>
			<button onclick='database.appendAllTo(".content")'>View All</button>
			<button onclick='database.appendAllByTag(".content", "racism")'>Racism</button>
			<button onclick='database.appendAllByTag(".content", "activism")'>Activism</button>
			<button onclick='database.appendAllByTag(".content", "housing")'>Housing</button>
			<button onclick='database.appendAllByTag(".content", "development")'>Development</button>
			<button onclick='database.appendAllByTag(".content", "dome")'>Dome</button>
		</div>
		<div class="halfWidth">
			<h1>Date Filter:</h1>
			<p>
			  	<label for="amount">Year range:</label>
			  	<input type="text" id="amount" readonly style="border:0; color:#000; font-weight:bold;">
			</p>
			<div id="slider-range" style="margin-bottom:20px;"></div>
		</div>
	</div>

	<div class="addPerson"><h1> add an item </h1>
		<form action="create.php" method="post">

			Name: <input type="text" name="inputName" value=""><br><br>
			Subhead: <input type="text" name="inputSubhead" value=""><br><br>
			Description: <input type="text" name="inputDesc" value=""><br><br>
			Media Type: <input type="text" name="inputMedia" value=""><br><br>
			Date: <input type="text" name="inputDate" value=""><br><br>
			Tags: <br>
			<input type="checkbox" name="tag01" value="racism" > Racism<br>
			<input type="checkbox" name="tag02" value="activism" > Activism<br>
			<input type="checkbox" name="tag03" value="development" > Development<br>
			<input type="checkbox" name="tag04" value="housing" > Housing<br>
			<input type="checkbox" name="tag05" value="dome" > Dome<br>
			<br>
			<input type="submit" name="submit">

		</form>
	</div>
	<div class="content">

	</div>
	<div id="cart">
	  	<!-- <h1 class="ui-widget-header">Shopping Cart</h1> -->
	  	<div class="ui-widget-content">
	    	<ol>
	      		<li class="placeholder">Add your items here</li>
	    	</ol>
	  	</div>
	</div>
	<div class="bottom-padding"></div>

	<script type="text/javascript">
		database.appendAllTo(".content")
	</script>
	 

</body>
</html>