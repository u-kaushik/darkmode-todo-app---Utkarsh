// Bring in variables
let btn = document.getElementById("button");
const heading = document.getElementById("heading");
const taskButton = document.querySelector(".task-input-button");
let taskInput = document.querySelector(".task-input-text");

// Button disabled on default
taskButton.disabled = true;

inputCheck = () => {
  taskInput.onkeyup = () => {
    //   taskButton.disabled = false;
    // };
    taskInput.value == ""
      ? (taskButton.disabled = true)
      : (taskButton.disabled = false);
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
  console.log(task);
  taskInput.value = "";
  e.preventDefault();
});

// Declare default state
let state = "light";

// Initiate state change function when btn clicked
btn.addEventListener("click", function () {
  changeState();
});

// Change State function - if state is true, change to dark.
const changeState = () => {
  state == "light" ? darkMode() : lightMode();
};

const lightMode = () => {
  state = "light";
  heading.style.color = "black";
  btn.style.color = "white";
  btn.style.backgroundColor = "black";
  btn.innerText = "Go Dark 🌙";
  document.body.style.backgroundColor = "white";
};

const darkMode = () => {
  state = "dark";
  heading.style.color = "white";
  btn.style.backgroundColor = "white";
  btn.innerText = "Go Light 🌞";
  btn.style.color = "black";
  taskInput.color = "white";
  document.body.style.backgroundColor = "black";
};
