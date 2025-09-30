<?php include_once("templates/header.php") ?>
<?php include_once("datos.php")?>
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

<!-- <?php $primer_valor = current($proyectos)['dinero'];
foreach($proyectos as $proyecto => $valor){
    $resultado = $primer_valor <=> $valor['dinero'];
    print("comparando" . $primer_valor . "con" . $valor['dinero'] . "tenemos" . $resultado . "<br>");
}?> -->

<!-- <form action="index.php" method="POST">
Nombre: <input type="text" name="nombre"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

<form action="index.php" method="GET">
Mascota: <input type="text" name="mascota"><br>
Color: <input type="text" name="color"><br>
<input type="submit">
</form> -->

<?php include_once("templates/footer.php") ?>
