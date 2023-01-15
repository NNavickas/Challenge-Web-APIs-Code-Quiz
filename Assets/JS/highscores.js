// enables input of initials to save the score on a leaderboard
// leaderboard is stored locally

// enables click to view locally stored scores

// enables clearing of scores on click

// function saveScore() {
function saveScore() {
  const scoreObject = {
    initials: initials.value,
    score: score,
  };
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push(scoreObject);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  displayHighscores();
}

// function displayHighscores() {
//   const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
//   highscores.sort((a, b) => b.score - a.score);

function displayHighscores() {
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.sort((a, b) => b.score - a.score);

  const highscoresList = document.getElementById("highscores");
  highscoresList.innerHTML = "";

  if (highscores.length > 0) {
    for (let i = 0; i < highscores.length; i++) {
      const score = highscores[i];
      const listItem = document.createElement("li");
      listItem.textContent = `${score.initials} - ${score.score}`;
      highscoresList.appendChild(listItem);
    }
  }
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function () {
  localStorage.removeItem("highscores");
  displayHighscores();
});
