// Alberto Martínez
'use strict'

// Array con todos los asientos disponibles
// Cada asiento tiene: id único, fila, número, precio y estado (libre/reservado/en reserva)
const asientos = [
 // Fila A
 { id: "A1", fila: "A", numero: 1, precio: 45, estado: "libre" },
 { id: "A2", fila: "A", numero: 2, precio: 45, estado: "libre" },
 { id: "A3", fila: "A", numero: 3, precio: 45, estado: "libre" },
 { id: "A4", fila: "A", numero: 4, precio: 45, estado: "libre" },
 { id: "A5", fila: "A", numero: 5, precio: 45, estado: "libre" },
 { id: "A6", fila: "A", numero: 6, precio: 45, estado: "libre" },
 { id: "A7", fila: "A", numero: 7, precio: 45, estado: "libre" },
 { id: "A8", fila: "A", numero: 8, precio: 45, estado: "libre" },
 { id: "A9", fila: "A", numero: 9, precio: 45, estado: "libre" },
 { id: "A10", fila: "A", numero: 10, precio: 45, estado: "libre" },
 // Fila B
 { id: "B1", fila: "B", numero: 1, precio: 35, estado: "libre" },
 { id: "B2", fila: "B", numero: 2, precio: 35, estado: "libre" },
 { id: "B3", fila: "B", numero: 3, precio: 35, estado: "libre" },
 { id: "B4", fila: "B", numero: 4, precio: 35, estado: "libre" },
 { id: "B5", fila: "B", numero: 5, precio: 35, estado: "libre" },
 { id: "B6", fila: "B", numero: 6, precio: 35, estado: "libre" },
 { id: "B7", fila: "B", numero: 7, precio: 35, estado: "libre" },
 { id: "B8", fila: "B", numero: 8, precio: 35, estado: "libre" },
 { id: "B9", fila: "B", numero: 9, precio: 35, estado: "libre" },
 { id: "B10", fila: "B", numero: 10, precio: 35, estado: "libre" },
 // Fila C
 { id: "C1", fila: "C", numero: 1, precio: 25, estado: "libre" },
 { id: "C2", fila: "C", numero: 2, precio: 25, estado: "libre" },
 { id: "C3", fila: "C", numero: 3, precio: 25, estado: "libre" },
 { id: "C4", fila: "C", numero: 4, precio: 25, estado: "libre" },
 { id: "C5", fila: "C", numero: 5, precio: 25, estado: "libre" },
 { id: "C6", fila: "C", numero: 6, precio: 25, estado: "libre" },
 { id: "C7", fila: "C", numero: 7, precio: 25, estado: "libre" },
 { id: "C8", fila: "C", numero: 8, precio: 25, estado: "libre" },
 { id: "C9", fila: "C", numero: 9, precio: 25, estado: "reservado" },
 { id: "C10", fila: "C", numero: 10, precio: 25, estado: "libre" }
];

// Obtenemos el contenedor principal donde se mostrarán los asientos
let principal = document.getElementById("asientos");
// Obtenemos el contenedor donde se listarán las reservas confirmadas
let divReservas = document.getElementById("reservas");

// Si no existe el div de reservas en el HTML, lo creamos dinámicamente
if (!divReservas){
    divReservas = document.createElement("div");
    divReservas.id = "reservas";
    document.body.appendChild(divReservas);
}

// Variable para almacenar el ID del temporizador (setInterval)
let temporizador;
// Tiempo en segundos que el usuario tiene para completar la reserva
let tiempoRestante = 30;

// Función que aplica el color del asiento según su estado
// Verde: libre | Rojo: reservado | Naranja: en reserva
let coloresAsientos = function(divAsiento, asiento){
    divAsiento.style.backgroundColor =
        asiento.estado === "libre" ? "green" :        // Disponible
        asiento.estado === "reservado" ? "red" : "orange";  // Reservado o en proceso
};

