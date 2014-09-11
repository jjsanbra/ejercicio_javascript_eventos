// Creamos una escucha para el evento Click del Botón
var boton = document.getElementById("boton1");
var botonJs = document.getElementById("boton2");
var mensaje = document.getElementById("mensaje");


boton.innerHTML = "Julio";
botonJs.innerHTML = "Pepe";


boton.addEventListener("click", function(){
	mensaje.innerHTML = "Mi Nombre es Julio Sanquis";
});

botonJs.addEventListener("click", function(){
	mensaje.innerHTML = "Mi Nombre es Pepe Moreno";
});