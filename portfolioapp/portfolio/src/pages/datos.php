<?php $nombre = "Alberto Martínez Martínez"; // UD3.2.c variable de nombre


$categorias = json_decode(file_get_contents("json/datos2.json"), true);

$loggedIn = true; //UD3.2.e variable login, aparecera o no boton de admin

$usuarios = json_decode(file_get_contents("json/usuarios.json"), true);

$proyectos = json_decode(file_get_contents("json/datos1.json"), true);


?>