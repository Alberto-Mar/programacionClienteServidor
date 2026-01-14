'use strict'

const URL = "https://rickandmortyapi.com/api/character/1"

fetch(URL)
    .then(recibido=>recibido.json())
    .then(dato=>console.log(dato))
    .catch(error=>console.log(error))


const opcionPut = {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dato)
};

const URLemployee = 'https://dummy.restapiexample.com/api/v1/create'
const URL1employee = 'https://dummy.restapiexample.com/api/v1/employee/'

const datoEmpleado = {
   employee_age: '21',
    employee_name: 'Alberto Prueba',
    employee_salary: '322220',
    profile_image: "",
};

const opcionesPost = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dato),
};

fetch(URLemployee, opcionesPost)
    .then(recibido=>recibido.json())
    .then(dato=>console.log(dato))
    .catch(error=>console.log(error))