<?php
	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbpass = 'root';

	$db = 'test2-16';

	// Create connection
	$mysqli = new mysqli($dbhost, $dbuser, $dbpass, $db);

	// Check connection
	if ($mysqli->connect_error) {
	    die("Connection failed: " . $mysqli->connect_error);
	} 
	//echo "Connected successfully <br>";

	//show default DB
	// if ($result = $mysqli->query("SELECT DATABASE()")) {
	//     $row = $result->fetch_row();
	//     printf("Default database is %s.\n", $row[0]);
	//     $result->close();
	// }
?>