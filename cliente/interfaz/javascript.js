
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