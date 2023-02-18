// Bring in variables
let btn = document.getElementById("button");
const heading = document.getElementById("heading");
const taskButton = document.querySelector(".task-input-button");
let taskInput = document.querySelector(".task-input-text");
let task = document.querySelectorAll("li");

// Button disabled on default
taskButton.disabled = true;

inputCheck = () => {
  taskInput.onkeyup = function () {
    taskInput.value.length > 2 && taskInput.value !== ""
      ? (taskButton.disabled = false)
      : (taskButton.disabled = true);
  };
};

inputCheck();

taskButton.addEventListener("click", function (e) {
  let task = document.querySelector(".task-input-text").value;
  const tasksList = document.querySelector(".tasks");
  const taskElement = document.createElement("li");
  taskElement.classList.add("task");
  taskElement.innerText = task;
  tasksList.append(taskElement);
  taskInput.value = "";
  taskButton.disabled = true;
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
