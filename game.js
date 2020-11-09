var questions = [
    {
        q: "Când e ziua lui Luca?",
        a: "15 Dec 1998",
        first: "13 Dec 1999",
        second: "Vezi Facebook",
    },
    {
        q: "Câte picioare are un câine care stă în două picioare?",
        a: "Minim 2, maxim 4",
        first: "Maxim 4, minim 5",
        second: "2,50"
    },
    {
        q: "Ce e o zi de naștere?",
        a: "Tot o zi, doar că ți se duc 50 lei",
        first: "O zi",
        second: "Când trebuie să stai până la 11 noaptea să îi scrii la mulți ani"
    },
    {
        q: "Ce trece peste apă și nu face valuri?",
        a: "Podul",
        first: "Nu știu, mi-e frică de apă",
        second: "Iisus din Nazaret"
    },
    {
        q: "Dacă fierb 3 ouă în 10 minute, 56 de ouă în câte minute fierb?",
        a: "Tot 10 minute dacă încap în oală",
        first: "Cine ar fierbe 56 de ouă deodată?",
        second: "Nu se pune problema pentru că două ajung la o masă"
    },
    {
        q: "De ce Trump arată ca o portocală?",
        a: "Așa s-a născut",
        first: "De la tratamentul anti-COVID",
        second: "Taică-so mănâncă 2kg de fructe pe zi"
    },
    {
        q: "Bolognaise sau carbonara?",
        a: "Bolognaise, că-i cu porodici",
        first: "Pesto",
        second: "Carbonara"
    },
    {
        q: "De ce plătim apa dacă e vitală?",
        a: "Se numește capitalism",
        first: "Ca să nu o luăm gratis",
        second: "Ca să gratis nu o luăm"
    },
    {
        q: "De ce e luna albă și nu galbenă?",
        a: "Ca să moară de ciudă Marte",
        first: "Că n-o stat destul la soare",
        second: "Lipsă de calciu și vitamina D"
    },
    {
        q: "De ce pământul nu-i plat?",
        a: "Pentru că e rotund",
        first: "Băi Samuele, ce-ai facut bă",
        second: "Pentru că societatea nu te acceptă daca ești plat(ă)"
    },
    {
        q: "De ce moldovenii fac muzică mai bună decât românii?",
        a: "Pentru că rușii au cultura mai vastă",
        first: "Moldovenii s-au născut",
        second: "Dieselll"
    },
    {
        q: "Caragiale sau Chaplin",
        a: "Amandoi au mustață",
        first: "Caragiale",
        second: "Chaplin"
    },
    {
        q: "Am o căsuță mică...",
        a: "Așa, așa, așa",
        first: "I-așe ni, păi ui așa și iar așa",
        second: "I-așe ni"
    },
    {
        q: "Când eram tânăr fecior...",
        a: "Eram fala munților",
        first: "Eram spaima fetelor",
        second: "Eram tânăr"
    },
    {
        q: "Foaie verde și-o custură...",
        a: "Să nu-i pici la Koty-n gură",
        first: "Doamne feri s-o iau pă arătură",
        second: "Ceva cu rimă la final"
    },
    {
        q: "Domn detectiv, ...",
        a: "Numa-ncet să nu te-mpiedici",
        first: "Mereț' de pe fânu' meu",
        second: "Cum e la oraș?"
    },
    {
        q: "Avem de-a face...",
        a: "C-un criminal foarte mârșav",
        first: "Cu încălzirea globală",
        second: "Cu mă-ta"
    },
    {
        q: "No bă Vasy, bă, ...",
        a: "Eu vin să iau iapa, mă duc după niște lemne",
        first: "Îmi dai un caltaboș de Crăciun?",
        second: "Cheamă-l pă Baltazar"
    },
    {
        q: "Alcoolul...",
        a: "Te omoară. Te sfințește. Nu stă să glumească cu tine.",
        first: "Stimulează pofta de condus autovehicule",
        second: "Ochiul răului"
    },
    {
        q: "Țuica de prune...",
        a: "Vindecă 6 boli și pe a 7-a o tămăduiește",
        first: "E făcută la cazan",
        second: "Conține alcool"
    },
    {
        q: "Am o căsuță mică...",
        a: "Așa, așa, așa",
        first: "I-așe ni, păi ui așa și iar așa",
        second: "I-așe ni"
    },
    {
        q: "Domnul plutonier, cifra octanică circulă în amândoi și în momentul de față, dar cu cadavrul ăsta avem o problemă...",
        a: "Bă, la mine nu circulă nimeni numa cât are limita de viteză",
        first: "Domn detectiv, o fi avut greutăți la servici",
        second: "O fi avut greutăți cu calu"
    },
    {
        q: "Moartea...",
        a: "Când vine, vine...Asta te caută, mă, nu te iartă. Te seceră.",
        first: "Te pândește la colț",
        second: "E un nou început pentru sufletele noastre"
    },
    {
        q: "Când afară e frig...",
        a: "Marin, pahar!",
        first: "Ne îmbrăcăm adecvat",
        second: "Stăm în casă"
    },
    {
        q: "Ce cauți la armată?",
        a: "Am auzit că se plătește bine",
        first: "O zis mama să mă fac bărbat, că-s incorigibil",
        second: "Vreau să am ocazia să conduc o amfibie cu două motoare, dublu ambreiaj"
    },
    {
        q: "De ce nu ai ajuns la oră online?",
        a: "A trecut o basculă pe lângă casă și mi-a rupt cablul de net",
        first: "Nu s-a combinat bine laptele ăla bătut cu berea",
        second: "N-a mai plătit vecinul internetul"
    },
    {
        q: "De ce te-ai culcat așa târziu?",
        a: "Am scris poezii de dragoste",
        first: "Mia Khalifa",
        second: "9GAG"
    },
    {
        q: "Bulă...",
        a: "Este un personaj clasic al multor opere de artă",
        first: "Îi prieten cu tată-to",
        second: "E ăla cu bancurile"
    },
    {
        q: "De ce îl cheamă Florin Salam?",
        a: "Tată-so, flămând, l-o strigat să aducă mâncare din frigider",
        first: "Florin la tablă nu mergea",
        second: "Inițial și-a deschis un magazin alimentar cu slană și caltaboș și a decis să păstreze numele"
    },
    {
        q: "De ce îl cheamă Sandu Ciorbă?",
        a: "Pasionat fiind de mâncăruri tradiționale, Alexandru cel excentric a analizat cu mare atenție piața și a decis să aducă ceva nou",
        first: "Mein Fuhrer nu ar fi fost de acord ca lumea să asocieze greșit SS cu Sandu Supă",
        second: "E ăla cu bancurile"
    },
    {
        q: "De ce nu se pune prea multă zacuscă cu ciuperci pe pită?",
        a: "Se rupe pita în bucăți",
        first: "Ca să nu te îngrași",
        second: "Ca să poți mânca și felul doi"
    },
];

