// Bring in variables
let btn = document.getElementById("switch");
const heading = document.getElementById("heading");
const clearAll = document.querySelector(".task-input-clear");
const addTask = document.querySelector(".task-input-add");
let taskInput = document.querySelector(".task-input-text");
const tasksList = document.querySelector(".tasks");
let task = document.querySelectorAll("li");

// Button disabled on default
addTask.disabled = true;
clearAll.disabled = true;

inputCheck = () => {
  taskInput.onkeyup = function () {
    taskInput.value.length > 2 && taskInput.value !== ""
      ? (addTask.disabled = false)
      : (addTask.disabled = true);
  };
};
inputCheck();

clearCheck = () => {
  {
    tasksList.children.length >= 0
      ? (clearAll.disabled = false)
      : (clearAll.disabled = true);
  }
};

clearTask = () => {
  const taskClear = document.querySelector(".task-clear");
  taskClear.addEventListener("click", (e) => {
    // let taskElement = document.querySelector("li");
    console.log(taskClear.parentElement.parentElement);
    taskClear.parentElement.parentElement.remove();
    e.preventDefault();
  });
};

addTask.addEventListener("click", function (e) {
  let taskText = document.querySelector(".task-input-text").value;
  const tasksList = document.querySelector(".tasks");
  const taskElement = document.createElement("li");
  const taskFunctions = document.createElement("div");
  const taskClear = document.createElement("button");
  const taskEdit = document.createElement("button");
  taskFunctions.classList.add("task-functions");
  taskElement.classList.add("task");
  taskClear.classList.add("task-clear");
  taskEdit.classList.add("task-edit");
  taskElement.innerText = taskText;
  tasksList.append(taskElement);
  taskElement.append(taskFunctions);
  taskFunctions.append(taskClear);
  taskFunctions.append(taskEdit);
  taskInput.value = "";
  addTask.disabled = true;
  clearAll.disabled = true;
  console.log(tasksList.children.length);
  clearCheck();
  clearTask();
  e.preventDefault();
});

clearAll.addEventListener("click", (e) => {
  const tasksList = document.querySelector(".tasks");
  const confirmClear = () => {
    const response = confirm("Are you sure you wanna clear all?");
    if (response) {
      tasksList.innerText = "";
    }
  };
  confirmClear();
  e.preventDefault();
});

// Declare default state
let state = "true";

// Initiate state change function when btn clicked
btn.addEventListener("click", function () {
  changeState();
});

// Change State function - if state is true, change to dark.
const changeState = () => {
  state == "true" ? darkMode() : lightMode();
};

const lightMode = () => {
  state = "true";
  heading.style.color = "black";
  btn.style.color = "white";
  btn.style.backgroundColor = "black";
  btn.innerText = "Go Dark 🌙";
  document.body.style.color = "black";
  document.body.style.backgroundColor = "white";
  console.log(task);
};

const darkMode = () => {
  state = "false";
  heading.style.color = "white";
  btn.style.backgroundColor = "white";
  btn.innerText = "Go Light 🌞";
  btn.style.color = "black";
  document.body.style.color = "white";
  document.body.style.backgroundColor = "black";
  console.log(task);
};
