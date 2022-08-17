//Strings(cadenas de caracteres)
let stringDbl = "Holas soy un texto con comillas dobles";
let stringSim='Hola soy un texto con comillas simples';

console.log(stringDbl);
console.log(stringSim);

let stringComillas = "El otro dia me dijo literalmene \"ve a sacar las basura\"";
let stringComillasSimp ='El otro dia me dijo literalmene "ve a sacar las basura"';
let stringComillasDbl ="El otro dia me dijo literalmene 've a sacar las basura'";

console.log(stringComillas);
console.log(stringComillasSimp);
console.log(stringComillasDbl);

//backticks (comillas invertidas)

let stringBackticks = `Hola esto es un string con backticks`

console.log(stringBackticks);

let nombre = "Pablo"
let saludo = `Hola, ${nombre} bienvenido`
let saludo2= `Hola, bienvenido a la pagina web de ${nombre}`

console.log(saludo);

//Plantillas HTML

let plantilla =`
<html>
<h1>Pagina web de ${nombre}</h1>
<p>${saludo2}</p>
</html>
`

