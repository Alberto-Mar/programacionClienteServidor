// Alberto Martínez
'use strict'
// Tarea 1 Al pulsar en el div con el id "tarea1" aparecerá una alerta que diga "Pulsaste sobre el div"
let tarea1 = document.getElementById("tarea1");
tarea1.addEventListener("click", function(){
    alert("Pulsaste sobre el div");
})

// Tarea 2 Necesitaremos capturar dos enventos, cuando el ratón entra y cuando sale del div. Según el evento cambiaremos el color de fondo del div con id "efecto"
let tarea2 = document.getElementById("tarea2");
let efecto = document.getElementById("efecto");
tarea2.addEventListener("mouseenter", function(){
    efecto.style.backgroundColor = "green";
})
tarea2.addEventListener("mouseleave", function(){
    efecto.style.backgroundColor = "red";
})

// Tarea 3 Personalmente prefiero tener controlados cada unod de los elementos para despues jugar con ellos, pero lo hago de las dos maneras para practicar el seleccionarlos sobre la marcha
// Suscribimos el botó al evento click para que, al pulsarlo, calcule la suma de los dos valores numéricos y los muestre en el campo de sólo lectura
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let boton1 = document.getElementById("boton1");
let resultado = document.getElementById("resultado");
boton1.addEventListener("click", function() {
    resultado.value = parseFloat(num1.value?num1.value:0) + parseFloat(num2.value?num2.value:0);
});

// Haciendo lo mismo pero seleccionando los elementos sobre la marcha
// document.getElementById("boton1").addEventListener("click", function(){
//     document.getElementById("resultado").value = parseFloat(document.getElementById("num1").value?document.getElementById("num1").value:0) + parseFloat(document.getElementById("num2").value?document.getElementById("num2").value:0);
// })

// Tarea 4 Generamos un damero a partir de un imput entre 4 y 8
let tablero = document.getElementById("tablero");
let crearTablero = document.getElementById("crearTablero");
crearTablero.addEventListener("click", function(){
    let tamaño = parseInt(document.getElementById("tamañoTablero").value);
    // Comprobamos que el valor introducido es válido, de no ser así mostramos una alerta y salimos de la función
    if (isNaN(parseInt(tamaño)) || parseInt(tamaño) < 4 || parseInt(tamaño) > 8) {
        alert("El tamaño del tablero debe ser un número entre 4 y 8");
        return;
    } 

    // Limpiamos el tablero antes de generarlo
    tablero.innerHTML = "";
    // Empezamos a generar fila a fila
    for(let i = 0; i < tamaño; i++){
        let fila = document.createElement("div");
        fila.className = "fila";
        // Generamos celda a celda, las añadimos todas a la clase celda
        for(let j = 0; j < tamaño; j++){
            let celda = document.createElement("div");
            celda.classList = "celda";
            // Alternamos el color de las celdas, calculando si la suma de la fila y columna es par o impar
            if ((i + j) % 2 === 0) {
                celda.classList.add("blanco");
            } else {
                celda.classList.add("negro");
            }
            // Tarea 5 Al hacer click en una celda, mostrar una alerta con sus cordenadas
            celda.addEventListener("click", function(){
                alert(`Fila: ${i + 1}, Columna: ${j + 1}`);
            })
        
            fila.appendChild(celda);
        }
        tablero.appendChild(fila);
    }
});

// Tarea 6 validar email
let validarEmail = document.getElementById("validarEmail");
validarEmail.addEventListener("click", function(){
    // recuperamos el email introducido
    let email = document.getElementById("email").value;
    // regex que solo acepta el formato básico del mail
    let regex = /^\w+@\w+\.[a-zA-Z]+$/;
    if (regex.test(email)) {
        alert("El email es válido");
    } else {
        alert("El email no es válido");
    }
})

// Tarea 7 juego del botón
let tarea7 = document.getElementById("Tarea7");
let botonVacilon = document.getElementById("botonVacilon");
let contador = 0;
botonVacilon.addEventListener("mouseenter", function() {
    // Incrementamos el contador de intentos y actualizamos el texto del botón
    contador++;
    botonVacilon.textContent = `Pulsa aquí ,lo has intentado (${contador}) veces`;
    // Tamaño máximo permitido del div contenedor
    let maxX = tarea7.clientWidth;
    let maxY = tarea7.clientHeight;

    // Posición aleatoria dentro del rango
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // Nuevas coordenadas del botón
    botonVacilon.style.left = x + "px";
    botonVacilon.style.top = y + "px";
});

// Tarea 8 Buscador de animales incluyendo cadenas de texto
let input = document.getElementById("buscarAnimal");
let animales = document.getElementsByClassName("animal");
// Suscribimos el evento input para que se dispare cada vez que se escribe algo en el campo
input.addEventListener("input", function(){
    let comp = false;
    let filtro = input.value.toLowerCase();

    // Recorremos todos los animales para comprobar si coinciden con el filtro
    for (let animal of animales) {
        // Si el filtro está vacío, volvemos al color de fondo blanco
        if (filtro === "") {
            animal.style.backgroundColor = "white";
        }
        // Si el texto del animal incluye el filtro, lo marcamos en verde y cambiamos el valor de la alerta
        else if (animal.textContent.toLowerCase().includes(filtro)) {
            animal.style.backgroundColor = "green";
            comp = true;
        }
        // Si no coincide, lo marcamos en rojo
        else {
            animal.style.backgroundColor = "red";
        }
    }
    // Si hay filtro pero no se ha encontrado ningún animal, mostramos la alerta
    if (filtro && !comp) {
        alert("No se ha encontrado el animal");
    }
})      