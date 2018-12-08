// variables
var newTask = document.querySelector("#newTask");
var addTask = document.querySelector("#addTask");
var taskList = document.querySelector("ul");
var clearTask = document.querySelector("#clearTask");
var taskCount = document.querySelector("#taskCount");

// events
addTask.addEventListener("click", addNewTask);
taskList.addEventListener("click", removeTask);
clearTask.addEventListener("click", clearAllTask);
newTask.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addNewTask();
  }
});
init();

function init() {
  let tasks;
  if (localStorage.getItem('tasks') != null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(function(item) {
      addTaskIntoList(item);
    });
    updateTaskCount(tasks.length);
  }
}


function addNewTask() {
  var task = newTask.value;

  // add a task into task list
  if (task == "") {
    alert("Please add a task!!!");
  }
  else if (confirm("Are you sure?")){
    addTaskIntoList(task);
    // add a task into localStorage
    let tasks;
    if (localStorage.getItem('tasks') == null) {
      tasks = [];
    }
    else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    updateTaskCount(tasks.length); // update task count
    localStorage.setItem('tasks', JSON.stringify(tasks));
    newTask.value = "";
  }
}

function addTaskIntoList(task) {
  taskList.innerHTML += `
    <li class="task_list">
      <span>${task}</span>
      <i class="fas fa-times"></i>
    </li>
  `;
}

function removeTask(e) {
  // remove a task from task list
  if (e.target.nodeName == "I") {
    e.target.parentElement.remove();
  }
  // remove a task from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(function(item, index) {
    if (item == e.target.previousElementSibling.textContent) {
      tasks.splice(index, 1);
    }
  });
  updateTaskCount(tasks.length); // update task count
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearAllTask() {
  // remove all tasks from task list
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  updateTaskCount(0); // update task count
  // remove all tasks from localStorage
  localStorage.clear();
}

function updateTaskCount(count) {
  taskCount.textContent = count;
}
