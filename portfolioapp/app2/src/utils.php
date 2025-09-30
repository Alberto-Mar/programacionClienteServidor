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
?>