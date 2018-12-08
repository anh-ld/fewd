document.body.addEventListener('click',function(e) {
  if (e.target.id == "getText") {
    getText();
  } else if (e.target.id == "getJSON") {
    getJSON();
  } else if (e.target.id == "getAPI") {
    getAPI();
  }
})

function getText() {
  fetch('data.txt') // fetch return a promise
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.body.innerHTML += `<h3>${data}</h3>`
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getJSON() {
  fetch('customer.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(datas) {
      datas.forEach(function(data) {
        document.body.innerHTML += `
        <h3>
        <span>${data.id}</span>
        <span>${data.name}</span>
        <span>${data.company}</span>
        <span>${data.email}</span>
        </h3>`;
      })
    })
    .catch(function(err) {
      console.log(err);
    })
}

function getAPI() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(datas) {
      datas.forEach(function(data) {
        document.body.innerHTML += `
        <h3>
        <span>${data.address.street}</span>
        <span>${data.address.suite}</span>
        <span>${data.address.city}</span>
        <span>${data.address.zipcode}</span>
        </h3>`;
      })
    })
    .catch(function(err) {
      console.log(err);
    })
}
