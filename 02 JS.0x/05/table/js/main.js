var table = document.querySelector("table");

document.querySelector("#addRow").addEventListener("click", function() {
  document.querySelector("caption").innerHTML = "Employee 08 - 2018";
  var row = table.insertRow();
  var cell1 = "A" + (10*Math.random()).toFixed(0);
  var cell2 = "B" + (10*Math.random()).toFixed(0);
  var cell3 = "C" + (10*Math.random()).toFixed(0);
  row.innerHTML = `<td>${cell1}</td><td>${cell2}</td><td>${cell3}</td>`;
});

document.querySelector("#removeRow").addEventListener("click", function() {
  var length = table.rows.length;
  if (length > 1) {
    table.deleteRow(length - 1);
  }
  else {
    document.querySelector("caption").innerHTML = "NO DATA to DELETE";
  }
});
