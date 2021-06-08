
// create a start button
function startQuiz () {

}
// create a timer
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message = 'Quiz Complete';

function countdown() {
    var timeLeft = 60; 
    
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + 'seconds remaining';
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + "seconds remaing";
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timerInterval);
            displayMessage();
        }
    }
) 
}
// create questions
var q1 = ["What does CSS stand for?"]
var q2 = ["What is an array?"]
var q3 = ["What are three coding languages?"]
var q4 = ["What is a boolean?"]
var q5 = ["How does a server function?"]

// when question is answered correctly, presented with another question

// when question is answered incorrectly, time is subtracted from the clock

// when all questions are answered or the timer reaches 0
// then the game is over

// when the game is over, then you can save your intials and score 
