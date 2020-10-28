var questions = [
    {
        q: "When is my birthday?",
        first: "blabla",
        second: "15 Aug 1999",
        third: "IDK",
        a: "15 Dec 1998"
    },
    {
        q: "When is YOUR birthday?",
        first: "I swear I don't know",
        second: "Leave me alone",
        third: "Check Facebook",
        a: "30 Aug 2000"
    },
    {
        q: "What is a birthday?",
        first: "Ask Google",
        second: "Leave me alone",
        third: "Lasagnas",
        a: "Party"
    }
];

var btnGenerate = document.querySelector("#btnGenerate");
var question = document.querySelector("#question");
var optionBox = document.querySelector(".optionBox");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var timer = document.querySelector("#timer");
var isTimerRunning = false;
var scoreElem = document.querySelector("#score");
var answer = "";
var score = 0;

// Initialize game
window.onload = function() {
    score = 0;
    scoreElem.innerText = 0;
    generateQuestion();
    startTimer(5, timer);
    isTimerRunning = true;
}

option1.addEventListener("click", function() {
    if (validAnswer(option1.innerText)) {
        incrementScore();
        generateQuestion();
    }
    else {
        // Show error
        console.log("err");
    }
});
option2.addEventListener("click", function() {
    if (validAnswer(option2.innerText)) {
        incrementScore();   
        generateQuestion();
    }
    else {
        // Show error
        console.log("err");
    }
});
option3.addEventListener("click", function() {
    if (validAnswer(option3.innerText)) {
        incrementScore();
        generateQuestion();
    }
    else {
        // Show error
        console.log("err");
    }
});
option4.addEventListener("click", function() {
    if (validAnswer(option4.innerText)) {
        incrementScore();
        generateQuestion();
    }
    else {
        // Show error
        console.log("err");
    }
});

btnGenerate.addEventListener("click", function() {
    generateQuestion();
});

// BBZLD_02: to solve multiple clicks on timer
timer.addEventListener("click", function() {
    var duration = 5;
    startTimer(5, timer);
    isTimerRunning = true;
    // console.log("isTimerRunning: " + isTimerRunning);
});

function startTimer(duration, display) {
    var start = Date.now(), diff, minutes, seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerText = minutes + ":" + seconds;
        if (minutes == 0 && seconds == 0) {
            clearInterval(intervalId);
            isTimerRunning = false;
            stopGame();
            // console.log("isTimerRunning: " + isTimerRunning);
        }
    }
    timer();
    var intervalId = setInterval(timer, 1000);
}

function generateQuestion() {
    var randomIndex = Math.floor(Math.random() * 3);
    var data = questions[randomIndex];

    // Update answer and DOM
    question.innerText = data.q;
    answer = data.a;
    console.log("answer is " + answer);
    option1.innerText = data.first;
    option2.innerText = data.second;
    option3.innerText = data.a;
    option4.innerText = data.third;
}

function validAnswer(str) {
    return answer == str;
}

function incrementScore() {
    score++;
    scoreElem.innerText = score;
}

function stopGame() {
    window.location.href = "stopgame.html";
    localStorage.setItem("score", score);
}