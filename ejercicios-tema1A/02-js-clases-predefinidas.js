// ============================================================
// 02 - CLASES PREDEFINIDAS (String, Math/Number, Array, Date)
//      y funciones predefinidas (parseInt, parseFloat, isNaN)
// ============================================================
window.EJERCICIOS = {};
var E = window.EJERCICIOS;

// ---------- String ----------

E["01 String: repaso de métodos"] = function () {
  var cadena = "Hola, esto es Lenguaje de Marcas";
  var cadena2 = " ¿Qué tal?";
  console.log(cadena.length);                 // 32
  console.log(cadena.charAt(3));              // "a"
  console.log(cadena.concat(cadena2));
  console.log(cadena.indexOf("s"));           // 7
  console.log(cadena.indexOf("h"));           // -1
  console.log(cadena.lastIndexOf("s"));       // 31
  console.log(cadena.toLowerCase());
  console.log(cadena.toUpperCase());
  console.log(cadena.substring(6, 12));       // "esto e"
  console.log(cadena.replace("Hola", "Adios"));
  console.log(cadena.split(" "));             // array de palabras
};

E["02 Ejercicio I.1 (texto del usuario)"] = function () {
  var texto = prompt("Ingrese un texto:");
  document.write("<p>Tamaño de la cadena completa: " + texto.length + "</p>");
  document.write("<p>Carácter en la posición 8: " + texto.charAt(7) + "</p>"); // posición 8 = índice 7
  var posicionT = texto.indexOf("t");
  if (posicionT !== -1) {
    document.write("<p>El texto contiene la 't' en la posición " + posicionT + "</p>");
  } else {
    document.write("<p>El texto no contiene el carácter 't'</p>");
  }
  document.write("<p>Mayúsculas: " + texto.toUpperCase() + "</p>");
  document.write("<p>Minúsculas: " + texto.toLowerCase() + "</p>");
};

E["03 invertir una cadena"] = function () {
  var texto = prompt("Texto:");
  var invertido = "";
  for (var i = texto.length - 1; i >= 0; i--) {
    invertido = invertido.concat(texto.charAt(i));
  }
  alert(invertido);
};

E["04 palíndromo"] = function () {
  var texto = prompt("Palabra:").toLowerCase();
  var invertido = "";
  for (var i = texto.length - 1; i >= 0; i--) {
    invertido += texto.charAt(i);
  }
  alert(texto === invertido ? "Es un palíndromo" : "No es un palíndromo");
};

E["05 palabras con split + recorrer"] = function () {
  var frase = prompt("Escribe una frase:");
  var palabras = frase.split(" ");
  console.log("Número de palabras:", palabras.length);
  palabras.forEach(function (p, i) {
    console.log(i + 1 + ": " + p + " (" + p.length + " letras)");
  });
};

E["06 reemplazar y buscar"] = function () {
  var texto = "me gusta Java, Java es genial";
  console.log(texto.replace("Java", "JavaScript"));      // solo la primera
  console.log(texto.replaceAll("Java", "JavaScript"));   // todas
  console.log(texto.indexOf("Java"), texto.lastIndexOf("Java"));
};

// ---------- Math / Number ----------

E["07 NaN, Infinity y toFixed"] = function () {
  var num1 = 0, num2 = 0, letra = "a";
  console.log(num1 / num2);    // NaN
  console.log(num1 * letra);   // NaN
  console.log(num1 + letra);   // "0a"
  num1 = 2;
  console.log(num1 / num2);    // Infinity
  var num = 1.23456;
  console.log(num.toFixed(3)); // "1.235"
};

E["08 parseInt / parseFloat / isNaN"] = function () {
  console.log(parseInt(19.99));          // 19
  console.log(parseInt("19hola25"));     // 19
  console.log(parseInt("h19ola25"));     // NaN
  console.log(parseFloat("19.99hola25")); // 19.99
  console.log(parseFloat("h19.99"));     // NaN
  console.log(isNaN(0 / 0));             // true
  console.log(isNaN(2 / 0));             // false (Infinity es número)
};

E["09 calculadora básica con validación"] = function () {
  var a = parseFloat(prompt("Primer número:"));
  var b = parseFloat(prompt("Segundo número:"));
  if (isNaN(a) || isNaN(b)) {
    alert("Debes introducir números");
    return;
  }
  console.log("Suma:", a + b);
  console.log("Resta:", a - b);
  console.log("Multiplicación:", a * b);
  console.log("División:", b === 0 ? "No se puede dividir entre 0" : (a / b).toFixed(2));
};

