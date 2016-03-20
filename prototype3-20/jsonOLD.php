<script type="text/javascript">

var data = []

function pushToData(a,b,c,d,e,f) {
	data.push({
		name:a, 
		subhead:b,
		description:c,
		mediaType:d,
		date:e,
		tags:f
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
	        	pushToData("'.$row['itemName'].'","'.$row['itemSubhead'].'","'.$row['itemDescription'].'","'.$row['mediaType'].'","'.$row['date'].'","'.$row['tags__001'].'")
	        </script>';
			
	    }
	} else {
	    echo '<script type="text/javascript">console.log("no results")</script>';
	}

?>