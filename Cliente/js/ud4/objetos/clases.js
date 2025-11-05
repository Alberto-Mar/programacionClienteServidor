'use strict'

const Rectangulo=class {
    constructor(ancho=0, alto=0){
        this.ancho=ancho;
        this.alto=alto;
    }
}

let a = new Rectangulo(5, 10);

console.log(a.ancho);

class Cuadrado extends Rectangulo{
    constructor(lado){
        super(lado,lado);
    }

    get area(){
        return this.lado * this.lado;
    }

    set lado(x){
        this.ancho=x;
        this.alto=x;
    }

    get lado(){
        return this.ancho;
    }
}

a = new Cuadrado(4);
console.log(a.area+);  
