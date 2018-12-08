// Project 1 - Guessing Number Game
var numeber;
var input = document.querySelector("input");
var h2 = document.querySelector("h2");
var h3 = document.querySelector("h3");
var btn = document.querySelector("button");

function init() {
  number = Math.round(100 * Math.random());
  h2.textContent = "Are you ready?";
  h2.style.color = "Limegreen";
  h3.textContent = "Hint: Guess a number in range of 100";
  h3.style.color = "MediumTurquoise";
  input.value = "";
}

init();

input.addEventListener("keyup", function() {
  var guessNumber = input.value;
  if (guessNumber < number) {
    h2.textContent = "Wrong Number";
    h2.style.color = "red";
    h3.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    h3.textContent = "Your guess is a little small. Try again!"
  } else if (guessNumber > number) {
    h2.textContent = "Wrong Number";
    h2.style.color = "red";
    h3.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    h3.textContent = "Your guess is too big! Try again!";
  } else if (guessNumber == number) {
    h2.textContent = "Yes!!! You are right!";
    h2.style.color = "blue";
    h3.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    h3.innerHTML = "&#x1F618&#x1F618&#x1F618";
  }
});

btn.addEventListener('click', function() {
  init();
});
