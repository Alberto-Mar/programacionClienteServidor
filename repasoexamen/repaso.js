'use strict'
let url= "https://rickandmortyapi.com/api/character"
// let select = document.getElementById("personajes")
// fetch(url)
// .then(res=>res.json())
// .then(
//     data=>{
//     data.results.forEach(personaje => {
//         let nuevoselect = document.createElement("option")
//         nuevoselect.value = personaje.id
//         nuevoselect.textContent = personaje.name
//         select.appendChild(nuevoselect)
//     })
// })
// .catch(error=>console.log(error))

// let div_personaje = document.getElementById("personaje_content")
// let form = document.getElementById("form")
// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     fetch(url + "/" + select.value)
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//         div_personaje.textContent= "";
//         let nombre = document.createElement("h1")
//         nombre.textContent = data.name
//         div_personaje.appendChild(nombre)
//         let imagen = document.createElement("img")
//         imagen.src = data.image
//         div_personaje.appendChild(imagen)
//     })
//     .catch(error=>console.log(error))
// })

let select = document.getElementById("personajes")
let div_pj = document.getElementById("personaje_content")
let datos_fetch = [];
fetch(url)
 .then(res=>res.ok?res.json():Promise.reject({error:res.status,errorText:res.statusText}))
 .then(data=>{
    datos_fetch = data.results
    data.results.forEach((personaje, index)=>{
        let opcion = document.createElement("option")
        opcion.textContent = personaje.name
        opcion.value = index
        select.appendChild(opcion)
    })
    select.addEventListener("change", function(evento){
        div_pj.textContent = ""
        let nombre = document.createElement("h1")
        nombre.textContent = datos_fetch[evento.target.value].name
        div_pj.appendChild(nombre)
    })
 })
 .catch(err=>console.log(err)
 )

