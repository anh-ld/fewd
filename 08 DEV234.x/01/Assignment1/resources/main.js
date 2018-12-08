// SET UP
let grids, number, statusArray, statusCopy, count;

let init = () => {
  grids = document.getElementsByTagName("td");
  number = [1,1,2,2,3,3,4,4,5].sort(function() {
    return .5 - Math.random();
  });
  statusArray = [];
  statusCopy = [];
  count = 0;

  for (let i = 0; i < grids.length; i++) {
    let cell = grids[i];
    cell.id = i;
    cell.value = number[i];
    cell.completed = false;
    cell.clicked = false;
    cell.style.backgroundColor = "blue";
    cell.innerHTML = "";
  }
}

init();

// MAIN LOOP
let show = (cellIndex1, cellIndex2) => {
  grids[cellIndex1].style.backgroundColor = "green";
  grids[cellIndex2].style.backgroundColor = "green";
  grids[cellIndex1].completed = true;
  grids[cellIndex2].completed = true;
}

let hide = (cellIndex1, cellIndex2) => {
  let wrongPick = setTimeout(() => {
    grids[cellIndex1].style.backgroundColor = "blue";
    grids[cellIndex2].style.backgroundColor = "blue";
    grids[cellIndex1].innerHTML = "";
    grids[cellIndex2].innerHTML = "";
  }, 500);
}

let checkStatus = (status) => {
  statusCopy = status.slice();
  if (status.length === 2) {
    if (status[0].value === status[1].value) {
      show(status[0].id, status[1].id);
      count++;
    }
    else {
      grids[status[0].id].clicked = false;
      grids[status[1].id].clicked = false;
      hide(statusCopy[0].id, statusCopy[1].id);
    }
    if (count === 4) {
      alert("YOU WON!!!");
    }
    statusArray = [];
  }
}

for (let i = 0; i < grids.length; i++) {
  let cell = grids[i];
  cell.addEventListener("click", () => {
    if (cell.completed === false && cell.clicked === false) {
      cell.clicked = true;
      cell.style.backgroundColor = "red";
      cell.innerHTML = cell.value;
      statusArray.push(cell);
      checkStatus(statusArray);
    }
  });
}

document.querySelector("#restart").addEventListener("click", () => {
  init();
})