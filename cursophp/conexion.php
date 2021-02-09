<?php
	
	$mysqli = new mysqli('localhost', 'marcos', 'isabel0808', 'personal');
	
	if($mysqli->connect_error){
		
		die('Error en la conexion' . $mysqli->connect_error);
		
	}
?>