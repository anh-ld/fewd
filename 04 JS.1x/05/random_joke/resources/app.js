document.querySelector("form").addEventListener("submit", getJokes);
randomPlaceholder();

function getJokes(e) {
  e.preventDefault();
  document.querySelector("#content").innerHTML = '';

  let number = document.querySelector('input[type="number"]').value;
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.icndb.com/jokes/random/' + number, true);

  xhr.onprogress = function() {
    document.querySelector("#spinner").style.display = 'block';
  }

  xhr.onload = function() {
    if (this.status == 200) {
      document.querySelector("#spinner").style.display = 'none';
      let data = JSON.parse(this.response);

      data.value.forEach(function(joke) {
        document.querySelector("#content").innerHTML += `<p>${joke.joke}</p>`
      })
    }
  }

  xhr.onerror = function() {
    document.querySelector("#spinner").style.display = 'none';
    document.querySelector("#content").innerHTML += `<p>Something was wrong. Please try again!!!</p>`
  }

  xhr.send();
}

function randomPlaceholder() {
  let random = Math.round(100 * Math.random());
  document.querySelector('input[type="number"]').setAttribute('placeholder', random);
}
