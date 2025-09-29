'use strict'
let capas = parseInt(prompt("Como de alto quieres el arbolito."));

function f(){
    console.log("dentro de f");
    
};

function g(){
    console.log("dentro de g");
    f();
}

// for (let i = 0; i<=capas ;i++) {
//     let cadena="";

//     for (let j=(capas-i); j>=0; j--){
//         cadena += " ";
        
//     }
//     for(let j=0;j<=i;j++){
//     cadena += "* "
//     }
//     console.log(cadena);
    
//};
f();
console.log("hola");
g();
f();