
var frigo = new Electro(); // variable para gestionar las cosas del frigo

// Función para cuando se conecta la interfaz con el frigo
frigo.on("connect", function () {
    console.log("Ya estoy conectado con el frigorifico!!!")
    console.log("Con este hay " + frigo.clientes + " clientes conectados");

});

// Función para encender la luz del frigo
function encenderLuzRefrigerador() {
    frigo.refrigeradorLuz = true;
    console.log("luz encendida");
}

// Función para apagar la pantalla del frigo
function apagarLuzRefrigerador() {
    frigo.refrigeradorLuz = false;
    console.log("luz apagada");
}


// Activar la luz del refrigerador cuando se abre la puerta
frigo.on("refrigeradorPuerta", function (abierta) {
    console.log("Puerta:", abierta);
    frigo.refrigeradorLuz = abierta;
});


function mostrarHora() {
    var tiempo = new Date();
    var h = tiempo.getHours();
    var m = tiempo.getMinutes();
    var s = tiempo.getSeconds();

    if(h == 0) {
        h = 24
    }

    if(h > 24) {
        h = h - 24;
    }

    if(h < 10) { h = "0" + h; }

    if(m < 10) { m = "0" + m; }

    if(s < 10) { s = "0" + s; }
    var hora = h + ":" + m + ":" + s;
    document.getElementById("horaReloj").innerHTML = hora; // este no funciona en firefox, por eso se usab también la de abajo
    document.getElementById("horaReloj").textContent = hora;
    setTimeout(mostrarHora, 1000);
}
