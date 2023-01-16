// declaring connections to HTML file
const startButton = document.getElementById("start");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initials = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const timeLeft = document.getElementById("time");

// hides the questions, choices and end screens until they're required
questionTitle.classList.add("hide");
choices.classList.add("hide");
endScreen.classList.add("hide");

// variable to keep track of the current question
let currentQuestion = 0;

// variable to store the user's score
let score = 0;

// variable to store the timer
let timer;

// Questions
var question = [
  {
    question: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheet",
      "Cuddly Sizzling Sausages",
      "It doesn't stand for anything",
      "None of the above",
    ],
    correctAnswer: "Cascading Style Sheet",
  },

  {
    question: "What is the purpose of Bootstrap?",
    answers: [
      "Connects HTML and CSS",
      "Provides easy frameworks for CSS",
      "It is a Javascript utility",
      "None of the above",
    ],
    correctAnswer: "Provides easy frameworks for CSS",
  },

  {
    question: "Which of these is NOT a JS data type?",
    answers: [
        "boolean", 
        "string", 
        "undefined", 
        "None of the above"
    ],
    correctAnswer: "None of the above",
  },

  {
    question:
      "Which of the following function of Array object removes the last element from an array and returns that element?",
    answers: [
        "map()", 
        "push()", 
        "pop()", 
        "None of the above"
    ],
    correctAnswer: "pop()",
  },

  {
    question: "Which HTML element do you use to link to JavaScript?",
    answers: [
        "javascript", 
        "script", 
        "link", 
        "None of the above"
    ],
    correctAnswer: "script",
  },

  {
    question:
      "Which of the following elements are affected by margin-top and margin-bottom settings?",
    answers: [
      "block and inline",
      "only inline",
      "only block",
      "None of the above",
    ],
    correctAnswer: "block and inline",
  },
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  timer = setInterval(countdown, 1000);
  time = 60;
  startButton.classList.add("hide");
  questionTitle.classList.remove("hide");
  choices.classList.remove("hide");
  showQuestion(currentQuestion);
  displayHighscores();
}

function showQuestion(questionIndex) {
  const currentQuestion = question[questionIndex];
  questionTitle.textContent = currentQuestion.question;
  choices.innerHTML = "";
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = checkAnswer;
    choices.appendChild(button);
  }
}

//checks answer is correct
// if incorrect, removes 10 seconds
function checkAnswer() {
  if (this.textContent === question[currentQuestion].correctAnswer) {
    score++;
  } else {
    time -= 10;
  }
  currentQuestion++;
  if (currentQuestion === question.length) {
    showScore();
  } else {
    showQuestion(currentQuestion);
  }
}

function showScore() {
  clearInterval(timer);
  endScreen.classList.remove("hide");
  finalScore.textContent = score;
  submitButton.onclick = saveScore;
}

// // stores score 
// submitButton.addEventListener("click", saveScore);  
//   function saveScore() {

// }

// saves score to local storage and clears the box after clicking submit
submitButton.addEventListener("click", function() {
  initials.value = "";
  saveScore();
});

function countdown() {
  timeLeft.textContent = time;
  if (time <= 0) {
    clearInterval(timer);
    showScore();
  }
  time--;
}

document.addEventListener("DOMContentLoaded", function () {
  displayHighscores();
});
