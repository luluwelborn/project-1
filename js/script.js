// Declare main variables
var obstacleL = $(".largeObstacleLeft");
var obstacleR = $(".largeObstacleRight");
var boundingBox = $(".boundingBox");


// Move player left and right
$(document).ready(function() {
	document.getElementById("button").addEventListener("click", start);
});

  

  function start()	{
    // Hide object before animation
    $(".largeObstacleLeft").hide();
            console.log("hidden!");
    $(".largeObstacleRight").hide();
            console.log("hidden!");
    // Animations
    $(".largeObstacleLeft").show(1000).css("animation", "move 6s infinite linear");
    $(".largeObstacleRight").show(1000).css("animation", "move 6s infinite linear");
    $(".largeObstacleRight").css("animation-delay", "3s");
    

    // Timer
    var timerVar = setInterval(countTimer, 1000);
    var totalSeconds = 0;
    function countTimer() {
      ++totalSeconds;
      var hour = Math.floor(totalSeconds /3600);
      var minute = Math.floor((totalSeconds - hour*3600)/60);
      var seconds = totalSeconds - (hour*3600 + minute*60);
  
      document.getElementById("timer").innerHTML = "score: " + seconds;
    }

    // Arrow key movements and Boundary alerts
	 $(document).keydown(function(event){
    if (event.keyCode === 39) {
    	//stops player at right side
    	if(parseInt($(".player").css("left")) >= 240){
            // stop animation here!!!
            window.alert("Game Over. Hit OK to reset game.");
            // Reload the current page
            window.location.reload(true);
      }
    	 // moves right
      $(".player").finish().animate({
            left: "+=20"
      });
    }
    if (event.keyCode === 37) {
    	//stops player at right side
    	if(parseInt($(".player").css("left")) <= 0){
            // stop animation here!!!
            window.alert("Game Over. Hit OK to reset game.");
            // Reload the current page
            window.location.reload(true);
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
  // offset returns coordinates for the divs, relative to the div boundary
  var x1 = $player.offset().left;
  var y1 = $player.offset().top;
  var x2 = $largeObstacleLeft.offset().left;
  var y2 = $largeObstacleLeft.offset().top;
  // Get the current outer height from size, padding, margin, border
  if ((y1 + $player.outerHeight(true)) < y2 ||
      y1 > (y2 + $largeObstacleLeft.outerHeight(true)) ||
      (x1 + $player.outerWidth(true)) < x2  ||
      x1 > (x2 + $largeObstacleLeft.outerWidth(true)))
  return false;
    window.alert("A cloud woke you up! Game Over. Hit OK to reset game.");
    // Reload the current page, without using the cache
    window.location.reload(true);
    console.log("collision!");
  return true;
  }

// set times to look for collision
window.setInterval(function() {
    // console.log("running at intervals");
    $('#result').text(collision($('.player'), $('.largeObstacleLeft')));
}, 200);

function collision($player, $largeObstacleRight) {
  // console.log("reading collision");
  // coordinates of the div
  var x1 = $player.offset().left;
  var y1 = $player.offset().top;
  var x2 = $largeObstacleRight.offset().left;
  var y2 = $largeObstacleRight.offset().top;
  if ((y1 + $player.outerHeight(true)) < y2 ||
      y1 > (y2 + $largeObstacleRight.outerHeight(true)) ||
      (x1 + $player.outerWidth(true)) < x2  ||
      x1 > (x2 + $largeObstacleRight.outerWidth(true)))
  return false;
    window.alert("A cloud woke you up! Game Over. Hit OK to reset game.");
    // Reload the current page, without using the cache
    window.location.reload(true);
    console.log("collision!");
  return true;
  }

// set times to look for collision
window.setInterval(function() {
  // console.log("running intervals");
  $('#result').text(collision($('.player'), $('.largeObstacleRight')));
}, 200);











