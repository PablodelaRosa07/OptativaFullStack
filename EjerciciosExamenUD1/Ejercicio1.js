
var alumnos = [
    { nombre: "Juan", edad: 20, nota: 8 },
    { nombre: "María", edad: 22, nota: 9 },
    { nombre: "Pedro", edad: 19, nota: 7 }
];

var nombre = prompt("Introduce el nombre del alumno: ");
var edad = parseInt(prompt("Introduce la edad del alumno: "));
var nota = parseFloat(prompt("Introduce la nota del alumno: "));

if (!(edad <= 120 && edad >= 1) || !(nota <= 10 && nota >= 0)) {
    alert("Error: La edad debe estar entre 1 y 120 y la nota entre 0 y 10.");
} else {
    alumnos.push({ nombre: nombre, edad: edad, nota: nota });
    console.log("Alumno agregado correctamente.");
}

var aprobados = [];
var contador = 0;

// forEach con función normal: (elemento, índice, array)
alumnos.forEach(function (alumno) {
    console.log(alumno.nombre + " tiene " + alumno.edad + " años y ha sacado un " + alumno.nota);
    contador += alumno.nota;
    if (alumno.nota >= 5) {
        aprobados.push(alumno);
    }
});

alert("Nota media: " + (contador / alumnos.length).toFixed(2));

document.write("<h1>Aprobados:</h1>");
aprobados.forEach(function (alumno) {
    document.write(alumno.nombre + "<br>");
});