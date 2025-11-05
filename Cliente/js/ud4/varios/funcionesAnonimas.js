let a = function() {
    console.log("Hola");
}

let b=a

let f=(a,b)=>{
    return a+b
}
let f2=a=>{
    return a+b
}

let f3=function(a){
    if (a>=0){
        return a*a
    } else {
        return 0
    }
    
}

let f4=a=>a>0?a*a:0;

let f5=(a,b)=>a>b?-1:b>a?1:0

console.log(f3(5));
console.log(f5(5,1));
console.log(f5(5,10));
console.log(f5(5,5));

