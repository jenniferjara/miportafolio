//---navbar
var scroll_start = 0;
var startchange = $('#cambio');
var offset = startchange.offset();
var alturaNav = $("header").outerHeight();

var transparente = function(){
	scroll_start = $(this).scrollTop();
	if(scroll_start > offset.top) {
		$(".navbar-default").css('background-color', '#3D5C4A');
	} else {
		$('.navbar-default').css('background-color', 'transparent');
	}
}
//---secciones de navbar
var secciones = function(){
	var ref = $(this).attr("href");
	
	$("html body").animate({
		scrollTop: $(ref).offset().top - alturaNav
		}, 1000)
}
//----skills
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
	//---secciones de navbar
	$("header a").click(secciones);
	//----about me
	$("#changeWord").changeWords({
        time: 1000,
        animate: "bounce",
        selector: "span",
        repeat:true
      });
	//----skills
	var skill = $(".iconos img");
	skill.mouseenter(movimiento);
	skill.mouseleave(quitar);
	
}
$(document).ready(iniciar);
