var frigo = new Electro(); // variable para gestionar las cosas del frigo
/*    Botones ONCLICK de ECO, LUZ y TURBO     */
var TempF = 0;
var TempC = 0;
var modoEcoF=false;
var modoEcoC=false;

var ajustesPresencia= false;

//#region FUNCIONES AL CONECTARSE
// Función para cuando se conecta la interfaz con el frigo
frigo.on("connect", function () {
    console.log("Ya estoy conectado con el frigorifico!!!")
    console.log("Con este hay " + frigo.clientes + " clientes conectados");

    // PARA EL FRIGO
    // modo eco
    if(modoEcoF == true) {
        document.getElementById("EcoFrigo").setAttribute("class", "iconoBotonesOn");
    }
    else if(modoEcoF == false) {
        document.getElementById("EcoFrigo").setAttribute("class", "iconoBotonesOff");
    }  
    // la luz
    if(frigo.refrigeradorLuz == true) {
        document.getElementById("LuzFrigo").setAttribute("class", "iconoBotonesOn");
    }
    else if(frigo.refrigeradorLuz == false) {
        document.getElementById("LuzFrigo").setAttribute("class", "iconoBotonesOff");
    }  
    // modo turbo
    if(frigo.refrigeradorMotor == 2) {
        document.getElementById("TurboFrigo").setAttribute("class", "iconoBotonesOn");

    }
    else if(frigo.refrigeradorMotor < 2) {
        document.getElementById("TurboFrigo").setAttribute("class", "iconoBotonesOff");
    }
    // PARA EL CONGELADOR
    // modo eco
    if(modoEcoC == true) {
        document.getElementById("EcoCon").setAttribute("class", "iconoBotonesOn");
    }
    else if(modoEcoC == false) {
        document.getElementById("EcoCon").setAttribute("class", "iconoBotonesOff");
    }  

    // la luz
    if(frigo.congeladorLuz == true) {
        document.getElementById("LuzCon").setAttribute("class", "iconoBotonesOn");
    }
    if(frigo.congeladorLuz == false) {
        document.getElementById("LuzCon").setAttribute("class", "iconoBotonesOff");
    }
    // modo turbo
    if(frigo.congeladorMotor == 2) {
        document.getElementById("TurboCon").setAttribute("class", "iconoBotonesOn");
    }
    else if(frigo.congeladorMotor < 2) {
        document.getElementById("TurboCon").setAttribute("class", "iconoBotonesOff");
    }
});

// Cambiar la luz del frigo cuando cambia en el emulador
frigo.on("refrigeradorLuz", function(estado){
    if(estado == true) {
        document.getElementById("LuzFrigo").setAttribute("class", "iconoBotonesOn");
    }
    else if(estado == false) {
        document.getElementById("LuzFrigo").setAttribute("class", "iconoBotonesOff");
    }
});

// Cambiar la luz del congelador cuando cambia en el emulador
frigo.on("congeladorLuz", function(estado){
    if(estado == true) {
        document.getElementById("LuzCon").setAttribute("class", "iconoBotonesOn");
    }
    else if(estado == false) {
        document.getElementById("LuzCon").setAttribute("class", "iconoBotonesOff");
    }
});

// Cambiar el estado del motor del frigo cuando cambie en el emulador
frigo.on("congeladorMotor", function(estado) {
    if(estado == 2) {
        document.getElementById("TurboCon").setAttribute("class", "iconoBotonesOn");
    }
    else if(estado < 2) {
        document.getElementById("TurboCon").setAttribute("class", "iconoBotonesOff");
    }
});

// Cambiar el estado del motor del congelador cuando cambie en el emulador
frigo.on("refrigeradorMotor", function(estado) {
    if(estado == 2) {
        document.getElementById("TurboFrigo").setAttribute("class", "iconoBotonesOn");
    }
    else if(estado < 2) {
        document.getElementById("TurboFrigo").setAttribute("class", "iconoBotonesOff");
    }
});

