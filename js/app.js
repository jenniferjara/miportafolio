var movimiento = function(){
	$(this).addClass("animated rubberBand");
}
var quitar = function(){
	$(this).removeClass("animated rubberBand")
}
var iniciar = function(){
	var skill = $(".iconos img");
	skill.mouseenter(movimiento);
	skill.mouseleave(quitar);
}
$(document).ready(iniciar);

