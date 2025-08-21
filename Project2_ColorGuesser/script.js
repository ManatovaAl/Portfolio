const colors = [
  "red","blue","green","yellow","purple","orange",
  "pink","brown","black","white","gray","cyan","magenta",
  "lime","teal","navy","maroon","olive","silver","gold"
];

let score = 0;
let correctColor = "";

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const gameDiv = document.getElementById("game");
const title = document.getElementById("title");
const optionsDiv = document.getElementById("options");
const scoreDisplay = document.getElementById("score");

startBtn.addEventListener("click", startGame);
backBtn.addEventListener("click", backToTitle);

function startGame() {
  startBtn.classList.add("hidden");
  title.classList.add("hidden");
  gameDiv.classList.remove("hidden");
  score = 0;
  updateScore();
  newRound();
}

function backToTitle() {
  gameDiv.classList.add("hidden");
  startBtn.classList.remove("hidden");
  title.classList.remove("hidden");
  document.body.style.backgroundColor = "#f5f5f5"; // reset background
}

function updateScore() {
  scoreDisplay.textContent = "Score: " + score;
}

function newRound() {
  // Pick a random correct color
  correctColor = colors[Math.floor(Math.random() * colors.length)];

  // Set background color
  document.body.style.backgroundColor = correctColor;

  // Generate 3 wrong options
  let options = [correctColor];
  while (options.length < 4) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (!options.includes(randomColor)) {
      options.push(randomColor);
    }
  }

  // Shuffle options
  options = options.sort(() => Math.random() - 0.5);

  // Display options
  optionsDiv.innerHTML = "";
  options.forEach(color => {
    const btn = document.createElement("button");
    btn.textContent = color;
    btn.addEventListener("click", () => checkAnswer(color));
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selectedColor) {
  if (selectedColor === correctColor) {
    score++;
  } else {
    score = 0; // Reset score if wrong
  }
  updateScore();
  newRound();
}
