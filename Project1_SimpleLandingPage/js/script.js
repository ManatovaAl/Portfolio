const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Load saved mode
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("darkMode", "disabled");
    toggleBtn.textContent = "🌙";
  }
});