// Activar la luz del refrigerador cuando se abre la puerta
/* TO-DO Modificar esta función para que no interrumpa el encender la luz cuando queramos */
/*
frigo.on("refrigeradorPuerta", function (abierta) {
    console.log("Puerta:", abierta);
    frigo.refrigeradorLuz = abierta;
    
});
*/

//#endregion


//#region FUNCIONES BOTONES FRIGO

// PARA QUE SE GUARDEN LOS ELEMENTOS LOCALMENTE
/*
window.content.localStorage[TempF] = 0;
window.content.localStorage[TempC] = 0;
window.content.localStorage[modoEcoF] = 0;
window.content.localStorage[modoEcoC] = 0;
*/

/* Refrigerador  */
function EcoF()
{
    if( modoEcoF == false){
        modoEcoF= true;
        document.getElementById("EcoFrigo").setAttribute("class", "iconoBotonesOn");
    }
    else{
        modoEcoF = false;
        document.getElementById("EcoFrigo").setAttribute("class", "iconoBotonesOff");
    }
    console.log("Eco F ",modoEcoF);

     


}
  
function LuzF()
{
    if( frigo.refrigeradorLuz == false ){
        frigo.refrigeradorLuz=true;
        console.log("Luz refrigerador: ", frigo.refrigeradorLuz);
    }
    else{
        frigo.refrigeradorLuz=false;
        console.log("Luz refrigerador: ", frigo.refrigeradorLuz);
    }
}
  
function TurboF()
{
    /*  Modo Turbo del refrigerador, si lo desactiva y la temperatura de dentro es menor que la ext-num lo apaga    */
    if( frigo.refrigeradorMotor < 2  ){
    frigo.refrigeradorMotor=2;
        console.log("Motor refrigerador: ", frigo.refrigeradorMotor);
    }
    else{
        if(frigo.refrigeradorTemperatura<frigo.exteriorTemperatura){
            frigo.refrigeradorMotor=0; 
        }
        else{
            frigo.refrigeradorMotor=1;
        }
    console.log("Motor refrigerador: ", frigo.refrigeradorMotor);
    }
}
/* Congelador  */
function EcoCon()
{
    if( modoEcoC == false){
        modoEcoC= true;
        document.getElementById("EcoCon").setAttribute("class", "iconoBotonesOn");
    }
    else{
        modoEcoC = false;
        document.getElementById("EcoCon").setAttribute("class", "iconoBotonesOff");
    }
    console.log("Eco C ",modoEcoC);

 
}
    
function LuzCon()
{
    if(  frigo.congeladorLuz == false ){
    frigo.congeladorLuz=true;
        console.log("Luz congelador: ", frigo.congeladorLuz);
    }
    else{
    frigo.congeladorLuz=false;
    console.log("Luz congelador: ", frigo.congeladorLuz);
    }
}
    
function TurboCon()
{
/*  Modo Turbo del congelador, si lo desactiva y la temperatura de dentro es menor que la ext-num lo apaga    */
    if( frigo.congeladorMotor < 2 )
    {
        frigo.congeladorMotor=2;
        console.log("Motor congelador: ", frigo.congeladorMotor);
    }
    else{
        if(frigo.congeladorTemperatura<frigo.exteriorTemperatura-20)
        {
            frigo.congeladorMotor=0; 
        }
        else 
        {
            frigo.congeladorMotor=1;
        }
    console.log("Motor congelador: ", frigo.congeladorMotor);
    }
}
  
/* Set Temperatura */
function TemperaturaF(valor)
{
    TempF = valor;
    if(frigo.refrigeradorTemperatura>valor){
        frigo.refrigeradorMotor=1;
    }
};
  
function TemperaturaC(valor)
{
    TempC = valor;
    if(frigo.congeladorTemperatura>valor){
            frigo.refrigeradorMotor=1;
    }

};
  
  /* Funcionamiento motor frigo/congelador. Teniendo en cuenta el modo ECO */
