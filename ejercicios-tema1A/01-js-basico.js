// ============================================================
// 01 - JAVASCRIPT BÁSICO (Tema 1A: Introducción a JavaScript)
// Cada ejercicio es una función. Pulsa su botón en 01-js-basico.html
// y abre la consola (F12) para ver los console.log.
// NOTA: los ejercicios que usan document.write reescriben la página
// (recarga con F5 para volver a ver los botones).
// ============================================================
window.EJERCICIOS = {};
var E = window.EJERCICIOS;

// ---------- Entrada/salida: prompt, alert, confirm, document.write ----------

E["01 prompt + alert"] = function () {
  var nombre = prompt("¿Cómo te llamas?");
  alert("Se llama " + nombre);
};

E["02 confirm identidad"] = function () {
  var nombre = prompt("¿Cómo te llamas?");
  var ok = confirm("¿Eres " + nombre + "?");
  if (ok) {
    alert("Identidad confirmada");
  } else {
    alert("Identidad no confirmada");
  }
};

E["03 document.write h1"] = function () {
  var nombre = prompt("¿Cómo te llamas?");
  document.write("<h1>Hola " + nombre + "</h1>");
};

E["04 sueldo neto (15%)"] = function () {
  var nombre = prompt("Nombre:");
  var sueldo = parseFloat(prompt("Sueldo bruto:"));
  var neto = sueldo - sueldo * 0.15;
  alert("Hola " + nombre + ", tu sueldo neto es: " + neto.toFixed(2) + " €");
  document.write("<h1>Hola " + nombre + "</h1>");
};

// ---------- Variables, arrays, conversión, operadores ----------

E["05 array fecha"] = function () {
  var fecha = [17, "02", 2023];
  alert("Día: " + fecha[0]);
  alert("Mes: " + fecha[1]);
  alert("Año: " + fecha[2]);
};

E["06 conversión de tipos"] = function () {
  var meses = ["Enero", "Febrero", "Marzo"];
  var numero1 = 3, numero2 = 4;
  var resultado = numero1 + numero2;
  console.log("El tercer mes es " + meses[2] + " y la suma es: " + resultado.toString());
  console.log(parseInt("19hola25"));   // 19
  console.log(parseInt("h19ola25"));   // NaN
  console.log(parseFloat("19.99hola")); // 19.99
  console.log(isNaN("hola"));          // true
  console.log("5" + 2);                // "52" (concatena)
  console.log(parseInt("5") + 2);      // 7
};

E["07 operadores"] = function () {
  var num1 = 2, num2 = 3, valor1 = true, valor2 = false, resultado;
  num2++;                          // 4
  resultado = num1 + num2;         // 6
  console.log(resultado);
  resultado = num1 > num2;         // false
  console.log(resultado);
  resultado = !valor1;             // false
  console.log(resultado);
  resultado = valor1 || valor2;    // true
  console.log(resultado);
  resultado = valor1 && valor2;    // false
  console.log(resultado);
};

E["08 var vs let"] = function () {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x);          // 10 (var se escapa del bloque)
  try {
    console.log(y);        // Error
  } catch (e) {
    console.log("Error: y no está definida fuera del bloque");
  }
};

// ---------- Estructuras de control ----------

E["09 if-else mayor de edad"] = function () {
  var nombre = prompt("Nombre:");
  var edad = parseInt(prompt("Edad:"));
  if (edad >= 18) {
    alert("Acceso permitido");
    document.write("<p>Hola " + nombre + ", usted es mayor de edad!</p>");
  } else {
    alert("Acceso rechazado");
  }
};

E["10 letra del DNI"] = function () {
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  var dni = prompt("Número de DNI sin letra:");
  var num = parseInt(dni);
  if (dni !== null && dni.length === 8 && !isNaN(num) && num >= 1 && num <= 99999999) {
    alert("Tu DNI es: " + dni + letras[num % 23]);
  } else {
    alert("Error: el DNI debe tener 8 dígitos y estar entre 1 y 99999999");
  }
};

E["11 switch profesor"] = function () {
  var profe = prompt("Nombre del profesor (Maria, Maru, Jose):");
  switch (profe) {
    case "Maria":
      alert("Maria imparte Lenguaje de Marcas");
      break;
    case "Maru":
      alert("Maru imparte Programación");
      break;
    case "Jose":
      alert("Jose imparte Bases de Datos");
      break;
    default:
      alert("Ese profesor no está en el instituto");
  }
};

