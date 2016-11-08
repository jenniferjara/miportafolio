//---navbar
var scroll_start = 0;
var startchange = $('#cambio');
var offset = startchange.offset();
var alturaNav = $("header").outerHeight();

var transparente = function(){
	scroll_start = $(this).scrollTop();
	if(scroll_start > offset.top) {
		$(".navbar-default").css("background-color", "#31416c");
		$(".navbar-default .navbar-collapse").css("background-color", "#31416c");
	} else {
		$(".navbar-default").css("background-color", "transparent");
		$(".navbar-default .navbar-collapse").css("background-color", "transparent");
	}
}
//---secciones de navbar
var secciones = function(){
	var ref = $(this).attr("href");
	
	$("html body").animate({
		scrollTop: $(ref).offset().top - alturaNav
		}, 800)
}
//----habilidades
var movimiento = function(){
	$(this).addClass("animated rubberBand");
}
var quitar = function(){
	$(this).removeClass("animated rubberBand")
}
var iniciar = function(){
	//----navbar
	if (startchange.length){
		$(document).scroll(transparente);
	}
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});
	//---secciones de navbar
	$("header a").click(secciones);
	//----about me
	$("#changeWord").changeWords({
        time: 1000,
        animate: "bounce",
        selector: "span",
        repeat:true
      });
	//hero
	$(function(){
	    $("#typed").typed({
	        // palabras
	        stringsElement: $('#typed-strings'),
	        typeSpeed: 100,
	        backDelay: 900,
	        loop: true,
	        contentType: 'html', // or text
	        // defaults to false for infinite loop
	        loopCount: false,
	    });

	});
	//----habilidades
	var skill = $(".iconos img");
	skill.mouseenter(movimiento);
	skill.mouseleave(quitar);
}
$(document).ready(iniciar);
