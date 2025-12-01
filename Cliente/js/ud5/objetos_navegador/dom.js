'use strict';
// let contenido = prompt('Introduce algo')
// elemento.textContent = contenido
// console.log(elemento);

// let elemento_clase_daw = document.getElementsByClassName('daw')

// console.log(elemento_clase_daw);


// [...elemento_clase_daw].forEach((div, i) => {
//     div.textContent = 'div ' + (i+1)
// });

// let elemento_tag_div = document.getElementsByTagName('div');

// [...elemento_tag_div].forEach((div) => {
//     div.textContent += ' div de alberto!'
// })


// let padre = document.getElementById('fuera');
// console.log(padre.children);
// console.log(padre.childNodes);
// let padre = document.getElementById('lista');
// let respuesta = "";
// while( (respuesta = prompt('Introduce un nombre (x para cancelar)')) != "x"){
//     let hijo = document.createElement('li');
//     hijo.textContent = respuesta;
//     let hijoDetras = null;
//     for (let hijoExistente of padre.children) {
//         if (hijoExistente.textContent > respuesta) {
//             hijoDetras = hijoExistente;
//             break;       
//         }
//     }
//     padre.insertBefore(hijo, hijoDetras);
// }

// let elementoBorrar = document.getElementsByClassName('daw')[1];
// console.log(elementoBorrar);
// let padre = document.getElementsByClassName('fuera');

// elementoBorrar.remove();

// let nuevaLista = document.getElementById('borrar');
// while (nuevaLista.firstChild){
//     nuevaLista.firstChild.remove();
// }

// for (let i=0; i<10; i++){
//     let temp = document.createElement("li");
//     temp.textContent = `Elemento ${i+1}`;
//     temp.id = `elemento_${i+1}`;
//     temp.style = "background-color: lightgray; margin: 5px;";
//     temp.setAttribute("meLoInvento", 15)
//     nuevaLista.appendChild(temp);
// }
// for (let i=0; i<20; i++) {
//     let temp = document.createElement("li");
//     temp.textContent = i;
//     temp.style.backgroundColor = "rgb(" + i*25 + ", 100, 100)"
//     nuevaLista.appendChild(temp);
// }

let inputs = document.querySelectorAll('input, textarea');

let opciones = ["DWEC", "DWES", "DAW", "DIW"];

opciones.forEach((item) => {
    let opcion = document.createElement('option');
    opcion.textContent = item;
    if (item === "DWES") {
        opcion.setAttribute('selected', 'true');
    }
    opcion.setAttribute('value', item);
    document.getElementById('select').appendChild(opcion);
});