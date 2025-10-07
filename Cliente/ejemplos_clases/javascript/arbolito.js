'use strict'
// let capas = parseInt(prompt("Como de alto quieres el arbolito."));

// function f(){
//     console.log("dentro de f");
    
// };

// function g(){
//     console.log("dentro de g");
//     f();
// }

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

// let valor = prompt("Dime el valor a enviar")
// let servidor = "http://servidor";

// let miURL=servidor+"?valor="+valor
// console.log(miURL);
// miURL=encodeURI(miURL);
// console.log(miURL);


// let nombre = prompt("Como te llamas?")

// function saludo(a) {
//     console.log("Hola "+a);
    
//     console.log(`Te llamas ${nombre}`);
    
// }

// saludo(nombre)

// function exponente(a,b) {
//     if (b==0)
//         return 1;
//     return a*exponente(a,b-1);
// }

// console.log(exponente(2,5));



function fibonacci(n) {
    if (n == 0 || n == 1) return n;
    return fibonacci(n-1)+fibonacci(n-2);
    
}
