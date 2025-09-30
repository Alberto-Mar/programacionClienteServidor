<?php include_once("templates/header.php"); ?>
<?php include_once("datos.php")?>
<?php include_once("utils.php")?>
<div class="container">
    <?php $id = $_GET["id"] ?>
    <?php foreach($proyectos as $proyecto){
        if ($proyecto["clave"] == $id) {?>
            <h2><?php print($proyecto["titulo"])?></h2>
            <h4><a href="#"><?php print($proyecto["fecha"])?></a></h4>
            <span>Categorías: </span>
            <a href="#"><button class="btn btn-sm btn-default"><?php mostrarCategorias($proyecto, $categorias);?></button></a>
            <br> <br>
            <div class="row">
            <div class="col-sm">
            <img src="<?php $proyecto['imagen'] ? print($proyecto['imagen']) : print('static\images\default.jpeg') ?>" alt="<?php echo $proyecto['titulo']?>" class="img-responsive">
            <br>
            </div>
            <div class="col-sm">Descripción:
            <?php print(nl2br($proyecto["descripcionLarga"]));?>
            </div>
            </div>
        <?php };
    };?>

</div>
<?php include_once("templates/footer.php"); ?>
