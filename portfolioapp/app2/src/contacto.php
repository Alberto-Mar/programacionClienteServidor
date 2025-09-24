<?php include_once("templates/header.php")?>
<?php include_once("datos.php") //UD3.2.c importamos nuetros datos para tener acceso a la variable del nombre?>
<div class="container">
    <h2 class="mb-5">Contacto</h2>
    <div class="row">
        <div class="col-md">
            <img src="static/images/imagen3.jpeg" class="img-fluid rounded">
        </div>
        <div class="col-md">
            <h3><?php print($contacto)  //UD3.2.c Mostramos el contenido de la variable?></h3>
            <p>Ciclo Superior DAW.</p>
            <p>Apasionado del mundo de la programación en general, y de las tecnologías web en particular.</p>
            <p>Si tienes cualquier tipo de pregunta, contacta conmigo por favor.</p>
            <p>Teléfono: 87654321</p>
        </div>
    </div>
</div>
<?php include_once("templates/footer.php")?>