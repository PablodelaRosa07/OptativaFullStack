// ============================================================
// 04 - TYPESCRIPT (Tema 1A)
// Compilar:  tsc -w     (con tsconfig.json en la carpeta)
// El HTML importa 04-typescript.js (nunca el .ts)
// Los errores de tipos que se dejan comentados están marcados con ❌:
// descoméntalos para ver el error del compilador.
// ============================================================

// ---------- EJ 1: tipos básicos ----------
console.log("=== EJ1 tipos básicos ===");
let num: number = 0.444;
let verdadero: boolean = true;
let nombre: string = "Jesús";
let apellidos: string = `jesús dc`;
let numeros: number[] = [3, 5, 6, 7];
let numeros2: Array<number> = [31, 23, 23];
let cualquiera: any = "hola";
cualquiera = 14;
console.log(num, verdadero, nombre, apellidos, numeros, numeros2, cualquiera);
// ❌ let edad: number = "treinta";   // Type 'string' is not assignable to type 'number'

// ---------- EJ 2: tipos propios, unión, tupla, enum ----------
console.log("=== EJ2 type, unión, tupla, enum ===");
type alfanumerico = string | number;
let cadena2: string | number = "ies";
let cadena3: alfanumerico = 4;
cadena3 = "ahora soy un string";

type tupla = [string, number];
let persona: tupla = ["jesus", 41];
console.log(persona[0], persona[1]);

enum color { verde, rojo, amarillo }
let c_index: color = color.rojo;
let c_name: string = color[1];
console.log(c_index, c_name);   // 1 "rojo"
console.log(cadena2, cadena3);

// ---------- EJ 3: arrays tipados ----------
console.log("=== EJ3 arrays ===");
let lenguajes: Array<any> = ["JS", "HTML", "CSS"];
let years: number[] = [7, 17, 19];
let cualesquiera: any[] = ["aa", 12, 19];
let nombres: string[] = ["Ana", "Luis"];
nombres.push("Marta");
// ❌ nombres.push(5);    // Argument of type 'number' is not assignable to parameter of type 'string'
console.log(lenguajes, years, cualesquiera, nombres);

// ---------- EJ 4: funciones tipadas ----------
console.log("=== EJ4 funciones ===");
function saludar(nombre: string): string {
  return "Hola " + nombre.toUpperCase();
}
console.log(saludar("Juan"));
// ❌ saludar(123);      // Argument of type 'number' is not assignable to parameter of type 'string'

function sumar(valor1: number, valor2: number): number {
  return valor1 + valor2;
}
console.log(sumar(10, 5));

// función anónima
const funcSumar = function (valor1: number, valor2: number): number {
  return valor1 + valor2;
};
console.log(funcSumar(4, 9));

// función que no devuelve nada
function imprimirLinea(texto: string): void {
  console.log("--> " + texto);
}
imprimirLinea("void significa que no devuelve nada");

// ---------- EJ 5: parámetros opcionales y por defecto ----------
console.log("=== EJ5 opcionales y por defecto ===");
function sumando(valor1: number, valor2: number, valor3?: number): number {
  if (valor3) return valor1 + valor2 + valor3;
  else return valor1 + valor2;
}
console.log(sumando(5, 4));      // 9
console.log(sumando(5, 4, 3));   // 12

function sumarPorDefecto(valor1: number, valor2: number, valor3: number = 0): number {
  return valor1 + valor2 + valor3;
}
console.log(sumarPorDefecto(5, 4));      // 9
console.log(sumarPorDefecto(5, 4, 3));   // 12

function presentar(nombre: string, saludo: string = "Hola", signo?: string): string {
  return saludo + " " + nombre + (signo ? signo : "");
}
console.log(presentar("Ana"));
console.log(presentar("Ana", "Buenas", "!"));

