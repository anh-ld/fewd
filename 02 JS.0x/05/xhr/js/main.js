document.querySelector("#search").addEventListener("click", function() {
  var url = "https://jsonplaceholder.typicode.com/users";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function(e) {
    var users = JSON.parse(xhr.response);
    display(users);
  }
  xhr.send();
});

function display(users) {
  var table = document.createElement("table");
  var header = table.insertRow();
  header.innerHTML = "<th>ID</th><th>Name</th><th>Username</th><th>Email</th>";

  users.forEach(function(currentUser) {
    var row =  table.insertRow();
    row.innerHTML = `<td>${currentUser.id}</td><td>${currentUser.name}</td><td>${currentUser.username}</td><td>${currentUser.email}</td>`
  });
  document.body.append(table);
}
