//Comparaciones

//IGUALDAD
if(5 == 5){
    console.log("5 es igual a 5");
}
if(5 === 5){
    console.log("5 es muy igual a 5");
}

//diferencias
// == solo compara el valor
//=== compara el valor y el tipo

//Ejemplo 1
const a = 10;
console.log(typeof a);
const b = 10;
console.log(typeof b);

if(a==b){
    console.log("a es igual a b -pero debil");
}

if(a===b){
    console.log("a es igual a b -pero fuerte");
}

//Ejemplo 2
const c = 10;
console.log(typeof c);
const d = "10";
console.log(typeof d);

if(c==d){
    console.log("a es igual a b -pero debil");
}

// no me lo toma porque unos es number y el otro string, es decir, el valor es igual pero el tipo no, por lo tanto es false
if(c===d){
    console.log("a es igual a b -pero fuerte");
}else{
    console.log("Son dos tipos diferentes,no son iguales");
}


//DESIGUALDADES
//Ejemplo 1
const e = 5;
console.log(typeof e);
const f = 15;
console.log(typeof f);

if(e != f){
    console.log("e es diferente a f -pero debil");
}
if(e !== f){
    console.log("e es diferente a f -pero fuerte");
}

//Ejemplo 2
const g = 4;
console.log(typeof g);
const h = "4";
console.log(typeof h);

//Este no se ejecuta porque los numeros son iguales
if(g != h){
    console.log("e es diferente a f -pero debil");
}
//Este si se ejecuta porque si bien los numeros son iguales, los tipos son diferentes(uno es number y el otro string)
if(g !== h){
    console.log("e es diferente a f -pero fuerte");
}

//COMPARACION MAYOR QUE Y MENOR QUE 

const max = 10;
const min = 3;

if(max > min){
    console.log("max es mayor que el min");
};
if(max >= min){
    console.log("max es mayor o igual que el min");
};
if(min < max){
    console.log("min es menor que el max");
};
if(min <= max){
    console.log("min es menor o igual que el max");
};
if(100 <= max){
    console.log("min es menor o igual que el max");
}else{
    console.log("100 es mayor al max");
};

