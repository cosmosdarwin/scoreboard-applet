// Scoreboard Applet
// by cosmosd '15

var interval;
var t = 180;

function updateScore(add, target) {
  var div = $(target);
  var score = parseInt(div.html());
  score += add;
  if (score < 0) { score = 0; } // clip negative scores
  $(target).html(score);
}

function resetScore(target) {
  $(target).html(0);
}

// Helper, turns 175 into "2:55"
function timeToString(t) {
  return Math.floor(t/60) + ":" + ("0" + t % 60).slice(-2);
}

// Called every second from startClock()
function decreaseTime() {
  t -= 1;
  if (t < 0) { t = 0; } // clip negative time
  $(".clock").html(timeToString(t));
}

function startClock() {
  clearInterval(interval);  
  interval = setInterval(function () { decreaseTime() }, 1000);
}

function pauseClock() {
  clearInterval(interval);
}

function resetClock() {
  clearInterval(interval);
  input = $("#t");
  t = parseInt(input.val());
  $(".clock").html(timeToString(t));
}

$(document).ready(function() {

  // Initialize
  $(".clock").html(timeToString(t));

  // Handlers
  $(".increment-away").click(function() { updateScore(+1, ".away") });
  $(".decrement-away").click(function() { updateScore(-1, ".away") });
  $(".increment-home").click(function() { updateScore(+1, ".home") });
  $(".decrement-home").click(function() { updateScore(-1, ".home") });

  $(".reset-away").click(function() { resetScore(".away") });
  $(".reset-home").click(function() { resetScore(".home") });

  $(".start-clock").click(function() { startClock() });
  $(".pause-clock").click(function() { pauseClock() });
  $(".reset-clock").click(function() { resetClock() });

});