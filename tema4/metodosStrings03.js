//Métodos de cadenas de texto(parte 3)
//https://regexr.com => en esta pagina podemos aprender a utilizar las expresiones regulares

let textoLargo = "El personaje de su cuento nació cuando Bradbury tenía 12 años y su circo visitó su pueblo. Un gigante cubierto de tatuajes despertó su imaginación. Apenas lo vio quedó impactado por ese cuerpo donde convivían personas, paisajes y animales."

console.log(textoLargo.match(/su/g))

//includes¿existe esa palabra dentro del texto?
console.log(textoLargo.includes("tatuajes"));
console.log(textoLargo.includes("remera"));

//Saber si un texto empieza con una palabra
console.log(textoLargo.startsWith("El personaje "));
console.log(textoLargo.startsWith("El duende "));

//Saber si un texto termina con otra palabra
console.log(textoLargo.endsWith("."));
console.log(textoLargo.endsWith("animales"));