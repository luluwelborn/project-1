var character = $("character");
var obstacle = $("obstacle");

$(document).ready(function() {
		console.log("ready funstion exists");
	$(document).keydown(function(event){
		console.log("keydown exists");
    if(event.keyCode === 40) {
    	// moves down
       $(".character").finish().animate({
            top: "+=20"
        });
    } 
  	
	});
});
