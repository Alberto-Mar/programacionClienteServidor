'use strict'

let elemento = document.getElementById('prueba')

// let contenido = prompt('Introduce algo')
// elemento.textContent = contenido
console.log(elemento);

let elemento_clase_daw = document.getElementsByClassName('daw')

console.log(elemento_clase_daw);


[...elemento_clase_daw].forEach((div, i) => {
    div.textContent = 'div ' + (i+1)
});

// let elemento_tag_div = document.getElementsByTagName('div');

// [...elemento_tag_div].forEach((div) => {
//     div.textContent += ' div de alberto!'
// })


let padre = document.getElementById('fuera');
console.log(padre.children);
console.log(padre.childNodes);

