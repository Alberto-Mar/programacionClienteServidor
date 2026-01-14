'use strict'


let personajes = [];
let nomAPI = "https://api.disneyapi.dev/character";
let anterior = document.getElementById("anterior")
let siguiente = document.getElementById("siguiente");


function limpiarDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function infoPersonaje(personaje){
    let conexion = new XMLHttpRequest();
    conexion.addEventListener("load", function () {
        if (conexion.status >= 200 && conexion.status < 400) {
            let datos = JSON.parse(conexion.response);
        } else {
            console.error("Error en la petición: " + conexion.statusText);
        }
    })
    conexion.open("GET", personaje.url, true);
    conexion.send();

    alert(`Nombre: ${personaje.name} ID: ${personaje._id}`);
}

function descargaPersonajes(urlAPI) {
    // seleccionamos el div contenedor
    let divDatos = document.getElementById("datos");
    // borramos el contenido
    limpiarDiv(divDatos);

    // llamamos a la API y traemos los personajes
    let conexion = new XMLHttpRequest();
    conexion.addEventListener("load", function () {
        if (conexion.status >= 200 && conexion.status < 400) {
            let datos = JSON.parse(conexion.response);

            // div por personaje
            datos.data.forEach((element) => {
                let nuevoDiv = document.createElement("div");
                nuevoDiv.classList.add("tarjeta");
                nuevoDiv.textContent = `${element.name}-${element._id}`;
                nuevoDiv.addEventListener("click", function () {
                    infoPersonaje(element);
                });
                divDatos.appendChild(nuevoDiv);
                
            });

            // configurar anterior y siguiente
            console.log(datos);
            
            anterior.setAttribute("data-url", datos.info.previousPage);
            siguiente.setAttribute("data-url", datos.info.nextPage);

            anterior.style.visibility = datos.info.previousPage ? "visible" : "hidden";
            siguiente.style.visibility = datos.info.nextPage ? "visible" : "hidden";

            anterior.addEventListener("click", cambiaPagina);
            anterior.addEventListener("click", paginaMenos);
            siguiente.addEventListener("click", cambiaPagina);
            siguiente.addEventListener("click", paginaMas);

        } else {
            console.error("Error en la petición: " + conexion.statusText);
        }  
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

let paginaActual = parseInt((document.getElementById("texto").textContent).split(" ")[1])
// refinar
function paginaMenos() {
    paginaActual--;
    document.getElementById("texto").textContent = "Pagina " + paginaActual;
}
function paginaMas() {
    paginaActual++;
    document.getElementById("texto").textContent = "Pagina " + paginaActual;
}



descargaPersonajes(nomAPI);