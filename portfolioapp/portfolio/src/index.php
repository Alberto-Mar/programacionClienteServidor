<?php 
include_once("pages/datos.php");
include_once("utils/utils.php");
include_once("config/config.php");
?>
<?php 
$page = isset($_GET['page'])? $_GET['page'] : "inicio";
$from = isset($_GET["from"])? $_GET["from"] : 0;
$order = isset($_GET["order"])? $_GET["order"] : "";
$id = isset($_GET["id"])? $_GET["id"] : ""; 
$categ = isset($_GET["categ"])? $_GET["categ"]: "";
$delete = isset($_GET["delete"])? $_GET["delete"] : false;
$orderFecha = isset($_GET["orderFecha"])? $_GET["orderFecha"] : "";

$proyectosFiltrados = filtrarCategorias($proyectos, $categ);
if ($proyectosFiltrados) {
    $proyectos = $proyectosFiltrados;

};

if ($order) {
    $proyectos = ordenPorPrecio($proyectos, $order);

} elseif ($orderFecha) {
    $proyectos = ordenPorFecha($proyectos, $orderFecha);
};

if ($delete) {
    array_pop($proyectos);
};

$errores = login($usuarios, $page);

crearProyecto($page,$proyectos);

modificarUsuarios($page, $usuarios);

?>
<?php include_once("templates/header.php")?>

<?php 
switch ($page) {
    case "inicio":
        include_once("pages/inicio.php");
        break;
    case "contacto":
        include_once("pages/contacto.php");
        break;
    case "producto": // A.2.b comprobacion si el user esta autenticado
        if($_COOKIE["user_email"]) {
            include_once("pages/crear_proyecto.php");
            break;
        } else {
            include_once("pages/producto.php");
            break;
        }
    case "proyectos":
        include_once("pages/proyectos.php");
        break;
    case "login":
        include_once("pages/login.php");
        break;
    case "administracion":
        include_once("pages/administracion.php");
        break;
    case "usuario":
        include("pages/usuario.php");
        break;
    case "contacto_lista":
        include_once("pages/contacto_lista.php");
        break;
    case "confirma_contacto":
        include_once("pages/confirma_contacto.php");
        break;
    default:
        print("<h1>Página no encontrada</h1>");
        break;
}
?>


<?php include_once("templates/footer.php")?>

    