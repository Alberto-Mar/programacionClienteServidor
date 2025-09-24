<?php include_once("templates/header.php") ?>
<?php include_once("datos.php") ?>
<div class="container">
    <div class="row">
    <?php foreach($proyectos as $proyecto): ?>
        <div class="col-sm-3"> 
            <a href="#" class="p-5">
                <div class="card" style="width: 16rem;">
                    <img class="card-img-top" src=" <?php echo $proyecto['imagen']?>" alt=" <?php echo $proyecto['titulo']?>">
                    <div class="card-body">
                        <h5 class="card-title"> <?php echo $proyecto['titulo']?></h5>
                        <p class="card-text"> <?php echo $proyecto['descripcion']?></p>
                    </div>
                </div>
            </a>
        </div>
    <?php endforeach; ?>
    </div>
</div>
<?php include_once("templates/footer.php") ?>