var questions2 = [
    {
        q: "Când e ziua lui Luca?",
        a: "15 Dec 1998",
        first: "13 Dec 1999",
        second: "Vezi Facebook",
    },
    {
        q: "Câte picioare are un câine care stă în două picioare?",
        a: "Minim 2, maxim 4",
        first: "Maxim 4, minim 5",
        second: "2,50"
    },
    {
        q: "Ce e o zi de naștere?",
        a: "Tot o zi, doar că ți se duc 50 lei",
        first: "O zi",
        second: "Când trebuie să stai până la 11 noaptea să îi scrii la mulți ani"
    },
    {
        q: "De ce Trump arată ca o portocală?",
        a: "Așa s-a născut",
        first: "De la tratamentul anti-COVID",
        second: "Taică-so mănâncă 2kg de fructe pe zi"
    },
    {
        q: "Bolognaise sau carbonara?",
        a: "Bolognaise, că-i cu porodici",
        first: "Pesto",
        second: "Carbonara"
    }
];

var btnSkip = document.querySelector("#btnSkip");
var question = document.querySelector("#question");
var optionBox = document.querySelector(".optionBox");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var timer = document.querySelector("#timer");
var isTimerRunning = false;
var scoreElem = document.querySelector("#score");
var excludeIndexes = [];
var answer = "";
var score = 0;
var setTime = 120;

// Initialize game
window.onload = function() {
    score = 0;
    scoreElem.innerText = 0;
    excludeIndexes = [];
    generateQuestion();
    startTimer(setTime, timer);
}

document.querySelectorAll(".optionBox").forEach(function(option){
    option.addEventListener("click", function() {
        if (validAnswer(option.innerText)) {
            // Change color to green
            $(option).addClass("correctAnswer");
            incrementScore();
        }
        else {
            // Change color to red
            $(option).addClass("wrongAnswer");
            decreaseScore();
        }
        // Animate buttons when animation finished
        setTimeout(function() {
            $(".options-grid").addClass("transform-active");
            $(".options-grid").on("webkitAnimationEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                $(this).removeClass("transform-active");
            });
            generateQuestion();
        }, 500)
    });
});

btnSkip.addEventListener("click", function() {
    generateQuestion();
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
        }
    }
    timer();
    var intervalId = setInterval(timer, 1000);
}

function generateQuestion() {
    // Clear validating answer classes
    document.querySelectorAll(".optionBox").forEach(function(option){
        $(option).removeClass("wrongAnswer");
        $(option).removeClass("correctAnswer");
    });

    var questionsCount = questions.length;

    // Generate random index
    var randomIndex = Math.floor(Math.random() * questionsCount);

    // Reset array to avoid infinite loop of generating random indexes
    if (excludeIndexes.length === questions.length) {
        excludeIndexes = [];
        console.log("***clear***");
    }

    // Check array if it has been already generated
    while (excludeIndexes.indexOf(randomIndex) >= 0) {
        // If not, generate again
        randomIndex = Math.floor(Math.random() * questionsCount);
    }
    console.log(`Generated #${randomIndex}`);

    // Exclude random index
    excludeIndexes.push(randomIndex);
    console.log(`Add #${randomIndex}`);

    // Pick a new question
    var data = questions[randomIndex];

    // Update answer and DOM
    question.innerText = data.q;
    answer = data.a;
    var optionsArr = [option1, option2, option3];
    optionsArr = shuffleArray(optionsArr);

    optionsArr[0].innerText = data.first;
    optionsArr[1].innerText = data.second;
    optionsArr[2].innerText = data.a;
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