// Crea y muestra el formulario para que el usuario introduzca sus datos
let crearFormularioReserva = function(asiento, divAsiento){

    // Evitar múltiples formularios abiertos simultáneamente
    if (document.getElementById("formularioReserva")) return;

    // Creamos el contenedor principal del formulario
    let divFormulario = document.createElement("div");
    divFormulario.id = "formularioReserva";

    // Contador visual del tiempo restante
    let contador = document.createElement("p");
    contador.id = "contadorTiempo";
    contador.textContent = `Te quedan ${tiempoRestante} segundos para completar la reserva`;

    // Creamos el elemento form y un salto de línea reutilizable
    let formulario = document.createElement("form");
    let saltoLinea = document.createElement("br");

    // Creamos el label y el input para el nombre
    let labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre del titular: ";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";

    // Mensaje de ayuda que aparece al hacer focus en el campo
    let spanNombre = document.createElement("span");
    spanNombre.textContent = " Introduce tu nombre completo";
    spanNombre.style.display = "none";  // Oculto por defecto
    spanNombre.style.color = "red";

    // Span para mostrar errores de validación del nombre
    let errorNombre = document.createElement("span");
    errorNombre.style.display = "block";
    errorNombre.style.color = "red";

    // Añadimos todos los elementos del nombre al formulario
    labelNombre.appendChild(inputNombre);
    formulario.appendChild(labelNombre);
    formulario.appendChild(spanNombre);
    formulario.appendChild(saltoLinea.cloneNode());
    formulario.appendChild(errorNombre);
    formulario.appendChild(saltoLinea.cloneNode());

    // Eventos focus/blur para mostrar y ocultar la ayuda visual del nombre
    inputNombre.addEventListener("focus", () => spanNombre.style.display = "inline");
    inputNombre.addEventListener("blur", () => spanNombre.style.display = "none");

    // Creamos el label y el input para el DNI
    let labelDni = document.createElement("label");
    labelDni.textContent = "DNI del titular: ";

    let inputDni = document.createElement("input");
    inputDni.type = "text";

    // Mensaje de ayuda con el formato esperado del DNI
    let spanDni = document.createElement("span");
    spanDni.textContent = " Formato: 12345678A";
    spanDni.style.display = "none";  // Oculto por defecto
    spanDni.style.color = "red";

    // Span para mostrar errores de validación del DNI
    let errorDni = document.createElement("span");
    errorDni.style.display = "block";
    errorDni.style.color = "red";

    // Añadimos todos los elementos del DNI al formulario
    labelDni.appendChild(inputDni);
    formulario.appendChild(labelDni);
    formulario.appendChild(spanDni);
    formulario.appendChild(saltoLinea.cloneNode());
    formulario.appendChild(errorDni);
    formulario.appendChild(saltoLinea.cloneNode());

    // Eventos focus/blur para mostrar y ocultar la ayuda visual del DNI
    inputDni.addEventListener("focus", () => spanDni.style.display = "inline");
    inputDni.addEventListener("blur", () => spanDni.style.display = "none");
         
    // Creamos el botón para confirmar la reserva
    let botonReserva = document.createElement("button");
    botonReserva.textContent = "Reservar asiento";
    botonReserva.type = "button";  // Evitamos que haga submit del formulario

    // Tooltip que aparece al pasar el ratón sobre el botón
    let spanBoton = document.createElement("span");
    spanBoton.textContent = " Revisa los datos antes de confirmar";
    spanBoton.style.display = "none";  // Oculto por defecto
    spanBoton.style.backgroundColor = "red";
    spanBoton.style.color = "white";

    // Eventos mouseover/mouseout para mostrar y ocultar el tooltip del botón
    botonReserva.addEventListener("mouseover", () => spanBoton.style.display = "inline");
    botonReserva.addEventListener("mouseout", () => spanBoton.style.display = "none");

    // Evento click del botón: validación y confirmación de la reserva
    botonReserva.addEventListener("click", function(){
        // Validamos el formato del DNI con expresión regular (8 dígitos + 1 letra)
        let dniValido = /^[0-9]{8}[A-Za-z]$/.test(inputDni.value);

        // Limpiamos los mensajes de error previos
        errorNombre.textContent = "";
        errorDni.textContent = "";

        // Validamos todos los campos y mostramos errores si es necesario
        let valido = true;
        if (!inputNombre.value){
            errorNombre.textContent = " Debes introducir tu nombre";
            valido = false;
        }
        if (!dniValido){
            errorDni.textContent = " DNI no válido (ej: 12345678A)";
            valido = false;
        }
        if (!valido) return;  // Si hay errores, no continuamos

        // Paramos el temporizador porque la reserva se ha completado
        clearInterval(temporizador);
        // Cambiamos el estado del asiento a reservado
        asiento.estado = "reservado";
        // Actualizamos el color del asiento a rojo
        coloresAsientos(divAsiento, asiento);

        // Creamos una entrada en el listado de reservas con los datos
        let entrada = document.createElement("p");
        entrada.textContent = `Asiento ${asiento.id} | Precio ${asiento.precio}€ | Titular: ${inputNombre.value}`;
        if (divReservas) divReservas.appendChild(entrada);

        // Cerramos el formulario
        document.body.removeChild(divFormulario);
        // Reiniciamos el tiempo para futuras reservas
        tiempoRestante = 30;
    });

    // Añadimos el botón y su tooltip al formulario
    formulario.appendChild(botonReserva);
    formulario.appendChild(spanBoton);
    // Añadimos el contador y el formulario al div principal
    divFormulario.appendChild(contador);
    divFormulario.appendChild(formulario);
    // Mostramos el formulario en la página
    document.body.appendChild(divFormulario);

    // Temporizador de cuenta atrás (se ejecuta cada segundo)
    temporizador = setInterval(function(){
        tiempoRestante--;  // Decrementamos el tiempo
        // Actualizamos el texto del contador
        contador.textContent = `Te quedan ${tiempoRestante} segundos para completar la reserva`;

        // Si el tiempo se agota, cancelamos la reserva
        if (tiempoRestante <= 0){
            clearInterval(temporizador);  // Paramos el temporizador
            asiento.estado = "libre";  // Volvemos el asiento a disponible
            coloresAsientos(divAsiento, asiento);  // Lo pintamos de verde
            // Cerramos el formulario si aún existe
            if (document.getElementById("formularioReserva")){
                document.body.removeChild(divFormulario);
            }
            tiempoRestante = 30;  // Reiniciamos el tiempo
            alert("Tiempo agotado. Reserva cancelada.");
        }
    }, 1000);  // Se ejecuta cada 1000ms (1 segundo)
};

