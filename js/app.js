var movimiento = function(){
	$(this).addClass("animated rubberBand");
}
var quitar = function(){
	$(this).removeClass("animated rubberBand")
}
var iniciar = function(){
	new WOW().init();
	var skill = $(".iconos img");
	skill.mouseenter(movimiento);
	skill.mouseleave(quitar);
	$("#changeWord").changeWords({
        time: 1000,
        animate: "bounce",
        selector: "span",
        repeat:true
      });
}
$(document).ready(iniciar);
