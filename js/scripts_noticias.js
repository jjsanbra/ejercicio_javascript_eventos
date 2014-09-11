// Creamos una escucha para el evento Click del Botón
var boton = document.getElementById("boton1");
var botonJs = document.getElementById("boton2");

var titular = document.getElementById("titular");
var subtitulo = document.getElementById("subtitulo");
var texto = document.getElementById("texto");

boton.innerHTML = "Noticia 1";
botonJs.innerHTML = "Noticia 2";

boton.addEventListener("click", function(){creaArt("Muere Botín","Presidente del Santander", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magnam laboriosam harum a dolor, quod eius maiores necessitatibus? Porro eaque explicabo, sequi modi quibusdam aspernatur quo unde assumenda dicta repellendus.")});
botonJs.addEventListener("click", function(){creaArt("Samsung Galaxy 20","Nuevo terminal", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magnam laboriosam harum a dolor, quod eius maiores necessitatibus? Porro eaque explicabo, sequi modi quibusdam aspernatur quo unde assumenda dicta repellendus.")});

function creaArt(tit,sub,tex){
	titular.innerHTML = tit;
	subtitulo.innerHTML = sub;
	texto.innerHTML = tex;
};

