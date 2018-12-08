var canvas, ctx, w, h, balls, mousePos;

var player = {
  x: 10,
  y: 10,
  width: 20,
  height: 20,
  color: '#'+Math.floor(Math.random()*16777215).toString(16),
}

function createBalls(n) {
  var ballArray = [];
  for (var i = 0; i < n; i++) {
    var ball = {
      x: w/2,
      y: h/2,
      color: '#'+Math.floor(Math.random()*16777215).toString(16),
      radius: 5 + 30 * Math.random(),
      speedX: -5 + 10 * Math.random(),
      speedY: -5 + 10 * Math.random(),
    }
    ballArray.push(ball);
  }
  return ballArray;
}

window.onload = init;

function init() {
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext('2d');
  w = canvas.width;
  h = canvas.height;
  balls = createBalls(5);

  canvas.addEventListener("mousemove", mouseMove);
  setTimeout(mainLoop, 500);
}

function mainLoop() {
  ctx.clearRect(0, 0, w, h);

  mouseMoveWithPlayer();
  drawRec(player);
  balls.forEach(function(b) {
    drawCircle(b);
  });

  drawNumberOfBallsAlive(balls);

  balls.forEach(function(b, index) {
    moveBall(b);
    testCollisionWithPlayer(b, index);
  });

  requestAnimationFrame(mainLoop);
}

function mouseMove(evt) {
  var rect = canvas.getBoundingClientRect();
  mousePos = {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  }
}

function mouseMoveWithPlayer() {
  if (mousePos !== undefined) {
    player.x = mousePos.x;
    player.y = mousePos.y;
  }
}

function drawRec(player) {
  ctx.save();

  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  ctx.restore();
}

function drawCircle(ball) {
  ctx.save();

  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0 , 2 * Math.PI);
  ctx.fill();

  ctx.restore();
}

function drawNumberOfBallsAlive(balls) {
  ctx.save();
  ctx.font="30px Arial";

  if(balls.length === 0) {
    ctx.fillText("YOU WIN!", 20, 30);
  } else {
    ctx.fillText(balls.length, 20, 30);
  }
  ctx.restore();
}

function moveBall(ball) {
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  borderCollision(ball);
}

function borderCollision(ball) {
  if (ball.x + ball.radius > w) {
    ball.speedX = -ball.speedX;
  }
  else if (ball.x - ball.radius < 0) {
    ball.speedX = -ball.speedX;
  }
  else if (ball.y + ball.radius > h) {
    ball.speedY = -ball.speedY;
  }
  else if (ball.y - ball.radius < 0) {
    ball.speedY = -ball.speedY;
  }
}

function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
   var testX = cx;
   var testY = cy;
   if (testX < x0) testX = x0;
   if (testX > (x0 + w0)) testX = (x0 + w0);
   if (testY < y0) testY = y0;
   if (testY > (y0 + h0)) testY = (y0 + h0);
   return (((cx - testX) * (cx - testX) + (cy - testY) * (cy - testY)) < r * r);
}

function testCollisionWithPlayer(b, index) {
  if(circRectsOverlap(player.x, player.y,
                     player.width, player.height,
                     b.x, b.y, b.radius)) {
    balls.splice(index, 1);
  }
}
