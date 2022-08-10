// array
const miLista = [1,"holas", true,undefined,null];
const miLista2 = new Array(2,"holas", true,undefined,null);
const miLista3 = new Array(3)
// miLista3[0]="soy el primer producto de esta lista"
miLista3[1]="soy el segundo producto de esta lista"
miLista3[2]="soy el tercer producto de esta lista"

const miLista4 = [miLista,miLista2,miLista3]

console.log(miLista)
console.log(miLista2)
console.log(miLista3)
console.log(miLista4)

//objetos
const movil ={
    //se pueden definir los atrubutos con "" o sin, generalmente se utilizan las "" cuando hay un simbolo, ejemplo: altura-tarjeta.
    "altura": 10,
    anchura:5,
    marca:"Samsung",
    isBlack:true,
    contactos:["maldo","pato","bochin","nosky","santi"],
    tarjeta:{
        marca:"sandisk",
        almacenamiento:"16"
    }
}
// Se puede definir o redefinir los atributos del objeto
movil.año =2019
movil.marca = "Motorola"

console.log(movil.altura)
console.log(movil.marca)
console.log(movil.anchura)
console.log(movil.tarjeta.marca)


//fechas
//Librerias de apoyo moment.js

const ahora = new Date()
console.log(ahora)

const dia = ahora.getDate()
const mes = ahora.getMonth()
const mesMasDos = ahora.getMonth() + 2
const año = ahora.getFullYear()
console.log(dia);
console.log(mes);
console.log(año);
console.log(dia,mes,año);

const fecha = new Date("march 25 2020")
console.log(fecha)