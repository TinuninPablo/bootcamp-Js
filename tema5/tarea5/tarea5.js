//- Una variable que contenga tu altura en centímetros (entero)
let heightCm ="173"
console.log(`Su altura en cm es: ${Number(heightCm)}cm`);

//- Una variable que contenga tu altura en metros (número de coma flotante)
let heightM = 1.73
console.log(`Su altura en metros es: ${parseFloat(heightM)}m`);

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let weight = 53
console.log(`Su peso con coma flotante es: ${weight.toFixed(2)}kg`);

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let heightM_Up = heightM.toPrecision(1);
console.log(`Su altura en metros redondeada hacia arriba es de :${heightM_Up}m`);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let heightM_Down = parseInt(heightM);
console.log(`Su altura en metros redondeada hacia abajo es de :${heightM_Down}m`);

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxNum = Number.MAX_VALUE + 1;
console.log(maxNum)
let maxNumJs= Number.MAX_VALUE;
console.log(maxNumJs)

console.log(maxNum === maxNumJs)
