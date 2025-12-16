'use strict';

let ftext = document.getElementById('nombre');
let alerta = document.getElementById('alerta');
ftext.addEventListener('change', function(){
    let noNum = /\d/;
    if (noNum.test(ftext.value)){
        alerta.textContent = 'El nombre no puede contener números';
        ftext.value = '';
    } else {
        alerta.textContent = '';
    }
        
});

let fselect = document.getElementById('pregunta');
fselect.addEventListener('mouseenter', function(){
    let nuevoDiv = document.getElementById('alerta1')
    if (nuevoDiv){
        nuevoDiv.textContent = 'Selecciona una opcion';
    } else {
        let nuevoDiv = document.createElement('div');
        nuevoDiv.id = 'alerta1';
        nuevoDiv.textContent = 'Selecciona una opcion';
        document.getElementById('formulario').appendChild(nuevoDiv);
    }
    
})
fselect.addEventListener('mouseleave', function(){
    document.getElementById('alerta1').textContent = '';
})
