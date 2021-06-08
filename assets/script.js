
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
var q2 = ["True or False, an array is an object."]
var q3 = ["What are three coding languages?"]
var q4 = ["Select three Primitve types."]
var q5 = ["What does DRY mean?"]

var a1 = ["Cute Smart Styles, Cascading Silly Sheets, Cascading Style Sheets"]
var a2 = ["True"]
var a3 = ["CSS, Roblox, HTML, iMessage, JavaScript,"]
var a4 = ["Boolean, String, Number, Understand, Variable"]
var a5 = ["Don't Recognize Yourself, Don't Reuse Yeast, Don't Repeat Yourself"]

// when question is answered correctly, presented with another question

// when question is answered incorrectly, time is subtracted from the clock

// when all questions are answered or the timer reaches 0
// then the game is over

// when the game is over, then you can save your intials and score 
