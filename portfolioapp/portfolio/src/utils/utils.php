<?php 
function ordenPorPrecio($proyectos, $orden) {
    if ($orden == "asc") {
        usort($proyectos, function($p1, $p2) {
            return $p1["dinero"] <=> $p2["dinero"];
        });
    } else {
        usort($proyectos, function($p1, $p2) {
            return $p2["dinero"] <=> $p1["dinero"];
        });
    }
    return $proyectos;
};

function filtrarCategorias($proyectos, $categoria) {
    $filtrados = [];
    foreach ($proyectos as $proyecto) {
        if (in_array($categoria, $proyecto["categoria"])) {
            array_push($filtrados, $proyecto);
        }
    }
    return $filtrados;
}

function añoActual() {
    return date("Y");
}

function ordenPorFecha($proyectos, $orden) {
    $fechas = array_column($proyectos, "fecha");
    if ($orden == "asc") {
        array_multisort($fechas, SORT_ASC, $proyectos);
    } else {
        array_multisort($fechas, SORT_DESC, $proyectos);

    }

    return $proyectos;
};

function compUsuario($usuarios, $usuario, $contraseña) {
    $login = false;
    $errrorEmail = "";
    $errorContraseña = "";
    foreach ($usuarios as $usu) {
        if ($usu["usuario"]==$usuario && $usu["contraseña"]==$contraseña) {
            $login = true;
            break;
        } elseif ($usu["usuario"]==$usuario && $usu["contraseña"]!=$contraseña) {
            $errorContraseña = "Contraseña Incorrecta";
            break;
        } else {
            $errrorEmail = "El email no existe";
            break;
        }
    }
    return [$login, $errrorEmail, $errorContraseña];
}

// A.1.b comprobaciones de login
function login($usuarios, $page) {
    if($_SERVER["REQUEST_METHOD"]=="POST" && $page == "login") {
        $valoresLogin = compUsuario($usuarios, $_POST["usuario"], $_POST["contraseña"]);
        //A.1.c control de posibles errores
        $login = $valoresLogin[0];
        $errorEmail= $valoresLogin[1];
        $errorContraseña = $valoresLogin[2];
        if ($login) {
            $_SESSION["email"] = $_POST["usuario"];
            setcookie("user_email", $_POST["usuario"]);
            header("Location: index.php?page=contacto_lista");
            exit;
        }
    };
    return [$errorEmail, $errorContraseña];
}

function crearProyecto($page, $proyectos) {
    if($_SERVER['REQUEST_METHOD'] == "POST" && $page == "producto") {
        $proyectoActualizado = false;
        foreach($proyectos as $indice => $proyecto) {
            if($_GET['id'] == $proyecto['clave']) {
                $proyectos[$indice]['clave'] = $_POST['clave'];
                $proyectos[$indice]['titulo'] = $_POST['titulo'];
                $proyectos[$indice]['fecha'] = $_POST['fecha'];
                $proyectos[$indice]['descripcion'] = $_POST['descripcion'];
                $proyectos[$indice]['imagen'] = $_POST['imagen'];
                $proyectos[$indice]['categoria'] = [];
                $proyectoActualizado = true;
                file_put_contents("json/datos1.json", json_encode($proyectos, JSON_PRETTY_PRINT));
                header("Location: index.php?page=confirma_contacto");
                exit;
            }

            if(!$proyectoActualizado) {
                $proyectos[sizeof($proyectos)] = [
                    "clave" => $_POST['clave'],
                    "titulo" => $_POST['titulo'],
                    "fecha" =>  $_POST['fecha'],
                    "descripcion" =>  $_POST['fecha'],
                    "imagen" =>  $_POST['imagen'],
                    "categoria" => [],
                ];
                file_put_contents("json/datos1.json", json_encode($proyectos, JSON_PRETTY_PRINT));
                header("Location: index.php?page=confirma_contacto");
                exit;
            }
        }
        }
    $proyectos = json_decode(file_get_contents("json/datos1.json"), true);
    return $proyectos;
}

// A.3.c función para la modificación de usuarios
function modificarUsuarios($page, $usuarios) {
    if($_SERVER['REQUEST_METHOD'] == "POST" && $page == "usuario") {
        foreach($usuarios as $i => $usuario) {
            if($usuario['usuario'] == $_COOKIE['user_email']) {
                $usuarios[$i]['usuario'] = $_POST['usuario'];
                $usuarios[$i]['nombre'] = $_POST['nombre'];
                $usuarios[$i]['dni'] = $_POST['dni'];
                $usuarios[$i]['password'] = $_POST['password'];
                setcookie("user_email", $_POST['usuario']);
                file_put_contents("json/usuarios.json", json_encode($usuarios, JSON_PRETTY_PRINT));
                header("Location: index.php?page=inicio");
                exit;
            }}
        }};
?>