import pitanjaLvl1 from "../data/pitanja1.js"
import zagonetke from "../data/zagonetke.js"


const startButton = document.getElementById("start");
const backButton = document.getElementById("back");
const nextButton1 = document.getElementById("nextQuestionType1");
const nextButton2 = document.getElementById("nextQuestionType2");


let points = 0;  // jedan tacan odgovor, jedan poen
let counter = 0;
const nQuestions = 10;

let confirmAnswer = document.querySelector("#confirmAnswer")
let userAnswer = document.querySelector("#userAnswer");
let trueAnswer = ""
let question = document.querySelector("#pitanjeT2");

let wrong = new Audio('Zvuci/wrong.wav');
let correct = new Audio('Zvuci/correct.wav');
let seconds = undefined;
let randomNumbers = []
let n = randomGenerator;
let countdown = undefined;



const homeScreen = document.getElementById("homeScreen");
const questionFormT1 = document.getElementById("questionType1");
const questionFormT2 = document.getElementById("questionType2");


const questionElement = document.getElementById("pitanjeT1");
const answerButtons = document.getElementById("odgovoriT1");
const submitResult = document.getElementById("submitResult");
const message = document.getElementById("message");
const submitInput = document.getElementById("submitForm");
const userName = document.getElementById("firstName");
const userSurname = document.getElementById("lastName");
const errorMsg = document.getElementById("error-message");
const quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];
const resultsList = document.getElementById("list");
const resultsBtn = document.getElementById("results");
const resultsSection = document.getElementById("resultsList");
const backToHome = document.getElementById("backToHome");
const warnMsg = document.getElementById("warnMessage");
const timer = document.getElementById("timer");
const timerLabel = document.getElementById("base-timer-label");
const timerPath = document.getElementById("base-timer-path-remaining");
const answer = document.getElementById("correctAnswer");

let currentQuestionIndex, shuffledQuestions;
let timePassed, timeLeft;
const timeLimit = 15;
const timeForWARN = 8;
const timeForALERT = 4;
let gameInProgress = true;


function backToMenu() {
    homeScreen.classList.remove("hide");
    questionFormT1.classList.add("hide");
    questionFormT2.classList.add("hide");
    submitResult.classList.add("hide");

    points = counter = 0;
}

function gameEnd() {
    gameInProgress = false;
    message.textContent = "Imali ste " + points + " od 10 tačnih odgovora";

    questionFormT2.classList.add("hide");
    submitResult.classList.remove("hide");

    //confirmAnswer.classList.add("hide");
    //nextButton2.classList.add("hide");
}

