<html>
<head>
    <title>Portfolio de proyectos</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">    

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body class="d-flex flex-column min-vh-100">

    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
            <span class="fs-4">Portfolio <?php print(añoActual())?></span>
        </a>

        <ul class="nav nav-pills">
            <!-- UD3.2.a enlace lleva al inicio -->
            <li class="nav-item"><a href="index.php?page=inicio" class="nav-link <?php $page == "inicio"? print("active") :"" ?>" aria-current="page">INICIO</a></li>
            <li class="nav-item">
                <a class="nav-link dropdown-toggle" id="dropdownMenu1" data-bs-toggle="dropdown">CATEGORÍAS
                    <span class="caret"></span>
                </a>
                <div class="dropdown-menu">
                    <?php foreach($categorias as $clave => $categoria): ?>
                    <a href="index.php?page=proyectos&order=asc&categ=<?php print($clave) ?>" class="dropdown-item"><?php print($categoria) ?></a>
                    <?php endforeach?>
                </div>
            </li>
            <!-- UD3.2.a enlace lleva a contacto -->
            <li class="nav-item"><a href="index.php?page=contacto" class="nav-link <?php $page == "contacto"? print("active") :"" ?>">CONTACTO</a></li>
            <?php if($_COOKIE["user_email"]): // UD3.2.e si estamos logeados, aparece el boton de administracion?>
            <li class="nav-item"><a href="index.php?page=administracion" class="nav-link <?php $page == "contacto_lista"? print("active") :"" ?>">ADMINISTRACION</a></li>
            <li class="nav-item"><a href="pages/logout.php" class="nav-link <?php $page == "logout"? print("active") :"" ?>">LOGOUT</a></li>
            <?php else: ?>
            <li class="nav-item"><a href="index.php?page=login" class="nav-link <?php $page == "login"? print("active") :"" ?>">LOGIN</a></li>
            <?php endif?>
        </ul>
    </header>