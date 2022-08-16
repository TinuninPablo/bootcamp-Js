//Bucle for

for(let i=0; i<10 ;i++){
    console.log(i);
}

let lista = [1,4,5,6,7,33,58]
for( i=0; lista.length; i++) {
    console.log(lista[i]);
}

//estructura for...of
for(let valor of lista){
    console.log(valor);
}

//Estructura forEach

lista.forEach(valorForEach =>{
    console.log(valorForEach );
})

//Estructura forIn

let persona ={
    nombre:"Pablo",
    apellido:"Tinunin",
    edad:21,
    isDeveloper: false
}

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