// Función que inicia el proceso de reserva cuando se hace click en un asiento
let reservaAsiento = function(asiento, divAsiento){
    // Restricción: solo se permite una reserva activa simultáneamente
    if (document.getElementById("formularioReserva")){
        alert("Solo puedes reservar un asiento a la vez");
        return;
    }

    // No permitir hacer click en asientos ya reservados
    if (asiento.estado === "reservado"){
        alert("El asiento ya está ocupado");
        return;
    }

    // Control adicional por si el asiento está en proceso
    if (asiento.estado === "en reserva"){
        alert("Ya tienes una reserva en proceso");
        return;
    }

    // Cambiamos el estado del asiento a "en reserva"
    asiento.estado = "en reserva";
    // Actualizamos el color del asiento a naranja
    coloresAsientos(divAsiento, asiento);
    // Reiniciamos el tiempo a 30 segundos
    tiempoRestante = 30;
    // Mostramos el formulario e iniciamos el temporizador
    crearFormularioReserva(asiento, divAsiento);
};

// Recorremos el array de asientos y creamos un elemento visual para cada uno
asientos.forEach(asiento => {
    // Creamos un div para cada asiento
    let divAsiento = document.createElement("div");
    divAsiento.classList.add("asiento");  // Añadimos la clase CSS

    // Aplicamos el color inicial según el estado del asiento
    coloresAsientos(divAsiento, asiento);

    // Añadimos el evento click para iniciar la reserva
    divAsiento.addEventListener("click", function(){
        reservaAsiento(asiento, divAsiento);
    });

    // Añadimos el asiento al contenedor principal
    principal.appendChild(divAsiento);
});