enum Partido {
    Azul,Verde,Morado
}

interface IVotable {
    votar(): boolean
}

class Votante implements IVotable{

    public nombre: string;
    private dni: string;
    private edad: number;
    private haVotado: boolean;

    constructor(nombre: string, dni: string, edad: number, haVotado: boolean){
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.haVotado = false;
    }

    votar(): boolean {
        var edad = this.edad;
        var haVotado = this.haVotado;
        if (edad >= 18){
            haVotado = true;
        }
        console.log(haVotado);
        return haVotado;
    }


}



class Candidato extends Votante{
    private partido: Partido;

    constructor(nombre: string, dni: string, edad: number, haVotado: boolean, partido: Partido){
        super(nombre, dni, edad, haVotado = false)
        this.partido = partido;
    }

    mostrar(): void{
        console.log(this.nombre+ "(" +this.partido+ ")")
    }
}


var listaPapeletas: Votante[];

class Urna<Votante>{
    private listaPapeletas: Votante[];

    constructor(listaPapeletas: Votante[]){
        this.listaPapeletas = listaPapeletas;
    }

    introducir(x: Votante) {
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