function ControlTempF()
{
    if(modoEcoF==false){
        if(frigo.refrigeradorTemperatura<TempF){
            frigo.refrigeradorMotor=0;
        }
        else{
            if(frigo.refrigeradorMotor<2){
                frigo.refrigeradorMotor=1;
            }
            
        }
    }
    else {
        if(frigo.refrigeradorTemperatura>TempF+1){
            if(frigo.refrigeradorMotor!=2){
                frigo.refrigeradorMotor=1;
            }
            
        }
        if(frigo.refrigeradorTemperatura<TempF-1){
            frigo.refrigeradorMotor=0;
        }

    }
}
function ControlTempC()
{
    if(modoEcoC==false){
        if(frigo.congeladorTemperatura<TempC){
            frigo.congeladorMotor=0;
        }
        else{
            if(frigo.congeladorMotor<2){
                frigo.congeladorMotor=1;
            }
            
        }
    }
    else{
        if(frigo.congeladorTemperatura<TempC-5){
            frigo.congeladorMotor=0;
        }
        else if(frigo.congeladorTemperatura>TempC+5){
            if(frigo.congeladorMotor<2){
                frigo.congeladorMotor=1;
            }
            
        }
    }

}

//#endregion

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

// para que se escondan los botones y se muestren los charts
var mostrarStats = false;
function toggleStats()
{
    if(!mostrarStats) 
    {
        mostrarStats = true;
        document.getElementById("seccionCong").style.display = "none";
        document.getElementById("statsCong").style.display = "block";
    }
    else if(mostrarStats)
    {
        mostrarStats = false;
        document.getElementById("seccionCong").style.display = "block";
        document.getElementById("statsCong").style.display = "none";
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
 
    
    ControlTempF();
    ControlTempC();

    sensorProximidadApaga();
    sensorProximidadEnciende();

    //Alertas
    tiempoPuerta(hora);
    alertaPuerta();
    alertaTemperatura();
    alertaConsumo();


    setPedido();

   
}
    
/* Sensores */
function  sensorProximidadApaga(){                      //Apaga las luces en caso de que no sienta a nadie
    if(frigo.frigorificoPresencia == false && frigo.refrigeradorPuerta==false && frigo.congeladorPuerta==false ){
        frigo.frigorificoPantalla=0;
        frigo.refrigeradorLuz=false;
        frigo.congeladorLuz=false;
    }
    
}

function  sensorProximidadEnciende(){
    if(frigo.frigorificoPresencia == true){
        frigo.frigorificoPantalla=2;
        
    }
    
}

var TPuertafri = 0;
var TPuertacon=0;
function tiempoPuerta(hora){            //Calcula cuanto tiempo pasa la puerta del refirgerador o congelador abierta
    if(frigo.refrigeradorPuerta==true){
        TPuertafri=TPuertafri+1;
        
    }
    else{
        TPuertafri=0;
    }
    if(frigo.congeladorPuerta==true){
        TPuertacon=TPuertacon+1;
    }
    else{
        TPuertacon=0;
    }
    
}

// ALERTAS
//Si no se han mostradu aun es false, si ya se han mostrado es true. Asi se evita enviar la alerta varias veces
var aTemp=false;
var aConsum=false;

/*const alerta = document.querySelector('#alerta');

alerta.addEventListener('click', () =>{
    console.log("Alerta");
});*/
var mostrarPuerta=false;
var mostrarTempF=false;
var mostrarTempC=false;
var mostrarCon=false;

function mostrarAlertas(){
    if(mostrarPuerta==true){
        Command: toastr["error"]("Una de tus puertas esta abierta", "Puerta Abierta")

        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": true,
          "progressBar": false,
          "positionClass": "toast-top-right",
          "preventDuplicates": true,
          "onclick": null,
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }  

        mostrarPuerta=false;
    }

    if(mostrarTempF==true){
        Command: toastr["error"]("La temperatura de tu refigerador es alta", "Temperatura Refrigerador")

        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": true,
          "progressBar": false,
          "positionClass": "toast-top-right",
          "preventDuplicates": true,
          "onclick": null,
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        } 
        mostrarTempF=false;    
    }

    if(mostrarTempC==true){
        Command: toastr["error"]("La temperatura de tu congelador es alta", "Temperatura Congelador")

        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": true,
          "progressBar": false,
          "positionClass": "toast-top-right",
          "preventDuplicates": true,
          "onclick": null,
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }   
        mostrarTempC=false;
    }

    if(mostrarCon==true){
        Command: toastr["error"]("Su consumo de energía es alto", "Consumo Energético")

        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": true,
          "progressBar": false,
          "positionClass": "toast-top-right",
          "preventDuplicates": true,
          "onclick": null,
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }

        mostrarCon=false;
    }
}

