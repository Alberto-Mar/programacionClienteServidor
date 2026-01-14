'use strict'

function llamadaApi(url) {
    return new Promise((resolver, rechazar) => {
        let con = new XMLHttpRequest;
        con.onload = function() {
            if(con.status >= 200 && con.status < 400) {
                let respuesta = JSON.parse(this.response);
                resolver(respuesta);
            } else {
                rechazar("Error " + con.status + ": " + con.statusText)
            }
        }
        con.open("GET", url, true);
        con.send();
    });
}

function creaElemento(elemento, contenido){
    let elem = document.createElement(elemento);
    if (elemento != "img"){
        elem.textContent = contenido;
    }
    else {
        elem.src = contenido
    }
    document.body.appendChild(elem);
}

let pj = llamadaApi("https://rickandmortyapi.com/api/character/1");

pj.then(resultado => {
    console.log(resultado);
    creaElemento("h2", resultado.name);
    creaElemento("img", resultado.image)
    let episodios= resultado.episode.map((episodio,i)=>{
        if (i!=25){
            return llamadaApi(episodio);
        } else {
            return llamadaApi("jfjfjffjfj")
        }
        
    })
    return Promise.allSettled(episodios);
    })
    .then(episodios=>{
        episodios.forEach(epis=>console.log(epis))
        episodios.forEach(epis=>{
            if (epis.status==="fulfilled"){
                creaElemento("p", epis.value.id+ " " +epis.value.name)
            } else {
                creaElemento("p", epis.reason)
            }
        })
    })
    .catch(error => {
    console.error(error);
    });     