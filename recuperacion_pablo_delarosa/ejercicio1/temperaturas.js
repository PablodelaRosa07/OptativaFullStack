function pedirTemperatura(){
    var temperatura = prompt("Mete las temperaturas separadas por ,");
    var temperaturasSeparadas = temperatura.split(",");
    var tablaTemperaturas = [];
    for (let index = 0; index < temperaturasSeparadas.length; index++) {
        var element = temperaturasSeparadas[index];
        element = Number(element);
        if (element >= -50 && element <= 50){
            tablaTemperaturas.push(element);
            console.log("Temperatura añadida: " +element)
        }
        else {
            console.log("Temperatura no válida: " +element);
        }
    }
    return tablaTemperaturas;
}

function calcularMedia(pidoTemperatura){
    var suma = 0;
    for (let index = 0; index < pidoTemperatura.length; index++) {
        suma = suma+pidoTemperatura[index];        
    }
    var media = suma/pidoTemperatura.length;
    return media;
}

function clasificar(pidoTemperatura){
    for (let index = 0; index < pidoTemperatura.length; index++) {
        var temperatura = pidoTemperatura[index];
        var temperaturaCambiada = temperatura/10;
        switch (temperaturaCambiada){
            case (temperaturaCambiada < 10):
                console.log("Frío");
                break;
            case (temperaturaCambiada >= 10 && temperaturaCambiada <= 19):
                console.log("Templado");
                break;
            case (temperaturaCambiada >= 20 && temperaturaCambiada <= 29):
                console.log("Calor");
                break;
            case (temperaturaCambiada >= 30):
                console.log("Mucho calor");
                break;
            default:
                console.log("No se sabe la temperatura");
        }
            
        
    }
}

function programaPrincipal(){
    var pidoTemperatura = pedirTemperatura();
    var calculoMedia = calcularMedia(pidoTemperatura);
    var clasifico = clasificar(pidoTemperatura);

    var variableMedia = alert("La media de temperatura es: " +calculoMedia.toFixed(1));
    var llamadaClasificacion = clasifico(variableMedia);
}


var main = programaPrincipal();



