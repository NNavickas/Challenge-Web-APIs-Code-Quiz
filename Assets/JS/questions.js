// event listener to change to display the question when we click start Quiz
// document.getElementById does 
var startButton = document.getElementById("start");

startButton.addEventListener("click", function() {
    var startButton2 = document.getElementById("questions"); // selecting the questions ID from the HTML
    startButton2.classList.remove("hide"); // removing the hide from the question so it can be displayed
})



// Questions
var questions = {
    question1: {
        question: "What does CSS stand for?",
        answer: ["Cascading Style Sheet", "Cuddly Sizzling Sausages", "It doesn't stand for anything", "None of the above"],
        correct: "Cascading Style Sheet"
    },

    question2: {
        question: "",
        answer: [""],
        correct: "",
    },

    question3: {
        question: "",
        answer: [""],
        correct: "",
    },

    question4: {
        question: "",
        answer: [""],
        correct: "",
    },

    question5: {
        question: "",
        answer: [""],
        correct: "",
    },

    question6: {
        question: "",
        answer: [""],
        correct: "",
    },
}

console.log(questions.question1.question, questions.question1.correct)
console.log(questions.question1.question, "this is question 2")
console.log(questions.question1.question, "this is question 3")
console.log(questions.question1.question, "this is question 4")
console.log(questions.question1.question, "this is question 5")
console.log(questions.question1.question, "this is question 6")

//show questions on webpage 
var questionsDisplay = document.getElementById("question-title");

console.log(questionsDisplay);

//text content is pulling the content to display in Questions
questionsDisplay.textContent = questions.question1.question

var answerOptions = document.getElementById("choices")
console.log()
questions.question1.answer.forEach(function(item)  { // for each acts as a loop, iterating through the array
    console.log(item)
})

// creating an unordered list
//answerOptions.appendChild(document.createElement("ul")); // figure out how to get this to work by additng to the list

var ul = document.createElement("ul").appendChild("ul")

// event listener listens for click on correct answer 



// if answer correct then add one to the score & 
// display Correct! for 0.75 seconds &
// progress to next question 



// if answer incorrect, take 10 seconds off the timer & 
// display Wrong! for 0.75 seconds
// advance to next question 