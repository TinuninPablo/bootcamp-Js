//for//
//primero declaro una variable con un array de numeros
let nums = [1,2,3,4,5,6,7,8,9,10]
//declaro una segunda variable que va a ser el numero que se va a multiplicar
let result= 1;

for (let i = 1; i <= nums.length; i++) {
    result= result * i;
    console.log(`El resultado del ciclo for es ${result}` );
}
console.log("------------------------------------------------");

//forEach//
let nums1 = [1,2,3,4,5,6,7,8,9,10]
let result1= 1;

nums1.forEach(valor =>{
    //ahora result1 va a valer el ultimo numero multiplicado por el siguiente
    result1 = result1 * valor 
    console.log(`El resultado del ciclo forEach es ${result1}`);
})

console.log("------------------------------------------------");
//for of//
let nums2 = [1,2,3,4,5,6,7,8,9,10]
let result2= 1;

for(let valor2 of nums2){
    result2 = result2 * valor2
    console.log(`El resultado del ciclo for..of es ${result2}`);

}
console.log("------------------------------------------------");
//for in//
//esta vez declaro una lista de objetos
let nums3 = {
    numero1:1,
    numero2:2,
    numero3:3,
    numero4:4,
    numero5:5,
    numero6:6,
    numero7:7,
    numero8:8,
    numero9:9,
    numero10:10
}
let result3= 1;

for(let valor3 in nums3){
    //compruebo que me traiga los valores de los objetos
    console.log(nums3[valor3]);
    //multiplico result 3 por los valores de los objetos
    result3= result3 * nums3[valor3]
    console.log(`El resultado del ciclo for..in es ${result3}`);
}