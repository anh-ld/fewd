var url = "https://gist.githubusercontent.com/heiswayi/7fde241975ed8a80535a/raw/ff1caaeaf62bd6740ab7cafcd61f1215de173379/datatables-data.json";
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.onload = function(e) {
  var users = JSON.parse(xhr.response);
  console.log(users.data);
  display(users.data);
}
xhr.send();

function display(users) {
  var table = document.createElement("table");
  var header = table.insertRow();
  var id = 1;
  header.innerHTML = "<th>ID</th><th>Name</th><th>Occupation</th><th>City</th><th>Age</th><th>Net Worth</th>";

  users.forEach(function(currentUser) {
    var row =  table.insertRow();
    row.innerHTML = `<td>${id}</td><td>${currentUser[0]}</td><td>${currentUser[1]}</td><td>${currentUser[2]}</td><td>${currentUser[3]}</td><td>${currentUser[5]}</td>`
    id++;
  });
  document.body.append(table);
}
