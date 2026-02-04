'use strict'
let url= "https://rickandmortyapi.com/api/character"
let select = document.getElementById("personajes")
fetch(url)
.then(res=>res.json())
.then(
    data=>{console.log(data.results)
    data.results.forEach(personaje => {
        let nuevoselect = document.createElement("option")
        nuevoselect.value = personaje.id
        nuevoselect.textContent = personaje.name
        select.appendChild(nuevoselect)
    })
})
.catch(error=>console.log(error))

let div_personaje = document.getElementById("personaje_content")
let form = document.getElementById("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    fetch(url + "/" + select.value)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        div_personaje.textContent= "";
        let nombre = document.createElement("h1")
        nombre.textContent = data.name
        div_personaje.appendChild(nombre)
        let imagen = document.createElement("img")
        imagen.src = data.image
        div_personaje.appendChild(imagen)
    })
    .catch(error=>console.log(error))
    

    

})