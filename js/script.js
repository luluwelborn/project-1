
var obstacle = $(".obstacle");
var score = $(".score");
var boundingBox = $(".boundingBox")

// Start Game function

// Bounding Box 

// Set score box

// Move player left and right
$(document).ready(function() {
	$(document).keydown(function(event){
    if (event.keyCode === 39) {
    	//stops player at right side
    	if(parseInt($(".player").css("left")) >= 240){
            window.alert("Game Over");
        }
    	// moves right
       $(".player").finish().animate({
            left: "+=20"
        });
    }
    if (event.keyCode === 37) {
    	//stops player at right side
    	if(parseInt($(".player").css("left")) <= 0){
            window.alert("Game Over");
        }
    	// moves left
       $(".player").finish().animate({
            left: "-=20"
        });
    } 
  	
	});
});












