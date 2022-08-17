//Métodos de cadenas de texto(parte 2)

let input = 'Escorpio'
let db = "escorpio"
console.log(input===db)

//toUpperCase()pasa todo a mayusculas
console.log(input.toUpperCase())
console.log(db.toUpperCase())
console.log(input.toUpperCase()===db.toUpperCase())

//toLoweCase()pasa todo a minusculas
console.log(input.toLowerCase())
console.log(db.toLowerCase())
console.log(input.toLowerCase()===db.toLowerCase())


//Formas de concatenar dos cadenas de caracteres

let str1 = "Hola soy la primer cadena"
let str2 = " y yo soy la segunda cadena"

concatStr = str1.concat(str2,".Yo soy un texto agregado");
console.log(concatStr);

console.log(str1+""+str2);

console.log(`${str1}${str2}`);


//Eliminar espacios al inicio y al final

let str3="    Hola soy un string con espacios al final.     "
console.log(str3.length);
//trim()
console.log(str3.trim().length)
//trimStart()
console.log(str3.trimStart().length)
//trimEnd()
console.log(str3.trimEnd().length)


//Obtener el carácter que hay en cierta posición

let str4 ="Hola soy el string número 4"//esto es equivalente a =>["H","o","l","a"," ", "s"......]

console.log(str4.charAt(5))
console.log(str4[5])

//Obtener la posición de una palabra dentro de una cadena de caracteres

let str5 = "Hola soy Pablo y me gusta el futbol. Mi nombre es Pablo y mi apellido Tinunin"

console.log(str5.indexOf("Pablo"))
console.log(str5.lastIndexOf("Pablo"));
