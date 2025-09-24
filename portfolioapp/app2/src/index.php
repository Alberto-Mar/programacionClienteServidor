<?php include_once("templates/header.php") ?>
<div class="row">
<div class="col-12 d-flex justify-content-center my-5">
        <a href="productosGlob.php" class="btn btn-primary btn-lg px-3 py-1">
        PRODUCTOS
        </a>
</div>
</div>

<!-- <div>
    <?php foreach ($_ENV as $clave => $valor){
        print($clave . $valor . "<br>");
    }
    ?>  
</div> -->
<?php usort($proyectos, function($a, $b){return $a['titulo']<=>['titulo'];});?>
<?php include_once("templates/footer.php") ?>
