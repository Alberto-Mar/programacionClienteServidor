<?php 
include_once('datos.php');
usort($proyectos, function($a, $b) {    
    if ($a['dinero'] == $b['dinero']) {
        return 0;
    }
    return ($b['dinero'] < $a['dinero']) ? -1 : 1;
});
?>

