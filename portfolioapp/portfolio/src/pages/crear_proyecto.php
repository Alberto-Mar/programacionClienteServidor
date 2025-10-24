<?php foreach ($proyectos as $proyecto): // A.2.a crear proyectos?>
<?php if($_GET["id"]==$proyecto["clave"] || empty($_GET["id"])): ?>
<!-- A2.c Formulario crear producto -->
<div class="container">
<form action="" method="POST">
    <div class="form-group">
        <label for="">Clave:</label>
        <input value="<?php $_GET["id"]? print($proyecto["clave"]): "" ?>" class="form-control"  name="clave" type="text" required>
    </div>
    <div class="form-group">
        <label for="">Título:</label>
        <input value="<?php $_GET["id"]? print($proyecto["titulo"]): "" ?>" class="form-control"  name="titulo" type="text" required>
    </div>
    <div class="form-group">
        <label for="">Fecha:</label>
        <input value="<?php $_GET["id"]? print($proyecto["fecha"]): "" ?>" class="form-control" name="fecha" type="date">
    </div>
    <div class="form-group">
        <label for="">Descripción: </label>
        <textarea value="<?php $_GET["id"]? print($proyecto["descripcion"]): "" ?>" class="form-control"  name="descripcion" id="" required></textarea>
    </div>
    <div class="form-group">
        <label for="">Imagen: </label>
        <?php $_GET["id"] && $proyecto["imagen"]? print($proyecto["imagen"]): "" ?>
        <input class="form-control"  name="imagen" type="file" name="" id="">
    </div>
    <button class="btn btn-primary" type="submit" >Submit</button>
</form>
</div>
<?php break?>
<?php endif?>
<?php endforeach?>