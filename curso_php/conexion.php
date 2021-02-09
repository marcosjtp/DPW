<?php
$mysqli=new mysqli('192.168.1.22','marcos','isabel0808','personal');
if($mysqli->connect_error){
    die('Error en la conexion '.$mysqli->connect_error);
    die('status de conexion '.$mysqli->connection_status);
}
printf('Conexion Exitosa ');
printf("Informacion del Servidor : %s\n ",$mysqli->server_info,);


?>