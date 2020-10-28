var questions = [
    {
        q: "When is my birthday?",
        a: "15 Dec 1998",
        first: "blabla",
        second: "15 Aug 1999",
        third: "IDK"
    },
    {
        q: "When is YOUR birthday?",
        a: "30 Aug 2000",
        first: "I swear I don't know",
        second: "Leave me alone",
        third: "Check Facebook"
    },
    {
        q: "What is a birthday?",
        a: "Party",
        first: "Ask Google",
        second: "Leave me alone",
        third: "Lasagnas"
    },
    {
        q: "Ce trece peste apa si nu face valuri?",
        a: "Podul",
        first: "Alte molecule de apa",
        second: "Podul",
        third: "Nu stiu, mi-e frica de apa"
    },
    {
        q: "Daca fierb 3 oua in 10 minute, 56 de oua in cateva minute fierb?",
        a: "Tot 10 minute daca incap in oala",
        first: "",
        second: "",
        third: ""
    },
    {
        q: "De ce Robotii si nu Unguru Bulan?",
        a: "Pentru ca Robotii au grafica mai buna, un limbaj mai sofisticat si glume mai inteligente",
        first: "",
        second: "",
        third: ""
    },
    {
        q: "De ce Trump arata ca o portocala?",
        a: "Asa s-a nascut",
        first: "",
        second: "",
        third: ""
    },
    {
        q: "Bolognaise sau carbonara?",
        a: "Carbonara",
        first: "",
        second: "",
        third: ""
    },
    {
        q: "De ce platim apa daca e vitala?",
        a: "Se numeste capitalism",
        first: "",
        second: "",
        third: ""
    },
    {
        q: "De ce e luna alba si nu galbena?",
        a: "Ca sa moara de ciuda Marte",
        first: "",
        second: "",
        third: ""
    },
    {
        q: "De ce pamantul nu-i plat?",
        a: "Ca are colturi",
        first: "",
        second: "",
        third: ""
    },
    {
        q: "De ce moldovenii fac muzica mai buna decat romanii?",
        a: "Pentru ca rusii au cultura mai vasta",
        first: "",
        second: "",
        third: ""
    },
    {
        q: "Esti de parere ca in Transilvania am trai mai bine daca ne-am lua independenta?",
        a: "Am trai mai bine si daca am renunta doar la Teleorman",
        first: "",
        second: "",
        third: ""
    }
];

var btnSkip = document.querySelector("#btnSkip");
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
    startTimer(60000, timer);
    isTimerRunning = true;
}

option1.addEventListener("click", function() {
    if (validAnswer(option1.innerText)) {
        incrementScore();
    }
    else {
        // Show error
        console.log("err");
        decreaseScore();
    }
    generateQuestion();
});
option2.addEventListener("click", function() {
    if (validAnswer(option2.innerText)) {
        incrementScore();   
    }
    else {
        // Show error
        console.log("err");
        decreaseScore();
    }
    generateQuestion();
});
option3.addEventListener("click", function() {
    if (validAnswer(option3.innerText)) {
        incrementScore();
    }
    else {
        // Show error
        console.log("err");
        decreaseScore();
    }
    generateQuestion();
});
option4.addEventListener("click", function() {
    if (validAnswer(option4.innerText)) {
        incrementScore();
    }
    else {
        // Show error
        console.log("err");
        decreaseScore();
    }
    generateQuestion();
});

btnSkip.addEventListener("click", function() {
    generateQuestion();
});

// BBZLD_02: to solve multiple clicks on timer
// timer.addEventListener("click", function() {
//     var duration = 5;
//     startTimer(5, timer);
//     isTimerRunning = true;
//     // console.log("isTimerRunning: " + isTimerRunning);
// });

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
    var questionsCount = questions.length;
    var randomIndex = Math.floor(Math.random() * questionsCount);
    var data = questions[randomIndex];

    // Update answer and DOM
    question.innerText = data.q;
    answer = data.a;
    // console.log("answer is " + answer);
    var optionsArr = [option1, option2, option3, option4];
    optionsArr = shuffleArray(optionsArr);

    optionsArr[0].innerText = data.first;
    optionsArr[1].innerText = data.second;
    optionsArr[2].innerText = data.a;
    optionsArr[3].innerText = data.third;
}

function validAnswer(str) {
    return answer == str;
}

function incrementScore() {
    score++;
    scoreElem.innerText = score;
}

function decreaseScore() {
    if (score > 0) score--;
    else score = 0;
    scoreElem.innerText = score;
}

function stopGame() {
    window.location.href = "stopgame.html";
    localStorage.setItem("score", score);
}

function shuffleArray(arr) {
    for (var c = arr.length - 1; c > 0; c--) {
      var b = Math.floor(Math.random() * (c + 1));
      var a = arr[c];
      arr[c] = arr[b];
      arr[b] = a;
    }
    return arr;
  };