<?php include_once("templates/header.php") ?>
<?php include_once("datos.php") ?>
<div class="container">
    <div class="row">
    <?php foreach($proyectos as $proyecto):  //iniciamos el foreach que recorre nuestro array de datos importado?>
        <div class="col-sm-3"> 
            <a href="#" class="p-5">
                <div class="card" style="width: 16rem;">
                    <img class="card-img-top" src=" <?php echo $proyecto['imagen']?>" alt=" <?php echo $proyecto['titulo']?>">
                    <div class="card-body">
                        <h5 class="card-title"> <?php echo $proyecto['titulo']?></h5>
                        <p class="card-text"> <?php echo $proyecto['descripcion']." ".$proyecto['dinero']?>€</p>
                    </div>
                </div>
            </a>
        </div>
    <?php if ($proyecto['clave'] == "proyecto4")break; //cuando llegue al array con clave proyecto4, rompe el foreach ?>
    <?php endforeach?>
    </div>
</div>
<div class="container">
<button style="background-color: black; width: 100px; height: 70px; border: none; border-radius: 15px; "><a href="productos2.php">Siguiente</a></button>
</div>
<?php include_once("templates/footer.php") ?>
