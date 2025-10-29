const alumnos = [
    ['Nombre', 'Edad', 'Matemáticas', 'Historia', 'Inglés', 'Programación', 'Física'],
    ['Ana López', 19, 9, 4, 6, 10, 5],
    ['Luis Pérez', 28, 3, 7, 5, 4, 2],
    ['Marta García', 22, 10, 8, 9, 9, 7],
    ['Pedro Ruiz', 30, 2, 5, 3, 6, 4],
    ['Sofía Torres', 24, 10, 9, 10, 10, 9],
    ['Javier Díaz', 27, 4, 3, 6, 5, 5],
    ['Lucía Fernández', 18, 7, 10, 8, 6, 10],
    ['Carlos Romero', 25, 5, 2, 4, 3, 1],
    ['Laura Sánchez', 21, 8, 8, 7, 9, 6],
    ['Andrés Navarro', 29, 3, 4, 2, 5, 3],
    ['Elena Morales', 20, 9, 10, 9, 10, 9],
    ['David Gil', 26, 5, 6, 5, 7, 4],
    ['Patricia Vega', 23, 6, 7, 9, 8, 7],
    ['Adrián Cruz', 19, 2, 3, 4, 5, 3],
    ['Carmen Rivas', 28, 10, 9, 10, 10, 10],
    ['Raúl Herrera', 30, 4, 5, 6, 4, 2],
    ['Nuria Campos', 22, 9, 10, 8, 9, 8],
    ['Hugo Molina', 18, 5, 4, 5, 6, 5],
    ['Beatriz León', 24, 8, 9, 10, 9, 7],
    ['Tomás Blanco', 27, 3, 2, 4, 3, 3],
    ['Irene Soto', 20, 10, 8, 7, 10, 9]
];

// let a = [3, 21, 15, 61, 9, 54];
// a.forEach((a, b, c) => {
//     console.log("a vale " + a);
//     console.log("b vale " + b);
//     console.log("c vale " + c);
    
// });

// alumnos.forEach((alumno, indice) => {
//     if (indice == 0) return;
//     console.log(alumno[0] + " tiene " + alumno[1] + " años.");
// });

let i = parseInt(prompt("Asignatura: 1-Matemáticas, 2-Historia, 3-Inglés, 4-Programación, 5-Física"));
// let nuevoarray = alumnos.map(alumno=>alumno[0] +" "+ alumno[i+1]);
// nuevoarray.forEach((a, b) => b?console.log(a):"");

// let b = prompt("¿1-Aprobados o 2-Suspensos?");
// let aprobados = alumnos.filter(a => b?a[i+1]>=5:a[1+1]<5).map(a=>a[0] +" "+ a[1+i]).forEach(alumno => console.log(alumno));

// let a = [4, 21, 33, 15, 19];
// console.log(a.reduce((a, b)=> a+b, 0));

// [sumaNotas, numNotas] = alumnos.reduce(
//     ([suma, contador], alumno, indice)=>{
//     if (indice != 0){
//         suma+=alumno[i+1];
//         contador++;
//     }
//     return [suma, contador];
// }, [0, 0]
// );


// let c = alumnos.map(a => a[1+i])
// let d = c.reduce((a, b) => a + b, 0) / alumnos.length;
// console.log(c);


// let [[alumno, aprobadas, suspendidas]] 

let b = alumnos.map(a => {
    return `${a[0]} - aprobados: ${a.slice(2).reduce((totalaprobados, nota) => {
        if (nota >= 5) {
            totalaprobados++;
        }
        return totalaprobados;
    }, 0)} 
    suspensos: ${a.slice(2).reduce((totalsuspensos, nota) => {
        if (nota < 5) {
            totalsuspensos++;
        }
        return totalsuspensos;
    }, 0)}`;
});

console.log(b);


