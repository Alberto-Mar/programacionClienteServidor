<?php include_once("templates/header.php") ?>
<?php include_once("utils.php")?>
<?php 
$page = isset($_GET["page"])? (int)$_GET["page"]: 1;  // variable de get referente a la página de productos en la que nos encontremos 
$order = isset($_GET["order"])? $_GET["order"]: "ascendente";  // variable de get según como queramos ordenar los productos
$id = isset($_GET["id"])? $_GET["id"]: "0";  // variable de get que indica el id del producto seleccionado

?>
<?php include_once("datos.php") ?>
<?php $proyectos = orderby($proyectos, $order);  // UD3.2.f ordenamos el array de proyectos haciendo uso de la función, pasándole el array y el método de orden?>
<div class="container">
    <div class="row">
    <?php $contador = 0;?>
    <?php foreach($proyectos as $proyecto):  // iniciamos el foreach que recorre nuestro array de datos importado?>
        <?php if ($contador >= ($page-1)*4 && $contador < $page*4):?>
        <div class="col-sm-3"> 
            <a href="producto.php?id=<?php print($proyecto['clave']);?>" class="p-5">
                <div class="card" style="width: 16rem;">
                    <img class="card-img-top" src="<?php $proyecto['imagen'] ? print($proyecto['imagen']) : print('static\images\default.jpeg')  // UD3.2.d utilizamos el operador ternario, si el valor de imagen de nuestro proyecto está vacio, mostrará la imagen por defecto?>" alt=" <?php echo $proyecto['titulo']?>">
                    <div class="card-body">
                        <h5 class="card-title"> <?php echo $proyecto['titulo']?></h5>
                        <p class="card-text"> <?php echo $proyecto['descripcion']." ".$proyecto['dinero']."€    "?></p>
                        <p class="card-text"> <?php mostrarCategorias($proyecto, $categorias);
                        // UD3.3.c foreach para comprobar la existencia de cada categoria, de ser así se muestra el valor de la categoría correspondiente?></p>
                    </div>
                </div>
            </a>
        </div>
    <?php endif ?>
    <?php $contador++ ?>
    <?php endforeach?>
    </div>
</div>
<div class="row">
<?php if ($page > 1) { ?>
<div class="col d-flex justify-content-center  my-5">
        <a href="?page=<?php print($page-1 . "&order=" . $order)  // UD3.2.f cada vez que se cambie de página, tenemos que hacer que persista la variable order?>" class="btn btn-primary btn-lg px-3 py-1">
        ATRÁS
        </a>
</div>

<?php }?>
<!-- UD3.2.f Botón para ordenar de manera ascendente -->
<div class="col d-flex justify-content-center my-5">
        <a href="productosGlob.php?page=<?php print($page)  // UD3.2.f seguimos en la misma página pero cambiando el valor de la variable de entorno order?>&order=ascendente" class="btn btn-primary btn-lg px-3 py-1">
        ORDENAR DE MANERA ASCENDENTE
        </a>
</div>

<!-- UD3.2.f Botón para ordenar de manera descentente -->
<div class="col d-flex justify-content-center my-5">
        <a href="productosGlob.php?page=<?php print($page)  // UD3.2.f seguimos en la misma página pero cambiando el valor de la variable de entorno order?>&order=descendente" class="btn btn-primary btn-lg px-3 py-1">
        ORDENAR DE MANERA DESCENDENTE
        </a>
</div>
<?php if ($page < (count($proyectos)/4) ) {?>
<div class="col d-flex justify-content-center my-5">
        <a href="?page=<?php print($page+1 . "&order=" . $order)  // UD3.2.f cada vez que se cambie de página, tenemos que hacer que persista la variable order?>" class="btn btn-primary btn-lg px-3 py-1">
        SIGUIENTE
        </a>
</div>
<?php }?>
</div>
<?php include_once("templates/footer.php") ?>