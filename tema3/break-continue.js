//Casos muy específicos- break, continue
let lista =[1,2,3,4,5,6,7,8];
for(let i =0; lista.length; i++){
    if(lista[i]===3){
        continue;
    }

    console.log(lista[i]);

    if(lista[i]>5){
        break;
    }
}
// Con el continue hacemos excepcione, es decir en este ejemplo, quiero que me leas todos los números, 
// pero si ves el 3, no lo leas, seguí con los otros.

// Con el break cortamos con el bucle siempre y cuando cumplimos la condición, 
// en el caso de este ejemplo, si ”i” es mayor a 5, corta el bucle, por lo que cuando llegue a 6, debería cortar.


