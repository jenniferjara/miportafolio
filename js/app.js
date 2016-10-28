var movimiento = function(){
	$(this).addClass("animated rubberBand");
}
var quitar = function(){
	$(this).removeClass("animated rubberBand")
}
var iniciar = function(){
	//----ABOUT ME
	$("#changeWord").changeWords({
        time: 1000,
        animate: "bounce",
        selector: "span",
        repeat:true
      });
	//-----SKILLS
	var skill = $(".iconos img");
	skill.mouseover(movimiento);
	skill.mouseleave(quitar);
	
}
$(document).ready(iniciar);
