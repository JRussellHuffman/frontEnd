<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<script type="text/javascript">

var data = [] //this is the preprocesed data, befor it enters into the object

function pushToData(a,b,c,d,e,f,g,h,j,k) {
	//make an array of tags
	maketags = []
	if (f != "") {
		maketags.push(f);
	}
	if (g != "") {
		maketags.push(g);
	}
	if (h != "") {
		maketags.push(h);
	}
	if (j != "") {
		maketags.push(j);
	}
	if (k != "") {
		maketags.push(k);
	}

	data.push({
		name:a, 
		subhead:b,
		description:c,
		mediaType:d,
		date:e,
		tags:maketags
	});
}

</script>

<?php
	include 'includes/connection.php';

	$sql = "SELECT * FROM subset1";
	$result = $mysqli->query($sql);

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	        //echo "name: " . $row["itemName"]. ", Description: " . $row["itemSubhead"]. "<br>";

	        echo '<script type="text/javascript">
	        	pushToData("'.$row['itemName'].'","'.$row['itemSubhead'].'","'.$row['itemDescription'].'","'.$row['mediaType'].'","'.$row['date'].'","'.$row['tags__001'].'","'.$row['tags__002'].'","'.$row['tags__003'].'","'.$row['tags__004'].'","'.$row['tags__005'].'")
	        </script>';
			
	    }
	} else {
	    echo '<script type="text/javascript">console.log("no results")</script>';
	}

?>

<script type="text/javascript">

//database constructor

function makedataBase (data) {
	this.data = data;

	this.name = []
	this.subhead = []
	this.description = []
	this.mediaType = []
	this.date = []
	this.tags = []

	for (var i = 0; i < data.length; i++) {
		this.name.push(data[i].name);
		this.subhead.push(data[i].subhead);
		this.description.push(data[i].description);
		this.mediaType.push(data[i].mediaType);
		this.date.push(data[i].date);
		this.tags.push(data[i].tags);
	};

	function fixedYear(e) {
		var d = new Date(e);
		var m = d.getMonth();
		var day = d.getDate()

		if (m == 11 && day == 31) {
			var adjustedYear = d.getFullYear() + 1;
			return adjustedYear;
		} else {
			return d.getFullYear();
		}
	}

	this.getYear = function (e) {
		return fixedYear(this.date[e])
	}

	function addEntry (item, e) {
		return '<div class="wrapper">' +
		"<h2>" + item.name[e] + "</h2>" + 
		"<h3>" + item.subhead[e] + "</h3>" +
		"<p>" + item.description[e] + "</p>" +
		"<span> date: " + item.date[e] + "</span> <br>" +
		"<span> tags: " + item.tags[e] + "</span>" +
		"</div>";
	}

	function addTitle(item, e) {
		return '<div class="item ui-draggable ui-draggable-handle">' + item.name[e] + ' ...</div>'
	}

	this.searchbyDate = function (divName, startDate, endDate) {
		$(divName).empty();
		$("div.queue").empty();
		var datesFound = false;
		for (var i = 0; i < data.length; i++) {

			var d = fixedYear(this.date[i])
			if (d >= startDate && d <= endDate) {
				datesFound = true;
				$(divName).append(addEntry(this,i));
				$("div.queue").append(addTitle(this,i));
			}
		};
		if (!datesFound) {
			$(divName).append("search returned no results");
		}
	}

	this.appendAllTo = function (divName) {
		$(divName).empty();
		$("div.queue").empty();
		for (var i = 0; i < data.length; i++) {
			$(divName).append(addEntry(this,i));
			$("div.queue").append(addTitle(this,i));
		};
	}

	function loopthroughTags(divName, tag, item, e) {
		for (var i = 0; i < item.tags[e].length; i++) {
			if (item.tags[e][i] == tag) {
				$(divName).append(addEntry(item,e));
			}
		};
	}

	this.appendAllByTag = function (divName, tag) {
		$(divName).empty();
		$("div.queue").empty();
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < this.tags[i].length; j++) {
				if (this.tags[i][j] == tag) {
					$(divName).append(addEntry(this,i));
					$("div.queue").append(addTitle(this,i));
				}
			};
		};
	}

}

//construct objects

var database = new makedataBase(data);



</script>