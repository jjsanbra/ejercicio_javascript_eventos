// Creamos una escucha para el evento Click del Botón
var boton = document.getElementById("boton1");
var botonJs = document.getElementById("boton2");

boton.innerHTML = "Cancelar";
botonJs.innerHTML = "Acceder";

//Creación de escucha con función externa y parámetros
boton.addEventListener("click", function(){funClick("Susana","López")});
botonJs.addEventListener("click", function(){funClick("Manolo","Pérez")});

function funClick(nombre, apellidos) {
	document.write("<h1>Bienvenido: " + nombre + " " + apellidos + "</h1>");
};