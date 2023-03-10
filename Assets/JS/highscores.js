

// ensure that the highscores are diaplayed when the window loads
// previously this did not work as the DOM wasn't loading properly before the script was running
window.addEventListener("load", displayHighscores);

// function saveScore()
function saveScore(initials, score) {
  const scoreObject = {
    initials: initials,
    score: score,
  };
  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push(scoreObject);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  displayHighscores();
}

// function displayHighscores() stored in local storage

function displayHighscores() {
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.sort((a, b) => b.score - a.score);
  
  const highscoresList = document.getElementById("highscores");
  if(highscoresList){
    highscoresList.innerHTML = "";
  }

  if (highscores.length > 0) {
    for (let i = 0; i < highscores.length; i++) {
      const score = highscores[i];
      const listItem = document.createElement("li");
      listItem.textContent = `${score.initials} - ${score.score}`;
      highscoresList.appendChild(listItem);
    }
  }
}

// utility to clear the leaderboard from local storage and webpage displaying it
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function () {
  localStorage.removeItem("highscores");
  displayHighscores();
});
