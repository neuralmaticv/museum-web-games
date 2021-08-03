// const data = require('./zagonetke.json');
// console.log(data)

import pitanjaLvl1 from "../data/pitanja1.js"
import pitanjaLvl2 from "../data/pitanja2.js"
import zagonetke from "../data/zagonetke.js"

/*
console.log(pitanjaLvl1);
console.log(pitanjaLvl2);
console.log(zagonetke);
*/

let start = document.querySelector("#start");

let points = 0;  // jedan tacan odgovor, jedan poen
let counter = 0;
let back = document.querySelector("#back");
let next = document.querySelector("#nextQuestion");
let confirmAnswer = document.querySelector("#confirmAnswer")
let userAnswer = document.querySelector("#yourAnswer1");
let trueAnswer = ""
let question = document.querySelector("#pitanje");

let wrong = new Audio('Zvuci/wrong.wav');
let correct = new Audio('Zvuci/correct.wav');
let seconds = undefined;
let randomNumbers = []
let n = randomGenerator;
let countdown = undefined;


function backToMenu() {
    document.getElementById('question0').style.display = "block";
    document.getElementById('question1').style.display = "none";
    counter = 0;
    points = 0;
}

function gameEnd() {
    question.textContent = "Imali ste " + points + " tačnih odgovora";
    back.style.display = "inline";
    confirmAnswer.style.display = "none";
    next.style.display = "none";
}

function newRiddle() {
    if (counter == 10) {
        gameEnd();
    }
    clearInterval(countdown);
    document.getElementById("timer").textContent = 10;
    seconds = 10;
    countdown = setInterval(function () {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
            question.textContent = "Vrijeme je isteklo";
            userAnswer.disabled = true;
            confirmAnswer.disabled = true;
            userAnswer.style.backgroundColor = 'red';
            wrong.play();
            if (counter == 10)
                gameEnd();

        }
    }, 1000);
    userAnswer.disabled = false;
    confirmAnswer.disabled = false;
    userAnswer.value = "";
    userAnswer.style.backgroundColor = 'rgb(255, 255, 255)';

    let n;
    while (true) {
        n = randomNumber(9)
        if (!(n in randomNumbers)) {
            randomNumbers.push(n);
            counter++;
            break;
        }
    }

    question.textContent = zagonetke[n].question;
    trueAnswer = zagonetke[n].correctAnswer;
    console.log("Pitanje broj %d, odgovor = %s;", counter, trueAnswer);
}

function isAnswerTrue() {
    if (seconds > 0) {
        clearInterval(countdown);
        if (userAnswer.value.toUpperCase() === trueAnswer.toUpperCase()) {
            console.log("tacno");
            points++
            userAnswer.style.backgroundColor = 'rgb(125, 235, 52)';
            correct.play();

        }

        else {
            console.log("netacno");
            userAnswer.style.backgroundColor = 'rgb(230, 57, 70)';
            wrong.play();
        }

        userAnswer.disabled = true;
        confirmAnswer.disabled = true;

        if (counter == 10)
            gameEnd();
    }
}

function startQuiz() {
    document.getElementById('question0').style.display = "none";
    document.getElementById('question1').style.display = "block";
    back.style.display = "none";
    confirmAnswer.style.display = "inline";
    next.style.display = "inline";
    newRiddle();
}



function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function randomGenerator() {
    let randomNumbers = [];
    for (let i = 0; i < 4; i++) {
        let n = randomNumber(9);
        if (!(n in randomNumbers)) {
            randomNumbers.push(n);
        }
    }
    return randomNumbers;
}

start.addEventListener("click", startQuiz);
next.addEventListener("click", newRiddle);
confirmAnswer.addEventListener("click", isAnswerTrue);
back.addEventListener("click", backToMenu);
