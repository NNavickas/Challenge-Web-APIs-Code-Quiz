const startButton = document.getElementById("start");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initials = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const timeLeft = document.getElementById("time");

questionTitle.classList.add("hide");
choices.classList.add("hide");

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

submitButton.addEventListener("click", saveScore);

function saveScore() {
  // code to save the score and initials here
}

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

// // event listener to change to display the question when we click start Quiz
// // document.getElementById does
// var startButton = document.getElementById("start");

// startButton.addEventListener("click", function () {
//   var startButton2 = document.getElementById("questions"); // selecting the questions ID from the HTML
//   startButton2.classList.remove("hide"); // removing the hide from the question so it can be displayed
// });

// // create a function to start the quiz
// function startQuiz() {
//   // start the timer, total 10 mins
//   timer = setInterval(countdown, 600);

//   // show the first question
//   showQuestion(currentQuestion);
// }
////////////////////////////////////////////////////////////////////////////
// // create a function to show the current question
// function showQuestion(questionIndex) {
//   // get the current question
//   const currentQuestion = questions[questionIndex];

//   // display the question
//   const questionTitle = document.getElementById("question-title");
//   questionTitle.textContent = currentQuestion.question;

//   // display the answers
//   const answersElement = document.getElementById("answers");
//   answersElement.innerHTML = "";
//   for (let i = 0; i < questions.answers.length; i++) {
//     const answer = questions.answers[i];
//     const button = document.createElement("button");
//     button.textContent = answer;
//     button.onclick = checkAnswer;
//     answersElement.appendChild(button);
//   }
// }
//////////////////////////////////////////////////////////////////////////
// function checkAnswer() {
//     // check if the answer is correct
//     if (this.textContent === questions[currentQuestion].correctAnswer) {
//       score++;
//     } else {
//       // subtract 10 seconds from the timer if the answer is incorrect
//       timer -= 10;
//     }

//     // go to the next question
//     currentQuestion++;

//     // check if there are more questions
//     if (currentQuestion === questions.length) {
//       // show the score
//       showScore();
//     } else {
//       // show the next question
//       showQuestion(currentQuestion);
//     }
//   }

// // create a function to show the score
// function showScore() {
//   clearInterval(timer);
//   const scoreElement = document.getElementById("score");
//   scoreElement.textContent = `Your score: ${score}`;

//   // code to save the score and initials here
// }

// // create a function to handle the timer
// function countdown() {
//   // get the time left
//   const timeLeft = document.getElementById("time-left");
//   timeLeft.textContent = time;

//   // check if the timer has reached 0
//   if (time === 0) {
//     clearInterval(timer);
//     showScore();
//   }
//   time--;
// }

////////////////////

// // console.log(questions.question1.question, questions.question1.correct)
// // console.log(questions.question1.question, "this is question 2")
// // console.log(questions.question1.question, "this is question 3")
// // console.log(questions.question1.question, "this is question 4")
// // console.log(questions.question1.question, "this is question 5")
// // console.log(questions.question1.question, "this is question 6")

// // //show questions on webpage
// // var questionsDisplay = document.getElementById("question-title");

// // console.log(questionsDisplay);

// // //text content is pulling the content to display in Questions
// // questionsDisplay.textContent = questions.question1.question

// // var answerOptions = document.getElementById("choices")
// // console.log()
// // questions.question1.answer.forEach(function(item)  { // for each acts as a loop, iterating through the array
// //     console.log(item)
// // })

// // // creating an unordered list
// // //answerOptions.appendChild(document.createElement("ul")); // figure out how to get this to work by additng to the list

// // //var ul = document.createElement("ul").appendChild("ul")

// // // event listener listens for click on correct answer

// // // if answer correct then add one to the score &
// // // display Correct! for 0.75 seconds &
// // // progress to next question

// // // if answer incorrect, take 10 seconds off the timer &
// // // display Wrong! for 0.75 seconds
// // // advance to next question

// // // displays end-screen (switch to highscores.js)
