<div class="container">
    <?php foreach($proyectos as $proyecto):?>
        <?php if($proyecto["clave"]==$id): ?>
            <h2><?php print($proyecto["titulo"]) ?></h2>
            <h4><a href="#"><?php print(date("Y", strtotime($proyecto["fecha"]))) ?></a></h4>
            <span>Categorías: </span>
            <?php foreach($proyecto["categoria"] as $ca):?>
            <a href="#"><button class="btn btn-sm btn-default"><?php print($categorias[$ca]) ?></button></a>
            <?php endforeach ?>
            <br> <br>
            <div class="row">
                <div class="col-sm">
                    <img src="<?php print($proyecto["imagen"]? $proyecto["imagen"]: "static/images/default.jpeg" ) // UD3.2.d operador ternario en caso de no existir imagen?>" alt="Proyecto 1" class="img-responsive"><br>
                </div>
                <div class="col-sm"><?php print($proyecto["descripcionLarga"]) ?></div>
            </div>
        <?php endif ?>
    <?php endforeach?>
</div>
