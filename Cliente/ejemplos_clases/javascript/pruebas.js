let a1 = "Hola";
let b1 = null;

let resultado = a1 ?? b1;
console.log(resultado);

let a2 = undefined;
let b2 = "Adios";

let resultado2 = a2 ?? b2;
console.log(resultado2);

let a3 = null;
let b3 = undefined;

let resultado3 = a3 ?? b3;
console.log(resultado3);

let var1 = null;
let var2 = undefined;
let var3 = "correcto";

let resultado4 = var1 ?? var2 ?? var3 ?? var4;
console.log(resultado4);
