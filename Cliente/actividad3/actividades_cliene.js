// Alberto Martínez Martínez

// Activcidad 1
'use strict'
// let cadena_str = "<h2>Hola Caracola</h2>"
// document.write(cadena_str);


//Actividad 2
let respuesta = prompt("¿Quieres ver un perro o un gato?")
if (respuesta == "perro") {
    document.write('<img src="perro.jpg">');
} else if (respuesta == "gato") {
    document.write('<img src="gato.jpg">');
} else {
    document.write("<h2>No elegiste correctamente</h2>");
}; 

// Ahora lo modificamos para que se seleccione con 1 o 2 

// let respuesta = parseInt(prompt("¿Quieres ver un perro (1) o un gato (2)?"))
// if (respuesta == "1") {
//     document.write('<img src="perro.jpg">');
// } else if (respuesta == "2") {
//     document.write('<img src="gato.jpg">');
// } else {
//     document.write("<h2>No elegiste correctamente (1 o 2)</h2>");
// };  

// Ahora tendremos una mayor selección de animales, por lo que usaremos un switch

// let respuesta = parseInt(prompt("¿Qué animal quieres ver? \n 1. Perro \n 2. Gato \n 3. Pez \n 4. Zorro \n 5. Elefante"));
// switch (respuesta) {
//     case 1:
//         document.write('<img src="perro.jpg">');
//         break;
//     case 2:
//         document.write('<img src="gato.jpg">');
//         break;
//     case 3:
//         document.write('<img src="pez.jpg">');
//         break;
//     case 4:
//         document.write('<img src="zorro.jpg">');
//         break;
//     case 5:
//         document.write('<img src="elefante.jpg">');
//         break;
//     default:
//         document.write("<h2>No elegiste correctamente (1, 2, 3, 4 o 5)</h2>");
//         break;
// }

// Actividad 3
// let filas = parseInt(prompt("Número de filas:"));
// let columnas = parseInt(prompt("Número de columnas:"));

// document.write("<table border='1'>");
// for (let i = 1; i <= filas; i++) {
//     document.write("<tr>");
//     for (let j = 1; j <= columnas; j++) {
//         document.write("<td>CELDA " + i + "," + j + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>"); 

// Ahora realizaremos la modificacion pertinente

// let filas = parseInt(prompt("Número de filas:"));
// let columnas = parseInt(prompt("Número de columnas:"));
// let pararfila = parseInt(prompt("¿En qué fila quieres parar"));
// let pararcolumna = parseInt(prompt("¿En qué columna quieres parar"));
// let parar = 0;

// document.write("<table border='1'>");
// for (let i = 1; i <= filas; i++) {
//     document.write("<tr>");
//     for (let j = 1; j <= columnas; j++) {
//         if (i === pararfila && j === pararcolumna) {
//             document.write("<td>CELDA " + i + "," + j + "</td>");
//             parar = parseInt(prompt("¿Quieres salir? 0.No 1.Si"));
//             if (parar == 1){
//                 break;
//             }
//         } else{
//             document.write("<td>CELDA " + i + "," + j + "</td>");
//         }
        
//     }
    
//     if (parar == 1){
//         break;
//     }
//     document.write("</tr>");
// }
// document.write("</table>");