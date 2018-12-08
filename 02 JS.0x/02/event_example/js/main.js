let btn = document.querySelector("#btn");
let x = 1;

btn.onclick = function(evt) {
  if (x <= 10) {
    document.querySelector("#area").innerHTML += x + " BOOMMMM!!!<br>";
  }
  else if (x == 11) {
    document.querySelector("#area").innerHTML += "END";
  }
  x++;
}

btn.addEventListener('mouseover', function(evt) {
  // console.log(evt);
});

window.onload = function(evt) {
  document.querySelector("#size").innerHTML = "Width: " + window.innerWidth + " Height: " + window.innerHeight;
}

window.onkeydown = function(evt) {
  document.querySelector("#key").innerHTML += "<br>Key: " +evt.key + " Code: " + evt.code;
}

document.querySelector('input').onchange = function(evt) {
  var color = document.querySelector('input').value;
  console.log(color);
  document.body.style.backgroundColor = color;
}
