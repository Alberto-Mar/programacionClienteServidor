'use strict'


let personajes = [];
let nomAPI = "https://api.disneyapi.dev/character";
let anterior = document.getElementById("anterior")
let siguiente = document.getElementById("siguiente");


function limpiarDiv(div) {
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function descargaPersonajes(urlAPI) {
    // seleccionamos el div contenedor
    let divDatos = document.getElementById("datos");
    // borramos el contenido
    limpiarDiv(divDatos);

    // llamamos a la API y traemos los personajes
    let conexion = new XMLHttpRequest();
    conexion.addEventListener("load", function() {
        if (conexion.status >= 200 && conexion.status < 400) {
            let datos = JSON.parse(conexion.response);
            // div por personaje
            datos.data.forEach((element) => {
                let nuevoDiv = document.createElement("div");
                nuevoDiv.classList.add("tarjeta");
                nuevoDiv.textContent = `${element.name}-${element._id}`;
                divDatos.appendChild(nuevoDiv);
            })
        } else {
            console.error("Error en la petición: " + conexion.statusText);
        }
        // configurar anterior y siguiente
        let datos = JSON.parse(conexion.response);
        anterior.setAttribute("data-url", datos.info.previousPage);
        siguiente.setAttribute("data-url", datos.info.nextPage);

    })
    conexion.open("GET", urlAPI, true);
    conexion.send();

}

function cambiaPagina(evento) {
    evento.preventDefault();
    let url = evento.target.getAttribute("data-url");
    if (url != null) {
        descargaPersonajes(url);
    }
    

    
}

anterior.addEventListener("click", cambiaPagina);
siguiente.addEventListener("click", cambiaPagina);

descargaPersonajes(nomAPI);