// ---------- Array ----------

E["10 Array: length, pop, push, reverse"] = function () {
  var frase = ["Hola", "y", "Adiós"];
  console.log(frase.length);       // 3
  var ultima = frase.pop();
  console.log(frase, ultima);      // ["Hola","y"] "Adiós"
  frase.push("Adiós");
  console.log(frase);
  console.log(frase.reverse());    // ["Adiós","y","Hola"]
};

E["11 Array: shift, unshift, split"] = function () {
  var frase = ["Hola", "y", "Adiós"];
  var primera = frase.shift();
  console.log(frase, primera);     // ["y","Adiós"] "Hola"
  frase.unshift("Hola");
  console.log(frase);

  var cadena = "Hola y Adiós";
  console.log(cadena.split(" "));  // ["Hola","y","Adiós"]
  console.log("Hola".split(""));   // ["H","o","l","a"]
};

E["12 Ejercicio I.2 (5 números en array)"] = function () {
  var numeros = [];
  for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(num);
  }
  console.log("Array en orden inverso:");
  console.log(numeros.reverse());
  var nuevo = parseInt(prompt("Nuevo número para añadir al principio:"));
  numeros.unshift(nuevo);
  console.log("Array con el nuevo elemento al principio:");
  console.log(numeros);
};

E["13 media, máximo y mínimo de un array"] = function () {
  var notas = [];
  for (var i = 0; i < 5; i++) {
    notas.push(parseFloat(prompt("Nota " + (i + 1) + ":")));
  }
  var suma = 0, max = notas[0], min = notas[0];
  for (var j = 0; j < notas.length; j++) {
    suma += notas[j];
    if (notas[j] > max) max = notas[j];
    if (notas[j] < min) min = notas[j];
  }
  console.log("Media:", (suma / notas.length).toFixed(2), "Máx:", max, "Mín:", min);
};

E["14 cola y pila con push/pop/shift"] = function () {
  var pila = [];
  pila.push(1); pila.push(2); pila.push(3);
  console.log("pop:", pila.pop(), pila);       // pila: último en entrar, primero en salir
  var cola = [];
  cola.push("a"); cola.push("b"); cola.push("c");
  console.log("shift:", cola.shift(), cola);   // cola: primero en entrar, primero en salir
};

// ---------- Date ----------

E["15 Date: métodos get"] = function () {
  var fecha = new Date();
  console.log(fecha.getDate());       // día del mes
  console.log(fecha.getDay());        // día semana (domingo = 0)
  console.log(fecha.getFullYear());
  console.log(fecha.getMonth());      // enero = 0
  console.log(fecha.getHours());
  console.log(fecha.getMinutes());
  console.log(fecha.getSeconds());
  console.log(fecha.toLocaleDateString());
};

E["16 Ejercicio I.3 (cumpleaños)"] = function () {
  var fechaCumple = new Date("1984-05-29");
  var dia = fechaCumple.getDate();
  var mes = fechaCumple.getMonth() + 1; // los meses van de 0 a 11
  var anio = fechaCumple.getFullYear();
  document.write("<p>El día de mi cumpleaños es el " + dia + "</p>");
  document.write("<p>El mes de mi cumpleaños es el " + mes + "</p>");
  document.write("<p>El año de mi cumpleaños es el " + anio + "</p>");
};

E["17 calcular edad con Date"] = function () {
  var anioNac = parseInt(prompt("Año de nacimiento:"));
  var hoy = new Date();
  alert("Tienes aproximadamente " + (hoy.getFullYear() - anioNac) + " años");
};

E["18 nombre del día de la semana"] = function () {
  var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  var hoy = new Date();
  alert("Hoy es " + dias[hoy.getDay()]);
};

E["19 Date con parámetros + set"] = function () {
  var f = new Date(2024, 0, 15, 10, 30, 0); // enero = 0
  console.log(f.toLocaleDateString());
  f.setFullYear(2030);
  f.setMonth(11);   // diciembre
  f.setDate(25);
  console.log(f.toLocaleDateString());
};

E["20 reloj: hora actual formateada"] = function () {
  var ahora = new Date();
  console.log(ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds());
};
