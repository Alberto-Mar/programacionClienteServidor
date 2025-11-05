'use strict'

let miObjeto= {
    campo1: "Alberto",
};

let miObjeto2= {};
miObjeto2.campo2="Alberto";

let nuevo=Object.create(miObjeto);

const constructorAlumnos=function (nombre, ciclo, curso){
    this.nombre=nombre;
    this.ciclo=ciclo;
    this.curso=curso;
}