$(document).ready(function(){

	$( "body" ).mousemove (function() {
	var miRamdom = Math.floor(Math.random() * 4);
	var miRamdom2 = Math.floor(Math.random() * 6);
	var loquera = miRamdom += miRamdom * 4;
	var loquerab = miRamdom2 += miRamdom2 * 5;
	var loquerac = miRamdom += miRamdom * 3;
	
	var divAnimado1 = $(".divAnimated:nth-of-type(1)");
		divAnimado1.animate({
			   height: loquera
		}, 200 );
	var divAnimado2 = $(".divAnimated:nth-of-type(2)");
		divAnimado2.animate({
			   height: loquerab
		}, 200 );
	var divAnimado3 = $(".divAnimated:nth-of-type(3)");
		divAnimado3.animate({
			   height: loquerac
		}, 200 );
	var divAnimado4 = $(".divAnimated:nth-of-type(4)");
		divAnimado4.animate({
			   height: loquera
		}, 200 );
	var divAnimado5 = $(".divAnimated:nth-of-type(5)");
		divAnimado5.animate({
			   height: loquerab
		}, 200 );
	var divAnimado6 = $(".divAnimated:nth-of-type(6)");
		divAnimado6.animate({
			   height: loquerac
		}, 200 );
	var divAnimado7 = $(".divAnimated:nth-of-type(7)");
		divAnimado7.animate({
			   height: loquera
		}, 200 );
	var divAnimado8 = $(".divAnimated:nth-of-type(8)");
		divAnimado8.animate({
			   height: loquerab
		}, 200 );
		//divAnimado.each(function(){
		//	divAnimado.css("width", loquerab +"px");
		//});

		// for (i = 0; i < divAnimado.length; i++) { 
		// divAnimado.css("width", 50 +i+"px");
		//	}
	});
});