function alertaPuerta(){
    
        if(frigo.refrigeradorPuerta==true && TPuertafri>20 || frigo.congeladorPuerta==true && TPuertacon>20){
            frigo.frigorificoAlarma=true;
            console.log("AA");
            mostrarPuerta=true;
        }
        else{
            frigo.frigorificoAlarma=false;
        }
}


function alertaTemperatura(){
    
    if(aTemp==false){
        if(frigo.refrigeradorTemperatura>10){  
            aTemp=true; 
        }
        if(frigo.congeladorTemperatura>2){
            aTemp=true;
        }
    }

}

var consumido=0;            //Numero de mili-vatios consumidos en el minuto
var cadaMin=0;              //Cont para indicar el tiempo, si llega a 60 vuelve a 0 y resetea consumido


function calculoConsumo(){
    let motorF=0;
    let motorC=0;
    let pantalla=0;
    let luzF=0;
    let luzC=0;

     //Consumo Motor refrigerador
    if(frigo.refrigeradorMotor==2){
        motorF=400;
    }
    else if(frigo.refrigeradorMotor==1){
        motorF=200;
    }

    //Consumo Motor congelador
    if(frigo.congeladorMotor==2){
        motorC=400;
    }
    else if(frigo.congeladorMotor==1){
        motorC=200;
    }

    //Consumo Pantalla
    if(frigo.frigorificoPantalla==2){
        pantalla=50;
    }
    else if(frigo.frigorificoPantalla==1){
        pantalla=20;
    }

     //Consumo Luz 
     if(frigo.refrigeradorLuz==true){
         luzF=10;
     }
     if(frigo.congeladorLuz==true){
         luzC=10;
     }

     consumido = consumido + motorF + motorC + pantalla + luzF + luzC;

}

function alertaConsumo(){
    cadaMin++;
    calculoConsumo();
    
    if(consumido> 26100 && aConsum==false)   {  //26100 = todo activado a full durante medio minuto
  

        aConsum=true;
        //console.log("Que explota!!");
    }      

    if(cadaMin>59){
        cadaMin=0;
        consumido=0;
        aConsum=false;
        aTemp=false;
        //console.log("Ya no: "+consumido);
    }
}


//PEDIDOS  
var guardavar=-1;           //Con esta comprueba si ha cambiado el codigo de pedido para añadir uno nuevo
var pedidoGuardado=[];      //Nombre de las variables elegidas
//Cantidades de los productos (leche, huevo,carne,pescado)
var cantLeche=0;
var cantHuevo=0;
var cantCarne=0;
var cantPescado=0;


//Aqui clasifica y suma los pedidos
function realizaPedido(){
    
    if(frigo.frigorificoCodigo== "11111111"){
        pedidoGuardado.push("Leche");  
        cantLeche= cantLeche+1;
        
    }
    if(frigo.frigorificoCodigo== "22222222"){
        pedidoGuardado.push("Huevo");  
        cantHuevo= cantHuevo+1;
    }
    if(frigo.frigorificoCodigo== "33333333"){
        pedidoGuardado.push("Carne");
        cantCarne= cantCarne+1;
        
    }
    if(frigo.frigorificoCodigo== "44444444"){
        pedidoGuardado.push("Pescado"); 
        cantPescado= cantPescado+1; 
    }

    
}

//Primero llama aquí para comprobar que se ha elegido un producto nuevo
function setPedido(){         
    let actual = frigo.frigorificoCodigo;
    if(guardavar!=actual){
        guardavar=frigo.frigorificoCodigo;
        realizaPedido();
    }
   
    
}
