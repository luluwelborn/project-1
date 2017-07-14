
var obstacle = $(".largeObstacleLeft");
var score = $(".score");
var boundingBox = $(".boundingBox")

// Start Game function

// Bounding Box 

// Set score box

// Move player left and right
$(document).ready(function() {
	document.getElementById("button").addEventListener("click", start);
});


function start()	{

	$(".largeObstacleLeft").css("animation", "move 10s infinite");

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
}


/* detect collision */ 
function collision($player, $largeObstacleLeft) {
    // console.log("reading collision");
      // coordinates of the div
      var x1 = $player.offset().left;
      var y1 = $player.offset().top;
      var x2 = $largeObstacleLeft.offset().left;
      var y2 = $largeObstacleLeft.offset().top;
      if ((y1 + $player.outerHeight(true)) < y2 ||
        y1 > (y2 + $largeObstacleLeft.outerHeight(true)) ||
        (x1 + $player.outerWidth(true)) < x2  ||
        x1 > (x2 + $largeObstacleLeft.outerWidth(true)))
        return false;
        window.alert("A cloud woke you up! Game Over");
        console.log("collision!");
      return true;
    }

// set times to look for collision
window.setInterval(function() {
    console.log("running at intervals");
    $('#result').text(collision($('.player'), $('.largeObstacleLeft')));
}, 200);