E["12 tabla de multiplicar (for)"] = function () {
  var n = parseInt(prompt("Número natural:"));
  for (var i = 0; i <= 10; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
};

E["13 tabla de multiplicar (while)"] = function () {
  var n = parseInt(prompt("Número natural:"));
  var i = 0;
  while (i <= 10) {
    console.log(n + " x " + i + " = " + n * i);
    i++;
  }
};

E["14 pares del 1 al 20"] = function () {
  for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

E["15 sumar hasta que meta 0 (while)"] = function () {
  var suma = 0;
  var num = parseInt(prompt("Número (0 para terminar):"));
  while (num !== 0 && !isNaN(num)) {
    suma += num;
    num = parseInt(prompt("Número (0 para terminar):"));
  }
  alert("La suma total es " + suma);
};

E["16 todas las tablas (for anidado)"] = function () {
  for (var i = 1; i <= 10; i++) {
    for (var j = 0; j <= 10; j++) {
      console.log(i + " x " + j + " = " + i * j);
    }
  }
};

E["17 FizzBuzz 1-30"] = function () {
  for (var i = 1; i <= 30; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
};

// ---------- Funciones de usuario ----------

function calcular_iva(precio) {
  var p_final = precio * 1.21;
  console.log(p_final + " €");
}

E["18 función calcular_iva"] = function () {
  calcular_iva(2);   // 2.42 €
  calcular_iva(100); // 121 €
};

function maximo(array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

E["19 función máximo de array (return)"] = function () {
  console.log("Máximo:", maximo([4, 9, 1, 22, 7]));
};

function factorial(n) {
  var res = 1;
  for (var i = 2; i <= n; i++) res *= i;
  return res;
}

E["20 factorial"] = function () {
  var n = parseInt(prompt("Número:"));
  alert(n + "! = " + factorial(n));
};

E["21 contar vocales"] = function () {
  var texto = prompt("Texto:").toLowerCase();
  var vocales = "aeiou";
  var cuenta = 0;
  for (var i = 0; i < texto.length; i++) {
    if (vocales.indexOf(texto.charAt(i)) !== -1) cuenta++;
  }
  alert("Número de vocales: " + cuenta);
};

// ---------- Objetos y arrays de objetos ----------

E["22 objeto coche (dos formas)"] = function () {
  var coche = new Object();
  coche.marca = "Ford";
  coche.modelo = "Fiesta";
  coche.year = 1969;

  var coche2 = { marca: "Seat", modelo: "Ibiza", year: 2020 };

  console.log(coche.marca, coche["modelo"], coche.year);
  console.log(coche2);
  console.log(coche.color); // undefined (no null)
};

E["23 alumnos: 3 objetos + array + forEach"] = function () {
  var alumno1 = { nombre: "Ana", apellido: "López", edad: 20, nacimiento: 2006 };
  var alumno2 = { nombre: "Luis", apellido: "Pérez", edad: 21, nacimiento: 2005 };
  var alumno3 = { nombre: "Marta", apellido: "Ruiz", edad: 19, nacimiento: 2007 };

  var alumnos = [alumno1, alumno2, alumno3];

  alumnos.forEach(function (alumno, index) {
    console.log(index, alumno.nombre + " " + alumno.apellido + " (" + alumno.edad + " años, nacido en " + alumno.nacimiento + ")");
  });
};

E["24 constructor Persona + prototype"] = function () {
  function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  Persona.prototype.mostrarPersona = function () {
    document.write(this.nombre + " tiene " + this.edad + " años<br>");
  };
  var persona1 = new Persona("Maria", 25);
  var persona2 = new Persona("Juan", 30);
  persona1.mostrarPersona();
  persona2.mostrarPersona();
};

E["25 forEach con index y array"] = function () {
  var numeros = [10, 20, 30, 40, 50, 60, 70];
  numeros.forEach(function (numero, index, arreglo) {
    console.log(numero, index, arreglo.length);
  });
  // Versión flecha: suma de todos
  var suma = 0;
  numeros.forEach((n) => (suma += n));
  console.log("Suma:", suma);
};
