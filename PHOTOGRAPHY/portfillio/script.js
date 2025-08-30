// Toggle Dark/Light Mode
const toggleSwitch = document.getElementById("modeToggle");
const body = document.body;

toggleSwitch.addEventListener("change", () => {
  body.classList.toggle("dark");
});