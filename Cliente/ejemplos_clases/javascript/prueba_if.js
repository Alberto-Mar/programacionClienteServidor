'use strict'
let respuesta = parseInt(prompt("DIME ALGO"));

/*if (respuesta < 1 || respuesta > 7) {
    console.log("No es un día de la semana.");
} 
else if (respuesta == 1) {
    console.log("Es Lunes.");

}
else if (respuesta == 2) {
    console.log("Es Martes.");

}
else if (respuesta == 3) {
    console.log("Es Miércoles.");

}
else if (respuesta == 4) {
    console.log("Es Jueves.");

}
else if (respuesta == 5) {
    console.log("Es Viernes.");

}
else if (respuesta == 6) {
    console.log("Es Sábado.");

}
else if (respuesta == 7) {
    console.log("Es Domingo.");

}
else { 
    console.log("Es cualquier otra cosa.");

}*/

switch(respuesta) {
    case 1:
        console.log("Es Lunes.");
        break;
    case 2:
        console.log("Es Martes.");
        break;
    case 3:
        console.log("Es Miércoles.");
        break;
    case 4:
        console.log("Es Jueves.");
        break;
    case 5:
        console.log("Es Viernes.");
        break;
    case 6:
        console.log("Es Sábado.");
        break;
    case 7:
        console.log("Es Domingo.");
        break;
    default:
        console.log("Es cualquier otra cosa.");
}
