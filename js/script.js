var character = $("character");
var obstacle = $("obstacle");

$(document).ready(function() {
		console.log("ready funstion exists");
	$(document).keydown(function(event){
		console.log("keydown exists");
    if (event.keyCode === 39) {
    	// moves right
       $(".character").finish().animate({
            left: "+=20"
        });
    }
    if (event.keyCode === 37) {
    	// moves right
       $(".character").finish().animate({
            left: "-=20"
        });
    } 
  	
	});
});
