var notasFinales = []

function pedirNotas (){
    var notas = prompt("Introduce las notas separadas por comas: ")
    var notasSeparadas = notas.split(",")
    
    for (let index = 0; index < notasSeparadas.length; index++) {
        if (notasSeparadas[index] >= 0 && notasSeparadas[index] <= 10){
            notasFinales.push(notasSeparadas[index])
        }
        else {
            console.log("Nota no válida: " +notasSeparadas[index])
        }
    }
}

var media = 0
var aprobados = 0
function calcularMedia(notasFinales){    
    var suma = 0
    for (let index = 0; index < notasFinales.length; index++) {
        suma = media+notasFinales[index]
        if (notasFinales[index] >= 5){
            aprobados = aprobados+1
        }
    }
    media = suma/notasFinales.length
    media.toFixed(2)
}

var textoNota = ""
function calificacion(media){
    switch (media){
        case media < 5:
            textoNota = "Insuficiente"
        case media === 5:
            textoNota = "Suficiente"
        case media === 6:
            textoNota = "Bien"
        case media === 7 || media === 8:
            textoNota = "Notable"
        case media === 9 || media === 10:
            textoNota = "Sobresaliente"
    }
}

function principal(pedirNotas, calcularMedia, calificacion){
    var funcion1 = pedirNotas
    var funcion2 = calcularMedia
    var funcion3 = calificacion

    alert("Media: "+media+ " - "+ textoNota)
    alert("Aprobados: "+ aprobados+ " de " +notasFinales.length)
}

principal

