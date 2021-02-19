const { execFile } = require("child_process")
const colors = require("colors")
const fs = require("fs")

let cursos = [{
    Id: 1,
    Curso: "Diseño",
    Duracion: "35 horas",
    Costo: "$40.000"
},
{
    Id: 2,
    Curso: "Arquitectura",
    Duracion: "50 horas",
    Costo: "$100.000"
},
{
    Id: 3,
    Curso: "Sistemas",
    Duracion: "80 horas",
    Costo: "$140.000"
}]


let imprimir = (a) => {
    console.log("El curso " + cursos[a].Curso.brightMagenta + " con ID: " + cursos[a].Id + " tiene una duración de " + cursos[a].Duracion + " Con un costo de " + cursos[a].Costo)
}
const listar = () => {
    for (let i = 0; i < cursos.length; i++) {
        setTimeout(() => { imprimir(i) }, (2000 * (i)))
    }
}
const inscribir = argv => {
    const curso = cursos.findIndex(curso => curso.Id === argv.d)
    if (curso === -1) {
        console.log("el curso no esta".red)
    } else {
        const Archivo = (nombre, cedula, Id) => {
            const texto = "El nombre del ingresado es: " + nombre + " con cedula : " + cedula + " En el curso: " + Id 
            fs.writeFile("Ingresado.txt", texto, (err) => {
                if (err) console.log("Un error".red)
                else (console.log("Se creo".green))
                console.log(texto)
            })
        }
        imprimir(curso)
        Archivo(argv.n, argv.c, argv.d)
    }

}
const opciones = {
    nombre: {
        demand: true,
        alias: "n"
    },
    cedula: {
        demand: true,
        alias: "c"
    },
    Id: {
        demand: true,
        alias: "d"
    }
}
const argv = require("yargs")
    .command("inscribir", "Inscriba aqui por aqui", opciones, inscribir)
    .command("listar", "pues la lista",{},listar)
    .demandCommand()
    .argv




