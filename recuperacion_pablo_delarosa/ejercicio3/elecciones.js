"use strict";
var Partido;
(function (Partido) {
    Partido[Partido["Azul"] = 0] = "Azul";
    Partido[Partido["Verde"] = 1] = "Verde";
    Partido[Partido["Morado"] = 2] = "Morado";
})(Partido || (Partido = {}));
class Votante {
    nombre;
    dni;
    edad;
    haVotado;
    constructor(nombre, dni, edad, haVotado) {
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.haVotado = false;
    }
    votar() {
        var edad = this.edad;
        var haVotado = this.haVotado;
        if (edad >= 18) {
            haVotado = true;
        }
        console.log(haVotado);
        return haVotado;
    }
}
class Candidato extends Votante {
    partido;
    constructor(nombre, dni, edad, haVotado, partido) {
        super(nombre, dni, edad, haVotado = false);
        this.partido = partido;
    }
    mostrar() {
        console.log(this.nombre + "(" + this.partido + ")");
    }
}
var listaPapeletas;
class Urna {
    listaPapeletas;
    constructor(listaPapeletas) {
        this.listaPapeletas = listaPapeletas;
    }
    introducir(x) {
        this.listaPapeletas.push(x);
    }
    total() {
        console.log(listaPapeletas.length);
    }
}
var votante = new Votante("Ana Ruiz", "12345678A", 19, false);
var votante2 = new Candidato("Luis Pérez", "87654321B", 45, false, Partido.Verde);
var llamoVotante2 = votante2.votar;
var llamoVotante = votante.votar;
var mostrarVotante = votante2.mostrar;
console.log(this.listaPapeletas);
