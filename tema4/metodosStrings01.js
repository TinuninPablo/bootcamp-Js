//Métodos más utilizados con cadenas de caracteres
//como obtener la longitud de un string
let str = "Hola soy un string"

console.log(str.length)

//Obtener partes de cadenas de caracteres
//slice(), substring(), substr()

//slice()
let sliceStr = str.slice(0,16)
console.log(sliceStr)

//substring()
let substringStr = str.substring(0,16)
console.log(substringStr)

//substr()
let substrStr = str.substr(5,10)
console.log(substrStr)


//Reemplazar parde del contenido de una cadena de texto

let cadena = "Hola mi nombre es Pablo";
console.log(cadena);

let reemplazoCadena = cadena.replace("Pablo","Emanuel");
console.log(reemplazoCadena);

let textoLargo = "El personaje de su cuento nació cuando Bradbury tenía 12 años y su circo visitó su pueblo. Un gigante cubierto de tatuajes despertó su imaginación. Apenas lo vio quedó impactado por ese cuerpo donde convivían personas, paisajes y animales."

console.log(textoLargo.replace("su","un")) 
console.log(textoLargo.replace(/su/g, 'un')) 

