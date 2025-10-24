<!-- A.3.b formulario creacion usuarios   -->
<div class="container">
    <?php foreach($usuarios as $usuario):?>
    <?php if($usuario['usuario'] == $_COOKIE['user_email']):?>
    <form method="POST">
    <div class="form-group">
        <label>Correo Electrónico</label>
        <input type="email" name="usuario" class="form-control" placeholder="email@email.com" value="<?php print($usuario['usuario'])?>"required>
    </div>
    <br>
    <div class="form-group">
        <label>Nombre:</label>
        <input type="text" name="nombre" class="form-control" value="<?php print($usuario['nombre']) ?>">
    </div>
    <br>
    <div class="form-group">
        <label>DNI:</label>
        <input type="text" name="dni" class="form-control" value="<?php print($usuario['dni']) ?>" pattern="^\d{8}[A-Z]$" required>
    </div>
    <br>
    <div class="form-group">
        <label>Contraseña</label>
        <input type="password" name="password" class="form-control" value="<?php print($usuario['password'])?>" required>
    </div>
    <br>
    <button type="submit" class="btn btn-primary">Modificar usuario</button>
    </form>
    <?php endif;?>
    <?php endforeach;?>
</div>