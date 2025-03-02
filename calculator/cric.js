let score = 0;
let balls = 6;
const batButton = document.getElementById("bat");
const resetButton = document.getElementById("reset");
const scoreDiv = document.getElementById("score");
const statusDiv = document.getElementById("status");

function getRandomRun() {
  return Math.floor(Math.random() * 7);
}

function updateScore() {
  scoreDiv.innerText = `Score: ${score}`;
  statusDiv.innerText = `Balls left: ${balls}`;
}

batButton.addEventListener("click", () => {
  if (balls > 0) {
    const run = getRandomRun();
    score += run;
    balls--;
    if (run === 0) {
      statusDiv.innerText = "You are out!";
      batButton.disabled = true;
    } else if (balls === 0) {
      statusDiv.innerText = `Game over! Final Score: ${score}`;
      batButton.disabled = true;
    } else {
      updateScore();
    }
  }
});

resetButton.addEventListener("click", () => {
  score = 0;
  balls = 6;
  batButton.disabled = false;
  updateScore();
});

updateScore();
