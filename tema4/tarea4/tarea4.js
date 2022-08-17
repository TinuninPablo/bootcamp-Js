//Una cadena de texto con tu Nombre y otra cadena de texto con tu Apellido
let nombre ="             Pablo";
let apellido="Tinunin        ";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre.concat(" ", apellido);
console.log(`El nombre y apellido de este estudiante es: ${estudiante}` );

console.log("-----------------------------------------------------------------------------------------------");

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase().trimStart();
console.log(`El nombre y apellido de este estudiante escrito todo con mayusculas es: ${estudianteMayus}`);

console.log("-----------------------------------------------------------------------------------------------");

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase().trimStart();
console.log(`El nombre y apellido de este estudiante escrito todo con minusculas es: ${estudianteMinus}`);

console.log("-----------------------------------------------------------------------------------------------");

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudianteLength = estudiante.length;
console.log(`La cantidad de letras que contiene la variable "estudiante" contando los espacios es: ${estudianteLength}`);

console.log("-----------------------------------------------------------------------------------------------");

//Una variable que contenga la primera letra del Nombre
let firstLetterName = nombre.trimStart().charAt(0)//Utilizo trimStart() para borrar los espacios del principio
console.log(`La primer letra del nombre es: ${firstLetterName}`);
console.log(`Tambien puedo traer la primer letra del nombre de esta forma, y es: ${nombre.trimStart()[0]}`);

console.log("-----------------------------------------------------------------------------------------------");

//Otra variable que contenga la última letra del Apellido
let firstLetterLastname = apellido.charAt(0);
console.log(`La primer letra del apellido es: ${firstLetterLastname}`);
console.log(`Tambien puedo traer la primer letra del apellido de esta forma, y es: ${apellido[0]}`);

console.log("-----------------------------------------------------------------------------------------------");

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let deleteSpaces = estudiante.trim().length;
console.log(`La cantidad de letras que contiene la variable "estudiante" sin los espacios es: ${deleteSpaces}`);

console.log("-----------------------------------------------------------------------------------------------");

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let exist = estudiante.includes(nombre)
console.log(`¿La variable "nombre" existe dentro de la variable "estudiante"?: ${exist}`);