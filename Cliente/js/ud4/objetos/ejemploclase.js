const Temperatura=class{
    constructor(temperatura=0){
        this.kelvin=temperatura;
    }

    set kelvin(tk){
        this.t=tk>0?tk:0;
    }

    get kelvin(){
        return this.t;
    }

    set celsius(tc){
        this.kelvin=tc+273.15;
    }

    get celsius(){
        return this.kelvin - 273.15;
    }

}

let temp = new Temperatura(81);
temp.kelvin=-16;
console.log(temp.kelvin);

