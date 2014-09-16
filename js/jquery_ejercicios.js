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

//Condicional If / Else
$(document).on('ready', function() {
	
	// Variable para botones
	/*var boton1 = $('#boton1');
	var boton2 = $('#boton2');
	var boton3 = $('#boton3');
	var boton4 = $('#boton4');*/
	var mensaje = $('#mensaje');

	$('#boton1').on('click', function(){
		var a = prompt("Ingrese su edad");
		var b = 18;
		var c = 80;

		if(a>=b && a<c){
			mensaje.text("Usted puede acceder a el contenido para mayores");
		} else if (a>=c && a<90) {
			mensaje.text("Usted es muy mayor para acceder");
		} else if (a==90) {
			mensaje.text("Salga de aquí");
		} else if (a=="") {
			mensaje.text("No ha escrito nada, introduzca su edad");
		} else {
			mensaje.text("Usted es menor de edad y no puede acceder");
		}
	});


	// Crear un desvio de URL
	$('#boton2').on('click', function(){
		var buscador = prompt("Diga su buscador favorito");
		var urlGoogle = "http://www.google.com";
		var urlYahoo = "http://www.yahoo.com";
		var urlBing = "http://www.bing.com";

		if(buscador=="google" || buscador=="Google" || buscador=="GOOGLE"){
			mensaje.text("Diríjase a " + urlGoogle);
		} else if (buscador=="yahoo" || buscador=="Yahoo" || buscador=="YAHOO"){
			mensaje.text("Diríjase a " + urlYahoo);
		} else if (buscador=="bing" || buscador=="Bing" || buscador=="BING"){
			mensaje.text("Diríjase a " + urlBing);
		} else {
			mensaje.text("Escoge entre: <br />" + urlGoogle + "<br />" + urlYahoo + "<br />" + urlBing);
		}
	});

	//El mismo ejercicio que el anterior pero cargado el texto en un h3 y creando los enlaces
	// Crear un desvio de URL
	$('#boton3').on('click', function(){
		var buscador = prompt("Diga su buscador favorito");
		var urlGoogle = "http://www.google.com";
		var urlYahoo = "http://www.yahoo.com";
		var urlBing = "http://www.bing.com";
		
		if(buscador=="google" || buscador=="Google" || buscador=="GOOGLE"){
			mensaje.html("Diríjase a <a href='" + urlGoogle + "'>" + urlGoogle + "</a>");
		} else if (buscador=="yahoo" || buscador=="Yahoo" || buscador=="YAHOO"){
			mensaje.html("Diríjase a <a href='" + urlYahoo + "'>" + urlYahoo + "</a>");
		} else if (buscador=="bing" || buscador=="Bing" || buscador=="BING"){
			mensaje.html("Diríjase a <a href='" + urlBing + "'>" + urlBing + "</a>");
		} else {
			mensaje.html("Escoge entre: <br /><a href='" + urlGoogle + "'>" + urlGoogle + "</a><br /><a href='" + urlYahoo + "'>" + urlYahoo + "</a><br /><a href='" + urlBing + "'>" + urlBing + "</a>");
		}
	});


	// Condicionales con Switch

	$('#boton4').on('click', function(){
		var edad = parseInt(prompt("Introduzca su edad"));
		var valida = edad>=18;

		switch(valida) {
			case true:
				mensaje.text("Es mayor de edad");
				break;
			default:
				mensaje.text("Es menor de edad");
		}
	});

});