function newRiddle() {
    if (counter == nQuestions) {
        gameEnd();
    }

    warnMsg.classList.add("hide");
    timer.classList.remove("hide");
    answer.classList.add("hide");
    timePassed = 0;
    timeLeft = timeLimit;

    clearInterval(countdown);
    seconds = 15;
    timerLabel.textContent = seconds;
    timerPath.classList.remove("red");
    timerPath.classList.remove("orange");
    timerPath.classList.add("green");

    countdown = setInterval(function () {
        seconds--;
        timerLabel.textContent = seconds;
        
        if (seconds <= 0 && gameInProgress) {
            clearInterval(countdown);
            timer.classList.add("hide");
            warnMsg.classList.remove("hide");

            userAnswer.disabled = true;
            confirmAnswer.disabled = true;
            userAnswer.style.backgroundColor = 'red';
            
            wrong.play();
            answer.classList.remove("hide");
            answer.innerHTML = "Tačan odgovor je <b>" + trueAnswer.toLowerCase() + "</b>";
            if (counter == nQuestions) {
                gameEnd();
            }
        }
        
        timePassed = timePassed += 1;
        timeLeft = timeLimit - timePassed;
        setRemainingPathColor(timeLeft);
        setCircleDasharray();
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
    console.log("Pitanje broj %d, odgovor = %s; POINTS %d", counter, trueAnswer, points);
}

function isAnswerTrue() {
    if (seconds > 0) {
        clearInterval(countdown);
        if (userAnswer.value.toUpperCase() === trueAnswer.toUpperCase()) {
            points++
            userAnswer.style.backgroundColor = 'rgb(125, 235, 52)';
            correct.play();
        } else {
            userAnswer.style.backgroundColor = 'rgb(230, 57, 70)';
            wrong.play();
            answer.classList.remove("hide");
            answer.innerHTML = "Tačan odgovor je <b>" + trueAnswer.toLowerCase() + "</b>";
        }

        userAnswer.disabled = true;
        confirmAnswer.disabled = true;

        if (counter == nQuestions)
            gameEnd();
    }
}

function startQuiz() {
    homeScreen.classList.add("hide");
    questionFormT1.classList.remove("hide");
    questionFormT2.classList.add("hide");

    backButton.classList.add("hide");
    confirmAnswer.classList.add("hide");
    nextButton2.classList.add("hide");

    shuffledQuestions = pitanjaLvl1.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setQuestion();
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

function setQuestion() {
    resetPrevState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(q) {
    questionElement.innerText = q.question;

    let chr;
    for (chr in q.answers) {
        const button = document.createElement("button");
        button.innerHTML = "<b>" + chr.toUpperCase() + ")</b>" + q.answers[chr];
        button.classList.add("btn-odgovor");

        button.addEventListener("click", function(event) {
            const selectedAnswer = event.target.innerHTML[3];
            const correctAnswer = q.correctAnswer;

            if (selectedAnswer === correctAnswer.toUpperCase()) {
                points++;
                correct.play();
            } else {
                wrong.play();
            }

            setStatusClass(document.body, selectedAnswer, correctAnswer);
            Array.from(answerButtons.children).forEach(button => {
                setStatusClass(button, button.innerHTML[3], correctAnswer);
            });

            if (counter == 5) {
                questionFormT1.classList.add("hide");
                questionFormT2.classList.remove("hide");
            
                confirmAnswer.classList.remove("hide");
                nextButton2.classList.remove("hide");
        
                newRiddle();
            } else {
                nextButton1.classList.remove("hide");
            }
        });
        answerButtons.appendChild(button);
    }

    counter++;
    console.log("Pitanje broj %d, odgovor = %s; POINTS %d", counter, q.correctAnswer, points);
}

function resetPrevState() {
    nextButton1.classList.add("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function setStatusClass(element, selected, correct) {
    clearStatusClass(element);

    if (selected === correct.toUpperCase()) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function handleUserInput(event) {
    event.preventDefault();
    resetForm();

    if ((checkInputLength(userName.value) && checkInputValidity(userName.value))
    && (checkInputLength(lastName.value) && checkInputValidity(lastName.value))) {
        addResult();
    } else {
        showErrorMessage("Unos nije korektan!");
        clearUserInput();
        return;
    }
}

function addResult() {
    const result = {
        score: points,
        firstName: userName.value,
        lastName: userSurname.value,
    };

    quizResults.push(result);

    quizResults.sort((a, b) => {
        return b.score - a.score;
    })

    localStorage.setItem("quizResults", JSON.stringify(quizResults));
    clearUserInput();
    backToMenu();
}

function checkInputLength(input) {
    if (input === '' || input.length < 2 || input.length > 20) {
        return false;
    } else {
        return true;
    }
}

function checkInputValidity(input) {
    const regEx = /^[a-zA-Z]+$/g;

    return regEx.test(input);
}

function showErrorMessage(message) {
    errorMsg.innerHTML = message;
    errorMsg.style.visibility = "initial";
}

function resetForm() {
    errorMsg.style.visibility = "hidden";
}

function clearUserInput() {
    userName.value = "";
    userSurname.value = "";
}


resultsList.innerHTML = quizResults.map(res => {
    return `<li>${res.firstName} ${res.lastName} <span>${res.score}</span></li>`
}).join("");

function showResults() {
    homeScreen.classList.add("hide");
    resultsSection.classList.remove("hide");
}

// Funkcije za animaciju tajmera
function calcTimeFraction() {
    const rawTimeFraction = timeLeft / timeLimit;
    return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(calcTimeFraction() * 283).toFixed(0)} 283`;
    timerPath.setAttribute("stroke-dasharray", circleDasharray);
}

function setRemainingPathColor(leftTime) {
    if (leftTime <= timeForALERT) {
        timerPath.classList.remove("orange");
        timerPath.classList.add("red");
    } else if (leftTime <= timeForWARN) {
        timerPath.classList.remove("green");
        timerPath.classList.add("orange");
    }
}


startButton.addEventListener("click", startQuiz);
confirmAnswer.addEventListener("click", isAnswerTrue);
backButton.addEventListener("click", backToMenu);
nextButton1.addEventListener("click", () => {
    currentQuestionIndex++;
    setQuestion();
});
nextButton2.addEventListener("click", newRiddle);
submitInput.addEventListener("click", handleUserInput);
resultsBtn.addEventListener("click", showResults);
backToHome.addEventListener("click", () => {
    homeScreen.classList.remove("hide");
    resultsSection.classList.add("hide");
})
