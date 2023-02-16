// Bring in variables
let btn = document.getElementById("button");
const heading = document.getElementById("heading");

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
  console.log(state);
};

const darkMode = () => {
  state = "dark"
  heading.style.color = "white";
  btn.style.backgroundColor = "white";
  btn.innerText = "Go Light 🌞";
  btn.style.color = "black";
  document.body.style.backgroundColor = "black";
  console.log(state);
};
