const misDatos =[
    nombre = "Pablo Tinunin",
    edad = 21,
    EresDesarrollador = true,
    nacimiento = new Date(2000,10,21),
    LibroFavorito={
        titulo: "El psicoanalista",
        autor:"John Katzenbach",
        fecha:2003,
        url:"https://http2.mlstatic.com/D_NQ_NP_2X_688308-MLA49601976131_042022-F.webp"
    }
];

//doy los console.log para cada cosa
console.log(misDatos[0]);

console.log(misDatos[1]);

console.log(misDatos[2])

console.log(misDatos[3])

console.log(misDatos[4].titulo);
console.log(misDatos[4].autor);
console.log(misDatos[4].fecha);
console.log(misDatos[4].url);