'use strict'
let array1 = ["a", "b", "c", "d", "a"]

for (let a in array1) {
    console.log(a);
}

for (let b of array1) {
    console.log(b);
}

function encontrar(a, b) {
    let s = []
    for (let x in b) {
        if (b[x] == a) {
            s.push(x)
            // s[s.length] = x;
        }
    }
    return s
}

console.log(encontrar("a", array1));
