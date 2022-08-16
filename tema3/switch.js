//Sentencias Switch

const nota = 3;

switch (nota) {
    case 5:
        console.log("Lo hiciste perfeto");
        break;
    case 4:  
        console.log("Te falto poco para la maxima nota!")
        break;
    case 3:
        console.log("Aprobaste con lo justo")
        break;
    case 2:
        console.log("No aprobaste por poco")
        break;
    case 1:
        console.log("No aprobaste, estudai un poco mas")
        break;
    default:
        console.log("Error,tu no no existe");
        break;

}