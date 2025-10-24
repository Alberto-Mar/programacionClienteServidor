<?
$proyectosPorPagina = 4;
$totalProyectos = count($proyectos);
$totalPaginas = ceil($totalProyectos/$proyectosPorPagina);
$proyectosMostrados = array_slice($proyectos, $from, $proyectosPorPagina)
?>
<div class="container mb-5">
    <div class="row">
        <div>
        <a href="index.php?page=proyectos&from=<?php print($from)?>&order=asc<?php $categ? print("&categ=" . $categ):"" ?>"><button>Orden de precio ascendente</button></a>
        <a href="index.php?page=proyectos&from=<?php print($from)?>&order=desc<?php $categ? print("&categ=" . $categ):"" ?>"><button>Orden de precio descendente</button></a>
        <a href="index.php?page=proyectos&from=<?php print($from)?>&orderFecha=asc<?php $categ? print("&categ=" . $categ):"" ?>"><button>Orden de fecha ascendente</button></a>
        <a href="index.php?page=proyectos&from=<?php print($from)?>&orderFecha=desc<?php $categ? print("&categ=" . $categ):"" ?>"><button>Orden de fecha descendente</button></a>
        </div>
    <?php foreach($proyectosMostrados as $proyecto):?>
        <div class="col-sm-3">
        <a href="index.php?page=producto&id=<?php print($proyecto["clave"])?>">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="<?php print($proyecto["imagen"]? $proyecto["imagen"]: "static/images/default.jpeg" ) // UD3.2.d operador ternario en caso de no existir imagen?>" alt="Proyecto 1">
            <div class="card-body">
                <h5 class="card-title"><?php print($proyecto["titulo"])?></h5>
                <p class="card-text"><?php print($proyecto["descripcion"])?></p>
                <p class="card-text"><?php print($proyecto["dinero"])?>€</p>
                <p class="card-text"><?php print($proyecto["fecha"])?></p>
            </div>
        </div>
    </a>
    </div>
    <?php endforeach?>
    </div>
    <nav aria-label="Page navigation example">
    <ul class="pagination">
    <li class="page-item"><a class="page-link <?php ($from) <= 0 ? print("disabled"):"" ?> " href="index.php?page=proyectos&from=<?php print($from-$proyectosPorPagina); $order? print("&order=" . $order): ""; $orderFecha? print("&orderFecha=" . $orderFecha): ""; print("&categ=" . $categ . "&delete=false")?>">ANTERIOR</a></li>
    <?php for($i=1; $i <= $totalPaginas; $i++):?>
    <li class="page-item"><a class="page-link" href="<?php print("index.php?page=proyectos&from=".(($i-1)*$proyectosPorPagina)); $order? print("&order=" . $order): ""; $orderFecha? print("&orderFecha=" . $orderFecha): ""; print("&categ=" . $categ . "&delete=false") ?>"><?php print($i)?></a></li>
    <?php endfor ?>
    <li class="page-item"><a class="page-link <?php ($from+$proyectosPorPagina) >= $totalProyectos? print("disabled"):"" ?>" href="index.php?page=proyectos&from=<?php print($from+$proyectosPorPagina); $order? print("&order=" . $order): ""; $orderFecha? print("&orderFecha=" . $orderFecha): ""; print("&categ=" . $categ . "&delete=false")?>">SIGUIENTE</a></li>  
    </ul>
</nav>
</div>
