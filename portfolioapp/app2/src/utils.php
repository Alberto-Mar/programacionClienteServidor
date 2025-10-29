<?php 
// UD3.2.f Función que ordena el array que le pasemos, recibe el atributo del array a ordenar, el campo por el cual ordenar dicho array y si se ordena de manera ascendente o descendente
function orderby($array, $metodo) {
    if ($metodo === "ascendente") {
        usort($array, function($a, $b){return $a['dinero']<=>$b['dinero'];});
    } else {
        usort($array, function($a, $b){return $b['dinero']<=>$a['dinero'];});
    }
    return $array;
}
// UD3.3.c Función que muestra los valores de las categorías relacionadas al producto que se le pase como atributo
function mostrarCategorias($proyecto, $categorias){
    foreach($proyecto["categoria"] as $categoriaProducto) {
        if (array_key_exists($categoriaProducto, $categorias)) {
            print($categorias[$categoriaProducto]."  ");
        };
    };
}

// UD3.5.a Función que devuelve el año actual.
function año(){
    return date("Y");
}


// UD3.5.b Función que sobreescribe el array $proyectos haciendo que el atributo fecha sea de tipo fecha
function x($proyectos){
    foreach ($proyectos as $proyecto){
        $proyecto["fecha"] = DateTime::createFromFormat('d/m/Y', $proyecto["fecha"]);
        $proyecto["fecha"] = strtotime($proyecto["fecha"]);
    }
}



function filtrarCategoria($proyectos) {
    if ($_GET["categoria"]) {
        $proyectosFiltrado = [];
        foreach ($proyectos as $proyecto) {
            if (in_array($_GET['categoria'],$proyecto['categoria'])) {
                $proyectosFiltrado[] = $proyecto;
            };
        }
        return $proyectosFiltrado;
    }
}    
        

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function comprobarNombre() {
    if (empty($_POST["nombreApellidos"])) {
        $nameErr = "Por favor, introduzca nombre y apellidos";
        return $nameErr;
    } else {
        test_input($_POST["nombreApellidos"]);;
     }
}
?>
