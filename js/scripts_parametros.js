// Creamos una escucha para el evento Click del Botón
var boton = document.getElementById("boton1");
var botonJs = document.getElementById("boton2");
var mensaje = document.getElementById("mensaje");

/*boton.innerHTML = "Cancelar";
botonJs.innerHTML = "Acceder";
*/
//Creación de escucha con función externa y parámetros
//botonJs.addEventListener("click", funClick("Julio","Sanquis"));
/*boton.addEventListener("click", function(){funClick("Susana","López")});
botonJs.addEventListener("click", function(){funClick("Manolo","Pérez")});

function funClick(nombre, apellidos) {
	document.write("<h1>Bienvenido: " + nombre + " " + apellidos + "</h1>");
};*/

boton.innerHTML = "Julio";
botonJs.innerHTML = "Pepe";


boton.addEventListener("click", function(){
	mensaje.innerHTML = "Mi Nombre es Julio Sanquis";
});

botonJs.addEventListener("click", function(){
	mensaje.innerHTML = "Mi Nombre es Pepe Moreno";
});