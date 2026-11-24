// Crea un botón por cada ejercicio definido en window.EJERCICIOS
window.addEventListener("DOMContentLoaded", function () {
  var cont = document.getElementById("botones");
  var claves = Object.keys(window.EJERCICIOS);
  claves.forEach(function (titulo) {
    var b = document.createElement("button");
    b.textContent = titulo;
    b.onclick = function () {
      console.clear();
      window.EJERCICIOS[titulo]();
    };
    cont.appendChild(b);
  });
});
