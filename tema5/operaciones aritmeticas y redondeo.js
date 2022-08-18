//Principales operaciones aritméticas//
let a= 3.5;
let b= 4.8;

//suma(+)
console.log(a+b);
//resta
console.log(a-b);
//multiplicación
console.log(a*b);
//división
console.log(a/b);


//Representación de los números en cadenas de texto//
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);


//Redondeo en números decimales//
let c= 3.3
let d= c*3;

console.log(d);
console.log(typeof d);

//.toFixed()- Limita el numero de decimales
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e=1563.16325456;
let f=315463123;

console.log(e.toFixed(3));
console.log(f.toFixed(2));

//.toPrecision(x)- Limita el número de cifras significativas
console.log(e.toPrecision(6));
console.log(e.toPrecision(5));
console.log(f.toPrecision(4));
console.log(typeof f.toPrecision(4));