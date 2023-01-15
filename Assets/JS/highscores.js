// enables input of initials to save the score on a leaderboard
// leaderboard is stored locally

// enables click to view locally stored scores 

// enables clearing of scores on click

function saveScore() {
    const scoreObject = {
      initials: initials.value,
      score: score
    };
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push(scoreObject);
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }

