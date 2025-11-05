'use strict'

//Esta variable mantendrá mi array ordenado
let arrayOrdenado =[];
let salir=false; //Solo para salir del bucle

/**
 * Inserta de forma ordenada en un array de enteros.
 * @param {valor} valor - El valor a insertar.
 * @param {Array} array - El array en el que insertar, que debe estar ordenado.
 * @returns {Array} El nuevo array ordenado con el valor en su posición.
 */
function insertarOrdenado(valor, array){
    let temp=[]; //Array temporal donde haré la inserción
    let insertado=false; //Para comprobar si se hace la inserción
   
    for(let item of array){ //Se recorre el array original
        //Se comprueba si se ha llegado a los valores mayores del valor
        //y por tanto, es en esa posición donde se ha de insertar
        if (!insertado && item>=valor){
            insertado=true; //Cambiamos el estado para no insertar dos veces
            temp.push(valor);//Metemos el valor en su posición
        }
        //
        temp.push(item);//Vamos introduciendo los elementos en el array
    }
    //Puede ocurrir que hayamos recorrido todo el array y no se haya insertado
    //el nuevo valor, por lo que hay que insertarlo
    if (!insertado)
        temp.push(valor);
    //Devolvemos el nuevo array
   
    return temp;
}

do{
    let a=prompt("Dame un número (x para salir):");
    if (a=="x"){
        salir=true;
    }
    a=parseInt(a);
    if (!isNaN(a)){
        arrayOrdenado=insertarOrdenado(a,arrayOrdenado)
    }
    console.log(arrayOrdenado);
   
}while(!salir);

/**
 * Inserta de forma ordenada en un array de enteros.
 * @param {valor} valor - El valor a insertar.
 * @param {Array} array - El array en el que insertar, que debe estar ordenado.
 * @returns {Array} El nuevo array ordenado con el valor en su posición.
 */
function insertarOrdenado2(valor, array){
    let temp=[]; //Array temporal donde haré la inserción
    let insertado=0; //Para comprobar si se hace la inserción

    for (let i=0;i<array.length;i++){
        if (insertado==0 && array[i]>=valor){
            insertado=1;
            temp[i]=valor;
        }
        temp[i+insertado]=array[i]
    }
    if (insertado==0)
        temp.push(valor);

    return temp;
}