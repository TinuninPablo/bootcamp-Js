//break
let i=1
//Le ponemos un max mayor para poder limitarlo con el break
let max =100
let result=1

while(i < max){
    i++;
    result = result * i
    console.log(`El resultado del ciclo while-break es ${result}`)
    
if (i===10) {
    console.log("El ciclo termina aqui, ya no hay mas factoriales de 10")
    break;
}
}