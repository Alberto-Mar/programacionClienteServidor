'use strict'
// 1. Obtener el nombre de la ventana actual.
let nombreVentana = window.name;
console.log(nombreVentana);

// 1. Mostrar cuántos elementos hay en el historial de navegación.
let historial = window.history;
console.log(historial.length);

// 1. ¿Podemos recorrer y mostrar el historial?
console.log(history[0]) 
// No es posible acceder directamente a los elementos del historial por razones de seguridad.

// 1. ¿Es posible cambiar a un elemento anterior?
historial.back(); // Esto nos lleva a la página anterior en el historial de navegación.

// 2. Obtener la URL completa de la página actual.
// location.href devuelve la URL completa.
console.log(location.href);

// 2. Indicar servidor, ruta y protocolo.
console.log("Protocolo:", location.protocol);
console.log("Servidor:", location.host);
console.log("Ruta:", location.pathname);

// 2. ¿Cómo podemos recargar la página actual?
function recargarPagina() {
    location.reload();
}
// let recargar = prompt("¿Desea recargar la página?");
// recargar? recargarPagina() : null;


// 2. ¿Cómo podemos redirigir la página actual a otra página?
function redirigir() {
    location.href = "https://www.google.com";
}

// let redireccionar = prompt("¿Desea ser redirigido a Google?");
// redireccionar ? redirigir() : null;

// 3. Mostrar el "user agent" del navegador
console.log("Navegador:", navigator.userAgent);
// dependera del motor de busqueda que use el navegador


// 4. Crear cookies (se almacenan como cadenas "clave=valor")
document.cookie = "nomcurso=DAW; path=/";
document.cookie = "nomalumno=AlbertoMartinez; path=/";

// Mostrar todas las cookies en una sola cadena
console.log("Cookies:", document.cookie);

// 4. Para mostrarlas por separado, las dividimos
const cookies = document.cookie.split("; ");

cookies.forEach(cookie => {
    console.log("Cookie:", cookie);
});

// 4. Obtener imagenes por pantalla
let imagenes =[...document.images];

imagenes.forEach(imagen => {
    console.log(imagen.src);
});



// 5. Obtenemos la diferencia en milisegundos
let fecha1 = new Date("2021-10-05");
let fecha2 = new Date("2021-11-20");
let diferencia = fecha2 - fecha1;   
// Diferencia en milisegundos
// Convertimos a dias / 1000 ms * 60 s * 60 min * 24 h
let dias = diferencia / 86400000;

console.log("Días pasados entre las dos fechas:", dias);


// 6. Pedimos el tiempo al usuario en segundos
let tiempo = parseInt(prompt("Introduce cada cuántos segundos quieres ver un 'tic':"));
// Validamos que sea un número y mayor que 0
if (tiempo > 0) {
    let intervalo = tiempo * 1000;
    // Convertimos a milisegundos
    // Creamos el temporizador
    setInterval(() => {
        console.log("tic");
    }, intervalo);

} else {
    console.log("Debes introducir un valor numérico mayor que 0.");
}
