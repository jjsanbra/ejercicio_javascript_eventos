//Declaramos variables para los elementos de HTML
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var mensaje = document.getElementById("mensaje");
var titular = document.getElementById("titular");
var subtitulo = document.getElementById("subtitulo");
var texto = document.getElementById("texto");

//Cambiar el texto de los botones
boton1.innerHTML = "Boton 1";
boton2.innerHTML = "Boton 2";

//Creamos Función
function cargaInfo(mens,tit,sub,text){
	mensaje.innerHTML = mens;
	titular.innerHTML = tit;
	subtitulo.innerHTML = sub;
	texto.innerHTML = text;
};

//Creamos escuchas y definimos función al evento
boton1.addEventListener("click", function(){cargaInfo("Mensaje del botón 1","Titular del Primer Botón","subtítulo de botón 1","texto de prueba para eventos con parámetros")});
boton2.addEventListener("click", function(){cargaInfo("Mensaje del botón 2","Titular del Segundo Botón","subtítulo de botón 2","texto de prueba para eventos con parámetros")});