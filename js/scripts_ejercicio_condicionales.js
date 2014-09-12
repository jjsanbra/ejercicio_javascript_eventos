/* Operadores Matemáticos
+ = suma
- = resta
* = multiplicar
/ = dividir

Operadores Lógicos
== Igual que...
!= Distinto que... 
< ó <= = Menor o Menor Igual que...
> ó >= = Mayor o Mayor Igual que...
&& = Y (unimos las condiones a evaluar, las condiciones tienen que ser todas verdaderas)
|| = Or (separamos las condiones a evaluar, al menos unas de las condiciones tiene que ser verdadera)
*/

// Variable para botones
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var boton4 = document.getElementById("boton4");

//Condicional If / Else
boton1.addEventListener("click", function(){
	var a = prompt("Ingrese su edad");
	var b = 18;
	var c = 80;

	if(a>=b && a<c){
		document.write("Usted puede acceder a el contenido para mayores");
	} else if (a>=c && a<90) {
		document.write("Usted es muy mayor para acceder");
	} else if (a==90) {
		document.write("Salga de aquí");
	} else {
		document.write("Usted es menor de edad y no puede acceder");
	}
});


// Crear un desvio de URL
boton2.addEventListener("click", function(){
	var buscador = prompt("Diga su buscador favorito");
	var urlGoogle = "http://www.google.com";
	var urlYahoo = "http://www.yahoo.com";
	var urlBing = "http://www.bing.com";

	if(buscador=="google" || buscador=="Google" || buscador=="GOOGLE"){
		document.write("Diríjase a " + urlGoogle);
	} else if (buscador=="yahoo" || buscador=="Yahoo" || buscador=="YAHOO"){
		document.write("Diríjase a " + urlYahoo);
	} else if (buscador=="bing" || buscador=="Bing" || buscador=="BING"){
		document.write("Diríjase a " + urlBing);
	} else {
		document.write("Escoge entre: <br />" + urlGoogle + "<br />" + urlYahoo + "<br />" + urlBing);
	}
});


//El mismo ejercicio que el anterior pero cargado el texto en un h3 y creando los enlaces
// Crear un desvio de URL
boton3.addEventListener("click", function(){
	var buscador = prompt("Diga su buscador favorito");
	var urlGoogle = "http://www.google.com";
	var urlYahoo = "http://www.yahoo.com";
	var urlBing = "http://www.bing.com";
	var mensaje = document.getElementById("mensaje");
	
	if(buscador=="google" || buscador=="Google" || buscador=="GOOGLE"){
		mensaje.innerHTML = "Diríjase a <a href='" + urlGoogle + "'>" + urlGoogle + "</a>";
	} else if (buscador=="yahoo" || buscador=="Yahoo" || buscador=="YAHOO"){
		mensaje.innerHTML = "Diríjase a <a href='" + urlYahoo + "'>" + urlYahoo + "</a>";
	} else if (buscador=="bing" || buscador=="Bing" || buscador=="BING"){
		mensaje.innerHTML = "Diríjase a <a href='" + urlBing + "'>" + urlBing + "</a>";
	} else {
		mensaje.innerHTML = "Escoge entre: <br /><a href='" + urlGoogle + "'>" + urlGoogle + "</a><br /><a href='" + urlYahoo + "'>" + urlYahoo + "</a><br /><a href='" + urlBing + "'>" + urlBing + "</a>";
	}
});


// Condicionales con Switch

boton4.addEventListener("click", function(){
	var edad = parseInt(prompt("Introduzca su edad"));
	var valida = edad>=18;

	switch(valida) {
		case true:
			document.write("Es mayor de edad");
			break;
		default:
			document.write("Es menor de edad");
	}


});