//labels

//ejemplo si labels

let unidades =0;
let decenas = 0;

while(true){
    while(true){
        console.log(`el numero actual es: ${decenas}${unidades}`);
        unidades++
        if(unidades ===10){
            unidades =0
            break
        }
    }
    decenas++
    if(decenas===2){
        console.log(`el numero actual es: ${decenas}${unidades}`);
        break
    }
}

//ejemplo con labels
bucleDecenas:while(true){
    bucleUnidades:while(true){
        console.log(`el numero actual es: ${decenas}${unidades}`);
        unidades++
        if(unidades ===10){
            unidades =0
            break bucleUnidades
        }
    } 
    if(decenas===2){
        break bucleDecenas
    }
    decenas++
}
console.log("Terminamos");