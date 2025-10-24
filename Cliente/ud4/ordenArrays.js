'use strict'

// let alumnos = ["Nadia", "Jose Juan", "Alberto", "Laura", "David"]

// let enteros = [1, 9, 15, 36, 2, 1, 6, 19]


// function comparar(itema, itemb) {
//     if (itema>itemb){
//         return 1;
//     } else if (itemb>itema) {
//         return -1;
//     } else 
//     return 0;
// }
// console.log(enteros);
// enteros.sort((itema, itemb)=>{
//     return itema-itemb
// });
// enteros.sort((itema,itemb)=>itema-itemb);
// console.log(enteros);

let personas = [
    ["Alberto", 21],
    ["Mario", 35], 
    ["Juan", 38], 
    ["Miguel", 19]
];
personas.sort((p1,p2)=>p2[1]-p1[1])

let enteros = [
    [1,9,0,8],
    [7,2,1,6],
    [1,0,218,2],
    [10,1]
];
enteros.sort((e1,e2)=>{
    let temp1 = 0
    for (let i of e1){
        temp1 += i 
    };
    let temp2 = 0
    for (let j of e2){
        temp2 += j
    };
    return temp2-temp1
})
console.log(enteros);

