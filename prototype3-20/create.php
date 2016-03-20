<?php

	include "includes/connection.php";

	//echo "whats up with this?"

	$name = $_POST['inputName'];
	$subhead = $_POST['inputSubhead'];
	$desc = $_POST['inputDesc'];
	$media = $_POST['inputMedia'];
	$date = $_POST['inputDate'];
	$tag01 = $_POST['tag01'];
	$tag02 = $_POST['tag02'];
	$tag03 = $_POST['tag03'];
	$tag04 = $_POST['tag04'];
	$tag05 = $_POST['tag05'];

	echo $name."<br>";
	echo $desc."<br>";

	// if (!$_POST['submit']) {
	// 	echo "please fill out the form";
	// 	header('Location: index.php')
	// } else {
		mysqli_query ($mysqli, "INSERT INTO subset1 (`itemName`, `itemSubhead`,`itemDescription`, `mediaType`,`date`, `tags__001`, `tags__002`, `tags__003`, `tags__004`, `tags__005`)
						VALUES('$name','$subhead','$desc', '$media','$date', '$tag01', '$tag02', '$tag03', '$tag04', '$tag05')") or die(mysql_error());
		//echo "user has been added!";
		
	//}
?>

<script type="text/javascript">
	window.location = 'index.php';
</script>