// ---------- EJ 6: ejercicios de funciones tipadas ----------
console.log("=== EJ6 funciones útiles ===");
function esPar(n: number): boolean {
  return n % 2 === 0;
}
function maximo(arr: number[]): number {
  let max: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
function calcularIva(precio: number, iva: number = 21): number {
  return precio + (precio * iva) / 100;
}
function mediaNotas(notas: number[]): number {
  let suma: number = 0;
  notas.forEach((n) => (suma += n));
  return suma / notas.length;
}
console.log(esPar(4), esPar(7));
console.log(maximo([3, 9, 2, 14, 6]));
console.log(calcularIva(100), calcularIva(100, 10));
console.log(mediaNotas([5, 7, 9]));

// ---------- EJ 7: clase Persona ----------
console.log("=== EJ7 clase Persona ===");
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`);
  }

  esMayorEdad(): boolean {
    return this.edad >= 18;
  }
}
let persona1: Persona;
persona1 = new Persona("Juan", 45);
persona1.imprimir();
console.log(persona1.esMayorEdad());

// ---------- EJ 8: clase Coche (private/public, getters y setters) ----------
console.log("=== EJ8 clase Coche + herencia ===");
class Vehiculo {
  private ruedas: number;
  constructor(ruedas: number) {
    this.ruedas = ruedas;
  }
  getRuedas(): number {
    return this.ruedas;
  }
  setRuedas(ruedas: number): void {
    this.ruedas = ruedas;
  }
}

class Coche extends Vehiculo {
  private color: string;
  private modelo: string;
  private marca: string;
  private precio: number;

  constructor(ruedas: number, color: string, modelo: string, marca: string, precio: number) {
    super(ruedas);
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.precio = precio;
  }

  public setColor(color: string): void {
    this.color = color;
  }
  public getColor(): string {
    return this.color;
  }
  public getPrecio(): number {
    return this.precio;
  }
  public mostrar(): void {
    console.log(`${this.marca} ${this.modelo} (${this.color}) - ${this.precio} € - ${this.getRuedas()} ruedas`);
  }
}

let coche: Coche;
coche = new Coche(4, "rojo", "A3", "Audi", 30000);
console.log(coche.getColor());
coche.setColor("azul");
coche.mostrar();
// ❌ coche.color = "verde";   // Property 'color' is private and only accessible within class 'Coche'

// ---------- EJ 9: clase Dado (atributo opcional/undefined, método privado) ----------
console.log("=== EJ9 clase Dado ===");
class Dado {
  private valor: number | undefined;

  constructor(valor?: number) {
    this.valor = valor;
  }
  public tirar() {
    this.generar();
  }
  private generar() {
    this.valor = Math.floor(Math.random() * 6) + 1;
  }
  public imprimir() {
    console.log(`Salió el valor ${this.valor}`);
  }
}
let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();

// ---------- EJ 10: constructor con modificadores (atajo) y cuenta bancaria ----------
console.log("=== EJ10 CuentaBancaria ===");
class CuentaBancaria {
  constructor(private titular: string, private saldo: number = 0) {}

  ingresar(cantidad: number): void {
    this.saldo += cantidad;
  }
  retirar(cantidad: number): boolean {
    if (cantidad > this.saldo) {
      console.log("Saldo insuficiente");
      return false;
    }
    this.saldo -= cantidad;
    return true;
  }
  mostrar(): void {
    console.log(`${this.titular}: ${this.saldo} €`);
  }
}
let cuenta = new CuentaBancaria("Marta", 100);
cuenta.ingresar(50);
cuenta.retirar(500);
cuenta.retirar(30);
cuenta.mostrar();   // Marta: 120 €

// ---------- EJ 11: herencia con más niveles (Animal -> Perro) ----------
console.log("=== EJ11 herencia Animal/Perro ===");
class Animal {
  constructor(protected nombre: string) {}
  hacerSonido(): void {
    console.log(this.nombre + " hace un sonido");
  }
}
class Perro extends Animal {
  constructor(nombre: string, private raza: string) {
    super(nombre);
  }
  hacerSonido(): void {         // sobrescribe el método del padre
    console.log(`${this.nombre} (${this.raza}) dice: guau`);
  }
}
let animales: Animal[] = [new Animal("Bicho"), new Perro("Rex", "pastor")];
animales.forEach((a) => a.hacerSonido());

// ---------- EJ 12: interfaces ----------
console.log("=== EJ12 interfaces ===");
interface ICar {
  engine: string;
  color: string;
  brake: () => void;    // no recibe nada y no devuelve nada
}
class Car implements ICar {
  constructor(public engine: string, public color: string) {}
  brake() {
    console.log("Frenando...");
  }
}
let miCar = new Car("diésel", "negro");
miCar.brake();
console.log(miCar.engine, miCar.color);

interface Punto {
  imprimir(): void;
}
class PuntoPlano implements Punto {
  constructor(private x: number, private y: number) {}
  imprimir() {
    console.log(`Punto en el plano: (${this.x},${this.y})`);
  }
}
class PuntoEspacio implements Punto {
  constructor(private x: number, private y: number, private z: number) {}
  imprimir() {
    console.log(`Punto en el espacio: (${this.x},${this.y},${this.z})`);
  }
}
let puntos: Punto[] = [new PuntoPlano(10, 4), new PuntoEspacio(20, 50, 60)];
puntos.forEach((p) => p.imprimir());

// ---------- EJ 13: una clase implementa varias interfaces (suple la herencia múltiple) ----------
console.log("=== EJ13 varias interfaces ===");
interface Volador {
  volar(): void;
}
interface Nadador {
  nadar(): void;
}
class Pato implements Volador, Nadador {
  volar() {
    console.log("El pato vuela");
  }
  nadar() {
    console.log("El pato nada");
  }
}
let pato = new Pato();
pato.volar();
pato.nadar();

// ---------- EJ 14: interfaz para objetos literales ----------
console.log("=== EJ14 interfaz de objeto ===");
interface IAlumno {
  nombre: string;
  apellido: string;
  edad: number;
  nacimiento: number;
  telefono?: string;       // opcional
}
let alumnos: IAlumno[] = [
  { nombre: "Ana", apellido: "López", edad: 20, nacimiento: 2006 },
  { nombre: "Luis", apellido: "Pérez", edad: 21, nacimiento: 2005, telefono: "600000000" },
];
alumnos.forEach((a, i) => console.log(i, a.nombre, a.apellido, a.edad));

// ---------- EJ 15: clases genéricas ----------
console.log("=== EJ15 clase genérica Pila ===");
class PilaGenerica<T> {
  private vec: T[] = [];

  insertar(x: T) {
    this.vec.push(x);
  }
  extraer() {
    if (this.vec.length > 0) return this.vec.pop();
    else return null;
  }
  tamanio(): number {
    return this.vec.length;
  }
}
let pila3: PilaGenerica<number>;
pila3 = new PilaGenerica<number>();
pila3.insertar(20);
pila3.insertar(43);
pila3.insertar(1);
console.log(pila3.extraer());   // 1
console.log(pila3.tamanio());   // 2

let pila4 = new PilaGenerica<string>();
pila4.insertar("juan");
pila4.insertar("ana");
console.log(pila4.extraer());   // "ana"
// ❌ pila4.insertar(5);        // number no es asignable a string

// ---------- EJ 16: Cola genérica y función genérica ----------
console.log("=== EJ16 Cola genérica + función genérica ===");
class ColaGenerica<T> {
  private vec: T[] = [];
  encolar(x: T) {
    this.vec.push(x);
  }
  desencolar() {
    if (this.vec.length > 0) return this.vec.shift();
    else return null;
  }
}
let cola = new ColaGenerica<string>();
cola.encolar("primero");
cola.encolar("segundo");
console.log(cola.desencolar());   // "primero"

function primerElemento<T>(arr: T[]): T {
  return arr[0];
}
console.log(primerElemento<number>([9, 8, 7]));
console.log(primerElemento<string>(["a", "b"]));
