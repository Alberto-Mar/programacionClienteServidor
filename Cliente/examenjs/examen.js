'use strict'
//Pon el nombre en este comentario.
//Nombre: Alberto Martínez Martínez


// Array de menús disponibles en el servicio TakeAway
const menus = [
    { id: 1, nombre: "MenúBurger", precio: 9.5, tiempoPrepSeg: 8, categoria: "comida" },
    { id: 2, nombre: "MenúPizza", precio: 11, tiempoPrepSeg: 10, categoria: "comida" },
    { id: 3, nombre: "EnsaladaCésar", precio: 7.5, tiempoPrepSeg: 6, categoria: "comida" },
    { id: 4, nombre: "Café+Croissant", precio: 3.5, tiempoPrepSeg: 4, categoria: "desayuno" },
    { id: 5, nombre: "SushiBox", precio: 13, tiempoPrepSeg: 12, categoria: "comida" },
    { id: 6, nombre: "PastaBoloñesa", precio: 10.5, tiempoPrepSeg: 9, categoria: "comida" },
    { id: 7, nombre: "MenúInfantil", precio: 6.9, tiempoPrepSeg: 7, categoria: "comida" },
    { id: 8, nombre: "WrapDePollo", precio: 8.2, tiempoPrepSeg: 6, categoria: "comida" },
    { id: 9, nombre: "MenúVegano", precio: 9.9, tiempoPrepSeg: 9, categoria: "comida" },
    { id: 10, nombre: "HamburguesaDoble", precio: 12.5, tiempoPrepSeg: 11, categoria: "comida" },
    { id: 11, nombre: "MenúKebab", precio: 8.7, tiempoPrepSeg: 7, categoria: "comida" },
    { id: 12, nombre: "TacosMixtos", precio: 9.3, tiempoPrepSeg: 8, categoria: "comida" },
    { id: 13, nombre: "BurritoGrande", precio: 10.9, tiempoPrepSeg: 9, categoria: "comida" },
    { id: 14, nombre: "Ramen", precio: 11.8, tiempoPrepSeg: 10, categoria: "comida" },
    { id: 15, nombre: "PokéBowl", precio: 12.2, tiempoPrepSeg: 9, categoria: "comida" },
    { id: 16, nombre: "DesayunoClásico", precio: 4.5, tiempoPrepSeg: 5, categoria: "desayuno" },
    { id: 17, nombre: "Tostadas+Café", precio: 3.9, tiempoPrepSeg: 4, categoria: "desayuno" },
    { id: 18, nombre: "BocadilloDeJamón", precio: 5.8, tiempoPrepSeg: 5, categoria: "comida" },
    { id: 19, nombre: "MenúFitness", precio: 10.2, tiempoPrepSeg: 7, categoria: "comida" },
    { id: 20, nombre: "MenúEspecialFindeSemana", precio: 14.5, tiempoPrepSeg: 12, categoria: "comida" }
];

// Array de pedidos realizados durante el día 
const pedidos = [
    { idPedido: 101, idMenu: 1, unidades: 2, estado: "pendiente", formaPago: "tarjeta" },
    { idPedido: 102, idMenu: 3, unidades: 1, estado: "entregado", formaPago: "efectivo" },
    { idPedido: 103, idMenu: 2, unidades: 3, estado: "pendiente", formaPago: "bizum" },
    { idPedido: 104, idMenu: 5, unidades: 1, estado: "pendiente", formaPago: "tarjeta" },
    { idPedido: 105, idMenu: 4, unidades: 4, estado: "entregado", formaPago: "efectivo" },
    { idPedido: 106, idMenu: 10, unidades: 2, estado: "pendiente", formaPago: "tarjeta" },
    { idPedido: 107, idMenu: 8, unidades: 1, estado: "entregado", formaPago: "bizum" },
    { idPedido: 108, idMenu: 15, unidades: 2, estado: "pendiente", formaPago: "efectivo" },
    { idPedido: 109, idMenu: 12, unidades: 3, estado: "pendiente", formaPago: "tarjeta" },
    { idPedido: 110, idMenu: 7, unidades: 1, estado: "entregado", formaPago: "bizum" },
    { idPedido: 111, idMenu: 19, unidades: 2, estado: "pendiente", formaPago: "efectivo" },
    { idPedido: 112, idMenu: 18, unidades: 1, estado: "pendiente", formaPago: "tarjeta" }
];


menus.forEach(menu => {
    document.writeln("<div class='menu-item'>");
    document.writeln("<h2>" + menu.nombre + "</h2>");
    document.writeln("<p>Precio: " + menu.precio + "€</p>");
    document.writeln("<p>Tiempo de preparación: " + menu.tiempoPrepSeg + " segundos</p>");
    document.writeln("<p>Categoria:" + menu.categoria + "</p>")
});

let precioMaximo = parseInt(prompt("Introduce el precio máximo para filtrar los menús:"));
menus.forEach(menu => {
    if (menu.precio <= precioMaximo) {
        console.log("Menu=" + menu.nombre + "Precio=" + menu.precio);
    }
})


function calcularRecaudacion(){
    let recaudacion = {
        total: 0,
        tarjeta: 0,
        efectivo: 0,
        bizum: 0
    };
    pedidos.forEach(pedido => {
        let menu = menus.find(menu => menu.id === pedido.idMenu);
        if (menu) {
            let importe = menu.precio * pedido.unidades;
            recaudacion.total += importe;
            pedido.formaPago=="efectivo"?(recaudacion.efectivo += importe):(pedido.formaPago=="tarjeta"?(recaudacion.tarjeta += importe):(recaudacion.bizum += importe));
        } 
    });
    return recaudacion;    
};




let arrayTiempoPrep = pedidos.map(pedido => {
    let menu = menus.find(menu => menu.id === pedido.idMenu);
    if (menu){
        let tiempoTotalPedido = pedido.unidades*menu.tiempoPrepSeg;
        return [pedido.idPedido, menu.nombre, tiempoTotalPedido];
    }
})

arrayTiempoPrep.sort((a,b) => b[2]-a[2]);
arrayTiempoPrep.forEach(pedido => {
    console.log("Pedido " + pedido[0] + " - " + pedido[1] + " - " + pedido[2] + " segundos");
})



let gestorTakeAway = {
    totalMenus: menus.length,
    totalPedidos: pedidos.length,

    getPedidosPendientes() {
        return pedidos.filter(pedido => pedido.estado == "pendiente"); 
    },

    getImportePedido(idPedido) {
        let pedido = pedidos.find(pedido => pedido.idPedido === idPedido);
        if (pedido) {
            let menu = menus.find(menu => menu.id === pedido.idMenu);
            if (menu) {
                return menu.precio * pedido.unidades;
            }
        }
        return "Pedido no encontrado";
    }
}


console.log(gestorTakeAway.getPedidosPendientes());
console.log(gestorTakeAway.getImportePedido(103));   
 


let pedidosPendientes = gestorTakeAway.getPedidosPendientes();
pedidosPendientes.forEach(pedido => {
    let menu = menus.find(menu => menu.id === pedido.idMenu);
    let totalPrep = (menu.tiempoPrepSeg * pedido.unidades)*1000;
    setTimeout(() => {
        pedido.estado = "entregado";
        console.log("Pedido "+ pedido.idPedido + " entregado (" + menu.nombre + " , " + pedido.unidades + " unidades, " + totalPrep + " segundos)");
    }, totalPrep);
});


console.log(gestorTakeAway);

