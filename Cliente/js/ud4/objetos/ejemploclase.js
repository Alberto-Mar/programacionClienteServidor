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

    set fahrenheit(tf){
        this.kelvin=(tf-32)*5/9+273.15;
    }

    get fahrenheit(){
        return (this.kelvin-273.15)*9/5+32;
    }

}

let temp = new Temperatura(81);
temp.fahrenheit=82;
console.log(temp.kelvin);
console.log(temp.celsius);
temp.celsius=100;
console.log(temp.fahrenheit);


