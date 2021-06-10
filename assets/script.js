var sec = document.querySelector("section");
var h2El = document.querySelector("h2");
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var timerInterval; 
var stage = 0;
var timeLeft = 60;
var scoreBoard = document.querySelector("HighScore");
var initials = document.querySelector("initials");
var score = document.querySelector("score");
var HighScores = JSON.parse(localStorage.getItem("HighScores"))||[]
// create a start button
function startQuiz() {


// create a timer

renderQuestion();
countdown();
//var message = 'Quiz Complete';
}
function countdown() {

     timerInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + 'seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + "seconds remaing";
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timerInterval);
            displayMessage();
        }
    }, 1000
    )
}

// create questions
var questions = [
    {title: "What does CSS stand for?",
    answers: [
        "Cool Simple Sheet",
        "Cascading Style Sheets",
        "Cascading Silly Style",
        "Computer Shelving System",
    ],
    correct: 1,},
    {title: "What is an example of a coding language?",
    answers: [
        "IM",
        "HTML",
        "iMessage",
        "Jitter Bug",
    ],
    correct: 1,},
    {title: "What is boolean and what does it return?",
    answers: [
        "An object, A straight line with an arrow ",
        "A fun guy, true or false",
        "A ghost, squares and triangles",
        "A data type, true or false value",
    ],
    correct: 1,},
    {title: "What does DRY stand for?",
    answers: [
            "Don't Recognize Yourself",
            "Do Reach Yoga",
            "Don't Repeat Yourself",
            "Dry Reading Yawn",
    ],
    correct: 1,},
    {title: "How often should you push to GitHub?",
    answers: [
        "Every 30 minutes",
        "Every significant change",
        "About every 3 changes",
        "Every minute.",
    ],
    correct: 1},
]

function renderQuestion(){
    var question = questions[stage];
    h2El.textContent = question.title;
    sec.innerHTML = "";
    for (var i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        var btnEl = document.createElement("button");
        btnEl.textContent = answer;
        btnEl.setAttribute("class", "btn");
        btnEl.setAttribute("data-index", i);
        sec.appendChild(btnEl);
    }
};


sec.addEventListener('click', function(event) {
var element = event.target; 
if (element.matches("button")) {
    if(stage < questions.length - 1) {
        stage++;
        renderQuestion();
    } else {
        clearInterval(timerInterval);
        h2El.textContent = "Quiz Complete";
        sec.innerHTML = "";
        //score board; create event listner 
    }
    var index = parseInt(element.dataset.index);
}
});
score.addEventListener('click', function(event) {
    var initialsValue = initials.value
    var highscore = {'Score': timeLeft, 'initial' : initialsValue}
    HighScores.push(highscore)
    localStorage.setItem("HighScores", Highscores)
})


// when question is answered correctly, presented with another question

// when question is answered incorrectly, time is subtracted from the clock

// when all questions are answered or the timer reaches 0
// then the game is over

// when the game is over, then you can save your intials and score 
//score = timeLeft