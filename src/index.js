const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 10;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
  requestAnimationFrame(draw);
}

draw();




let highScore = localStorage.getItem("highScore") || 0;
let currentScore = 0;

// Increase current score
currentScore += 1;

// Check if new high score
if (currentScore > highScore) {
  highScore = currentScore;
  localStorage.setItem("highScore", highScore);
}
