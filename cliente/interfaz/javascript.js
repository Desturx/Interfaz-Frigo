var frigo = new Electro(); // variable para gestionar las cosas del frigo
//Funcion Slidebar


// Función para cuando se conecta la interfaz con el frigo
frigo.on("connect", function () {
    console.log("Ya estoy conectado con el frigorifico!!!")
    console.log("Con este hay " + frigo.clientes + " clientes conectados");

});

// Función para encender la luz del frigo
function encenderLuzRefrigerador() 
{
    frigo.refrigeradorLuz = true;
    console.log("luz encendida");
}

// Función para apagar la pantalla del frigo
function apagarLuzRefrigerador() 
{
    frigo.refrigeradorLuz = false;
    console.log("luz apagada");
}


// Activar la luz del refrigerador cuando se abre la puerta
frigo.on("refrigeradorPuerta", function (abierta) {
    console.log("Puerta:", abierta);
    frigo.refrigeradorLuz = abierta;
});

function atenuar()
{
    var body = document.getElementsByTagName("body")[0];
    if(frigo.frigorificoPantalla == 2) // si la pantalla está encendida, se atenua
    {
        frigo.frigorificoPantalla = 1;
        body.style.filter = "brightness(60%)";
        document.getElementById("atenuarPantalla").innerHTML = '<i class="fas fa-sun iconos"></i>';
    }
    else if(frigo.frigorificoPantalla == 1) // si la pantalla está atenuada se enciende
    {
        frigo.frigorificoPantalla = 2;
        body.style.filter = "brightness(100%)";
        document.getElementById("atenuarPantalla").innerHTML = '<i class="fas fa-moon iconos"></i>';
    }
}
function irMenuInicio() 
{
    window.location.href='menu.html';
    // Solo cambia el estado a encendida en caso de que no esté atenuada
    if(frigo.frigorificoPantalla != 1)
    {
        frigo.frigorificoPantalla = 2; // pone la pantalla en encendido
    }
}
// Cuando se vuelve al reloj
function volverAlReloj() 
{
    window.location.href='index.html'; // redirige
    frigo.frigorificoPantalla = 0; // apaga la pantalla
}
// Función para mostrar o ocultar el reloj
var mostrarReloj = true;
function cambiarEstadoPantalla()
{
    if(mostrarReloj)
    {
        mostrarReloj = false;
        document.getElementById("horaReloj").style.visibility = "hidden";
        document.getElementById("fechaReloj").style.visibility = "hidden";
    }
    else if(!mostrarReloj) {
        mostrarReloj = true;
        document.getElementById("horaReloj").style.visibility = "visible";
        document.getElementById("fechaReloj").style.visibility = "visible";
    }
}
// Función para mostrar la fecha
function mostrarFecha()
{
    var dt = new Date();
    document.getElementById("fechaReloj").innerHTML = dt.toLocaleDateString();
}
// Función para mostrar la hora
function mostrarHora() 
{
    var tiempo = new Date();
    var h = tiempo.getHours();
    var m = tiempo.getMinutes();
    var s = tiempo.getSeconds();

    if(h == 0) { h = 24 }
    if(h > 24) { h = h - 24;}
    if(h < 10) { h = "0" + h; }
    if(m < 10) { m = "0" + m; }
    if(s < 10) { s = "0" + s; }

    var hora = h + ":" + m + ":" + s;
    document.getElementById("horaReloj").innerHTML = hora; // este no funciona en firefox, por eso se usab también la de abajo
    document.getElementById("horaReloj").textContent = hora;
    setTimeout(mostrarHora, 1000);
    
}



/*    Botones ONCLICK de ECO, LUZ y TURBO     */
/* Refrigerador  */
function EcoF(){
  /* if( frigo.refrigeradorLuz == false ){
    frigo.refrigeradorLuz=true;
       console.log("Eco: ", frigo.refrigeradorLuz);
   }
   else{
    frigo.refrigeradorLuz=false;
    console.log("Eco: ", frigo.refrigeradorLuz);
   }*/
}


function LuzF(){
    if( frigo.refrigeradorLuz == false ){
     frigo.refrigeradorLuz=true;
        console.log("Eco: ", frigo.refrigeradorLuz);
    }
    else{
     frigo.refrigeradorLuz=false;
     console.log("Eco: ", frigo.refrigeradorLuz);
    }
 }

 function TurboF(){
    if( frigo.refrigeradorMotor < 2 ){
     frigo.refrigeradorMotor=2;
        console.log("Eco: ", frigo.refrigeradorMotor);
    }
    else{
        if(frigo.refrigeradorTemperatura<frigo.exteriorTemperatura-10){
            frigo.refrigeradorMotor=0; 
        }
        else{
            frigo.refrigeradorMotor=1;
        }
     console.log("Eco: ", frigo.refrigeradorMotor);
    }
 }


 /* Congelador  */
function EcoCon(){
    /* if( frigo.refrigeradorLuz == false ){
      frigo.refrigeradorLuz=true;
         console.log("Eco: ", frigo.refrigeradorLuz);
     }
     else{
      frigo.refrigeradorLuz=false;
      console.log("Eco: ", frigo.refrigeradorLuz);
     }*/
  }
  
  
  function LuzCon(){
      if(  frigo.congeladorLuz == false ){
       frigo.congeladorLuz=true;
          console.log("Eco: ", frigo.congeladorLuz);
      }
      else{
       frigo.congeladorLuz=false;
       console.log("Eco: ", frigo.congeladorLuz);
      }
   }
  
   function TurboCon(){
     /* if( frigo.refrigeradorLuz == false ){
       frigo.refrigeradorLuz=true;
          console.log("Eco: ", frigo.refrigeradorLuz);
      }
      else{
       frigo.refrigeradorLuz=false;
       console.log("Eco: ", frigo.refrigeradorLuz);
      }*/
   }
 