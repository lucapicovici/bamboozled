var questions = [
    {
        q: "Cand e ziua lui Luca?",
        a: "15 Dec 1998",
        first: "13 Dec 1999",
        second: "16 Nov 1998",
        third: "Vezi Facebook"
    },
    {
        q: "Cate picioare are un caine care sta in doua picioare?",
        a: "Minim 2, maxim 4",
        first: "Maxim 4, minim 5",
        second: "Blana de samur",
        third: "2,50"
    },
    {
        q: "Ce e o zi de nastere?",
        a: "Acea zi din an cand ti se duc 50 lei",
        first: "Lei 50 ti se duc",
        second: "Cand trebuie sa stai pana la 11 noaptea sa ii scrii la multi ani",
        third: "Imi place cand cineva imi face cinste"
    },
    {
        q: "Ce trece peste apa si nu face valuri?",
        a: "Podul",
        first: "Alte molecule de apa",
        second: "Iisus din Nazaret",
        third: "Nu stiu, mi-e frica de apa"
    },
    {
        q: "Daca fierb 3 oua in 10 minute, 56 de oua in cateva minute fierb?",
        a: "Tot 10 minute daca incap in oala",
        first: "Cine ar fierbe 56 de oua deodata?",
        second: "Nu se pune problema pentru ca doua ajung la o masa",
        third: "Atentie la urticarie"
    },
    {
        q: "De ce Robotii si nu Unguru Bulan?",
        a: "Doamna, cat costa un picur de benzina?",
        first: "Pentru ca Robotii te duce cu gandul la AI, si AI-ul ii smecher",
        second: "Pentru ca Robotii au grafica mai buna, un limbaj mai sofisticat si glume mai inteligente",
        third: "Creative Monkeyz"
    },
    {
        q: "De ce Trump arata ca o portocala?",
        a: "Asa s-a nascut",
        first: "De la tratamentul anti-COVID",
        second: "Stra-stra-strabunicul lui manca multe fructe",
        third: "De ce Trump si nu Hillary?"
    },
    {
        q: "Bolognaise sau carbonara?",
        a: "Bolognaise, ca-i cu porodici",
        first: "Bai, dar voi ati incercat Pesto?",
        second: "Cu sau fara, macaroanele sunt tot macaroane",
        third: "Carbonara"
    },
    {
        q: "De ce platim apa daca e vitala?",
        a: "Se numeste capitalism",
        first: "Ca sa nu o luam gratis",
        second: "Ca sa gratis nu o luam",
        third: "Pentru ca trebuie"
    },
    {
        q: "De ce e luna alba si nu galbena?",
        a: "Ca sa moara de ciuda Marte",
        first: "Ca n-o stat destul la soare",
        second: "Lipsa de calciu si vitamina D",
        third: "Nu stiu"
    },
    {
        q: "De ce pamantul nu-i plat?",
        a: "Bai Samuele ce-ai facut ba",
        first: "Pentru ca e rotund",
        second: "Pentru ca societatea nu te accepta daca esti plat(a)",
        third: "Ca are colturi"
    },
    {
        q: "De ce moldovenii fac muzica mai buna decat romanii?",
        a: "Pentru ca rusii au cultura mai vasta",
        first: "Moldovenii s-au nascut",
        second: "Dieselll",
        third: "Pentru ca o fac din suflet"
    },
    {
        q: "Esti de parere ca in Transilvania am trai mai bine daca ne-am lua independenta?",
        a: "Am trai mai bine si daca am renunta doar la Teleorman",
        first: "Nu stiu, dar mie imi place la Cluj.",
        second: "Le a magyarokkal!",
        third: "Eu zic ca suntem ok."
    },
    {
        q: "Natura sau Universul?",
        a: "Ambele",
        first: "Pai da' nu poti sa alegi",
        second: "Imi plac padurile toamna",
        third: "Sau"
    },
    {
        q: "Caragiale sau Chaplin",
        a: "Amandoi au mustata",
        first: "Unul mai batran ca altul",
        second: "Chaplin",
        third: "Caragiale"
    },
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
    startTimer(120, timer);
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