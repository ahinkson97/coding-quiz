var sec = document.querySelector("section");
var h2El = document.querySelector("h2");
var stage = 0;

// create a start button
//function startQuiz() {

/*
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
*/
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
    {title: "What are three coding languages?",
    answers: [
        "CSS",
        "HTML",
        "iMessage",
        "JavaScript",
    ],
    correct: 3,},
    {title: "True or False, an array is an object.",
    answer: "True",
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

    for (var i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        var btnEl = document.createElement("button");
        btnEl.textContent = answer;
        btnEl.setAttribute("class", "btn");
        btnEl.setAttribute("data-index", i);
        sec.appendChild(btnEl);
    }
};

function renderAnswer(){
    var answer = answers[stage];

    for (var i = 0; i < answers.questions.length; i++) {
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
        h2El.textContent = "Quiz Complete";
    }
    var index = parseInt(element.dataset.index);
}
});

renderQuestion();

// when question is answered correctly, presented with another question

// when question is answered incorrectly, time is subtracted from the clock

// when all questions are answered or the timer reaches 0
// then the game is over

// when the game is over, then you can save your intials and score 
