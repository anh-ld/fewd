// word bank
var wordList = ['baby','account','across','solid','waldenses','artemus','pulsing',
'lovesick', 'unworthy','chimera','signior','confining','solent','nielloed','turnery',
'darfur','gammexane','gurges','prostate','alar','showbread','unforged','havenless',
'marshland','referred','business','bergerac','toughy','inc','fipple','vulnerary',
'eponymy','crumblier','revacated','gorman','doc','holdback','comforter','tuberous',
'helens','carapace','sabellian','aphorist','chrisom','engels','spirit','emotivism',
'decadence','recleanse','racegoer','piazzian','morganite'];
// selectors
var startE = document.querySelector("#start");
var resetE = document.querySelector("#reset");
var timeE = document.querySelector("#time");
var scoreE = document.querySelector("#score");
var wordE = document.querySelector("#word");
var input = document.querySelector("input");
var ann = document.querySelector("#ann");
// set up
var time, score, word, clock;
initialize();

resetE.onclick = function() {
  initialize();
}

startE.onclick = function() {
  startGame();
}

function initialize() {
  clearInterval(clock);
  time = 5;
  score = 0;
  timeE.innerHTML = "Time: " + time;
  scoreE.innerHTML = "Score: " + score;
  input.disabled = true;
  input.placeholder = "Press start to begin";
  ann.innerHTML = "";
}

function startGame() {
  input.disabled = false;
  input.placeholder = "Type your word here";
  newWord();
  counter();
}

function newWord() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  wordE.innerHTML = word;
}

function updateScore() {
  score++;
  scoreE.innerHTML = "Score: " + score;
}

function updateRightAnn() {
  ann.innerHTML = "Right";
  ann.style.color = "blue";
}

function updateWrongAnn() {
  ann.innerHTML = "Wrong";
  ann.style.color = "red";
}

function resetInput() {
  input.value = "";
}

function check() {
  if (input.value == word) {
    updateRightAnn();
    updateScore();
    resetInput();
    time = 5;
    clearInterval(clock);
    startGame();
  } else {
    updateWrongAnn();
  }
}

function tick() {
  timeE.innerHTML = "Time: " + time;
  time--;
  check();
  if (time < 0) {
    ann.innerHTML = "You Lose &#x1F623&#x1F623&#x1F623 Your score is " + score +"!";
    clearInterval(clock);
  }
}

function counter() {
  clock = setInterval(tick, 1000);
}
