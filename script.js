// Bring in variables
let btn = document.getElementById("switch");
const heading = document.getElementById("heading");
const clearAll = document.querySelector(".task-input-clear");
const addTask = document.querySelector(".task-input-add");
const taskInput = document.querySelector(".task-input-text");
const tasksList = document.querySelector(".tasks");
const taskClear = document.querySelector(".task-clear");
const task = document.querySelector(".task");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close-button");
const modalForm = document.getElementById("modal-form");
const modalSubmit = document.getElementById("modal-submit");
const modalName = document.getElementById("modal-name");
const email = document.getElementById("modal-email");

// Disabled buttons on default
modalSubmit.disabled = true;
addTask.disabled = true;
clearAll.disabled = true;

// Modal appear on delay
setTimeout((e) => {
  modal.style.display = "block";
}, 3000);

// Modal close on x click
modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

// Submit button disabled if less than 2 characters or empty.
modal.onkeyup = () => {
  if (modalName.value.length > 2 && modalName.value.trim() !== "") {
    modalSubmit.disabled = false;
  } else {
    modalSubmit.disabled = true;
  }
};

// // Email input check
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const modalEmail = document.getElementById("modal-email");
  const modalEmailValue = modalEmail.value;
  const regex =
    /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|outlook|aol|icloud|live|msn)\.(com|org|net|edu|gov|mil|info|biz)$/i;
  if (!regex.test(modalEmailValue)) {
    alert("Invalid email");
    return true;
  } else {
    // Name input from form & display on submission
    const modalFormData = new FormData(modalForm);
    const firstName = modalFormData.get("name");
    const modalMsg = document.getElementById("modal-message");
    modalMsg.innerHTML = `<h2>Thanks ${firstName}. We'll be in touch.</h2>`
    modalForm.style.display = "none";
    e.preventDefault();
    return false;
  }
});

// Checking if input is not empty
inputCheck = () => {
  taskInput.onkeyup = function () {
    taskInput.value.length > 2 && taskInput.value.trim() !== ""
      ? (addTask.disabled = false)
      : (addTask.disabled = true);
  };
};
inputCheck();

// Check if there are tasks to be cleared
clearAllCheck = () => {
  {
    tasksList.children.length >= 0
      ? (clearAll.disabled = false)
      : (clearAll.disabled = true);
  }
};

// Add task to list
addTask.addEventListener("click", function (e) {
  let taskValue = document.querySelector(".task-input-text").value;
  const tasksList = document.querySelector(".tasks");
  //Creating elements
  const taskElement = document.createElement("li");
  const taskFunctions = document.createElement("div");
  const taskClear = document.createElement("button");
  const taskComplete = document.createElement("button");
  const taskText = document.createElement("p");
  //Adding classes to them
  taskFunctions.classList.add("task-functions");
  taskElement.classList.add("task");
  taskClear.classList.add("task-clear-button");
  taskComplete.classList.add("task-complete-button");
  //Appending them
  taskText.append(taskValue);
  tasksList.append(taskElement);
  taskElement.append(taskText);
  taskElement.append(taskFunctions);
  taskElement.append(taskClear);
  taskElement.append(taskComplete);
  taskInput.value = "";
  addTask.disabled = true;
  clearAll.disabled = true;
  console.log(tasksList.children.length);
  clearAllCheck();
  e.preventDefault();
});

// Complete or clear tasks
tasksList.addEventListener("click", (e) => {
  // Complete button
  if (e.target.classList.contains("task-complete-button")) {
    e.target.parentElement.classList.toggle("task-text-done");
    e.preventDefault();
    // Clear button
  } else if (e.target.classList.contains("task-clear-button")) {
    e.target.parentElement.remove();
  }
});

// Clear all tasks function
clearAll.addEventListener("click", (e) => {
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
