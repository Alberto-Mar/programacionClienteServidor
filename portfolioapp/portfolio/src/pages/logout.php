<?php // A.1.f funcionalidades boton logout
session_start();
session_destroy();
setcookie("user_email","", time() -1000,"/");
header("Location: ../index.php?page=inicio");
exit;
?>