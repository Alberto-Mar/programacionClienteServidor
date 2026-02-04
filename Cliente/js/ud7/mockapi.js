'use strict'

const URL="https://696e5428d7bacd2dd71678c0.mockapi.io/api/v1/user"

function crearUser(nombre, edad, mayor_edad){
    let datos = {
        nombre: nombre,
        edad: edad,
        mayor_edad: mayor_edad
    }

    let apiPost = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    }
    
    fetch(URL, apiPost)
    .then(res=> res.json())
    .then(data => console.log(data))
    .catch(err=> console.log(err))
}

// crearUser("Ana", 22, true)

function leerUser(id){
    let urlGet = URL+"/"+id
    fetch(urlGet)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

// leerUser("1")


function updateUser(id, nombre, edad, mayor_edad){
    let datos = {
        nombre: nombre,
        edad: edad,
        mayor_edad: mayor_edad
    }

    let apiPut = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    }

    let urlPut = URL + "/" + id
    fetch(urlPut, apiPut)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

// updateUser(1, "BBB", "1", false)

function deleteUser(id){
    let apiDelete = {
        method: "Delete"
    }

    let urlDelete = URL + "/" + id
    fetch(urlDelete, apiDelete)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

