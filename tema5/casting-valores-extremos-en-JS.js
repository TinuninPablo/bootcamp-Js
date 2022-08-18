//Operado .valueOF() -Obtener valores numéricos a partir de literales//
let a=2;
let b= new Number(3); //esto se llama castear

console.log(a);
console.log(b);
console.log(a+b);

console.log(b.valueOf()); //esto internamente ya se hace, pero es una forma mas comoda de verlo

let str = new String("Hola soy un string");
console.log(str);//Nos los castea como un iterator,para esto usamos el typeof(),
                //es mas comodo visualmente para entender mejor el codigo

console.log(str.valueOf());

//NaN//
let n = Number('Adios');
console.log(n);
console.log(isNaN(n));

//Infinity//
let numerador =19;
let divisor =2;
let divisor2 =0;
let divisor3 =null;

console.log(numerador/divisor);
console.log(numerador/divisor2);
console.log(numerador/divisor3);

//Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat//
let numero1 ='5.89'
let numero2 = 17.2

console.log(typeof numero1);
console.log(numero1 + numero2);//Este es un error comun, nos esta concatenando los dos numeros porque uno es
                               //de tipo string,para esto usamos la propiedad Number.

//Number
console.log(typeof Number(numero1));
console.log(Number(numero1)+numero2);

//ParseInt()
let numero3 = 3.69
let numero4 = 5
console.log(parseInt(numero3));
console.log(parseInt(numero4));

//parseFloat()
console.log(parseFloat(numero3));
console.log(parseFloat(numero4));

//Números hexadecimales(base 16)//
let numHex ='0x3a5b7'
console.log(parseInt(numHex));

//Cómo obtener los valores máximo y mínimo que podemos obtener en JS//
let minPrecision = Number.EPSILON;
let minValorJS = Number.MIN_VALUE;
let maxValorJS = Number.MAX_VALUE;

console.log(minPrecision);
console.log(minValorJS);
console.log(maxValorJS);