// Creamos una escucha para el evento Click del Botón
var botonJs1 = document.getElementById("boton1");
var botonJs2 = document.getElementById("boton2");

//Creación de escucha con función anónima
botonJs1.addEventListener("click", function() {
	document.write("<h1>He hecho click sobre el botón</h1>");
	alert("Haz hecho click sobre el botón"+ "\n" + botonJs1);
});


//Creación de escucha con función externa o personalizada
botonJs2.addEventListener("click", funClick);

function funClick() {
	document.write("<h1>He hecho click sobre el botón</h1>");
	alert("Haz hecho click sobre el botón"+ "\n" + botonJs2);
};