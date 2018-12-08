// xhr request is a browser feature, so it doesn't work with node
function loadTextData() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET","data.txt", true);
  // on progress - used for spinner / loader
  xhr.onprogress = function() {
    console.log("Ready State", this.readyState);
  }
  // on load
  xhr.onload = function() {
    if (this.status == 200) {
      let data = this.responseText;
      console.log(data);
      document.body.innerHTML += `<h1>${data}</h1>`;
    }
  }
  // in case of wrong things
  xhr.onerror = function() {
    console.log("Failed");
  }
  xhr.send();
}

function loadJSONData() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "customer.json", true);
  xhr.onload = function() {
    if (this.status == 200) {
      let datas = JSON.parse(this.response);
      datas.forEach(function(data) {
        document.body.innerHTML += `
        <h1>
        <span>${data.id}</span>
        <span>${data.name}</span>
        <span>${data.company}</span>
        <span>${data.email}</span>
        </h1>`;
      })
    }
  }
  xhr.send();
}

document.body.addEventListener('click', function(e) {
  if (e.target.id == "getText") {
    loadTextData();
  } else if (e.target.id == "getJSON") {
    loadJSONData();
  }
})
