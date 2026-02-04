'use strict';

const URL = "https://rickandmortyapi.com/api/character/1";
const URLemployee = 'https://dummy.restapiexample.com/api/v1/create';
const URLput = 'https://dummy.restapiexample.com/api/v1/update/1';
const URLdelete = 'https://dummy.restapiexample.com/api/v1/delete/1';

fetch(URL)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

const datoEmpleado = {
  employee_name: 'Alberto Prueba',
  employee_salary: '322220',
  employee_age: '21',
  profile_image: ""
};

const opcionesPost = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(datoEmpleado)
};

fetch(URLemployee, opcionesPost)
  .then(res => res.json())
  .then(data => console.log('POST:', data))
  .catch(err => console.error(err));


const empleadoActualizado = {
  employee_name: 'Alberto Actualizado',
  employee_salary: '500000',
  employee_age: '22'
};

const opcionesPut = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(empleadoActualizado)
};

fetch(URLput, opcionesPut)
  .then(res => res.json())
  .then(data => console.log('PUT:', data))
  .catch(err => console.error(err));


const opcionesDelete = {
  method: 'DELETE'
};

fetch(URLdelete, opcionesDelete)
  .then(res => res.json())
  .then(data => console.log('DELETE:', data))
  .catch(err => console.error(err));
