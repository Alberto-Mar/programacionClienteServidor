'use strict'

let boton = document.getElementById('input1')

// boton.setAttribute('value', 'Enviar Datos')

// let pulsar = function(){
//     // alert('Has pulsado el botón')
//     console.log("manejador1");
    
//     boton.setAttribute('value', 'Datos Enviados')
// }

// let pulsar2 = function(){
//     console.log("manejador2");
// }


// boton.addEventListener('click', pulsar);    
// boton.addEventListener('click', pulsar2);

// let div = document.getElementById('midiv')
// let cambiocolor = function(){
    // switch (div.style.backgroundColor){
    //     case 'red':
    //         div.style.backgroundColor = 'blue' 
    //         break;
    //     case 'blue':
    //         div.style.backgroundColor = 'green'
    //         break;
    //     case 'green':
    //         div.style.backgroundColor = 'red'
    //         break;
//     }
// }
let frase = "WeareCharlieKirk"
let anthem = [...frase]

// boton.addEventListener('click', cambiocolor)
let cont = 0
let creaDivs = function(){
    let div = document.createElement('div')
    div.innerHTML = anthem[cont]
    cont++
    div.className = 'midiv'
    div.addEventListener('dblclick', function(){
        alert('Has hecho doble click en el div ' + div.innerHTML)
    })
    document.getElementById('div1').appendChild(div)
}
boton.addEventListener('click', creaDivs)



let divGrande = document.getElementById('grande')
divGrande.addEventListener('click', function(e){
    console.log(e);
    
    console.log("Has pulsado en el div Cabesoun");
    
})