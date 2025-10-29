'use strict'
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let b = [];
for(let k of a )
    b.push(k);

let c = a.map(k=>k)

console.log(b);
console.log(c);

let d = [...a];
console.log(d);

let [x,y,,z] = b;
console.log(x,y,z);
