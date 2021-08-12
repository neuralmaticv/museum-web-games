import pitanjaLvl1 from "../data/pitanja1.js"       // izaberi tacan odgovor
import pitanjaLvl2 from "../data/zagonetke.js"      // zagonetke
import pitanjaLvl3 from "../data/pitanja3.js"       // anagrami

// Elementi za pocetni meni i neke bitnije promjenljive
const homeScreen = document.getElementById("homeScreen");
const startButton = document.getElementById("start");
let gameInProgress = false;                          // da li je kviz u toku
let points = 0;                                      // brojac osvojenih poena
let counter = 0;                                     // brojac pitanja 
const nQuestions = 8;                                // ukupan broj pitanja
const wrongSound = new Audio('Zvuci/wrong.wav');
const correctSound = new Audio('Zvuci/correct.wav');


// Elementi i promjenljive za prvi tip pitanja
const questionFormT1 = document.getElementById("questionType1");
const nextButton1 = document.getElementById("nextQuestionType1");
const questionElement = document.getElementById("pitanjeT1");
const answerButtons = document.getElementById("odgovoriT1");
let currentQuestionIndex, shuffledQuestions;          


// Elementi i promjenljive za drugi i treci tip pitanja
const questionFormT2 = document.getElementById("questionType2");
const question = document.querySelector("#pitanjeT2");
const userAnswer = document.querySelector("#userAnswer");
const confirmAnswer = document.querySelector("#confirmAnswer");
const nextButton2 = document.getElementById("nextQuestionType2");
const questionElement3 = document.getElementById("pitanjeT3");
const warnMsg = document.getElementById("warnMessage");
const timer = document.getElementById("timer");
const timerLabel = document.getElementById("base-timer-label");
const timerPath = document.getElementById("base-timer-path-remaining");
const answer = document.getElementById("correctAnswer");
let trueAnswer = "";
let seconds = 15, countdown;
let randomNumbers = []
let timePassed, timeLeft;                               // proteklo i preostalo vrijeme u sekundama
/**
 * timeLimit    == vremensko ogranicenje,      15 za zagonetke, 30 za anagrame
 * timeForWARN  == vrijeme za prvo upozorenje,  8 za zagonetke, 18 za anagrame
 * timeForALERT == vrijeme za drugo upozorenje, 4 za zagonetke, 10 za anagrame
 */
let timeLimit = 15;
let timeForWARN = 8;                      
let timeForALERT = 4;


// Elementi za unos unos rezultata
const submitResult = document.getElementById("submitResult");
const message = document.getElementById("message");
const userName = document.getElementById("firstName");
const userSurname = document.getElementById("lastName");
const errorMsg = document.getElementById("error-message");
const submitInput = document.getElementById("submitForm");


// Elementi za listu rezultata
const quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];
const resultsList = document.getElementById("list");
const resultsBtn = document.getElementById("results");
const resultsSection = document.getElementById("resultsList");
const backToHome = document.getElementById("backToHome");


/**
 * 
 * Funkcije za pocetak, kraj i povratak na pocetni meni
 *
 */
function startQuiz() {
    homeScreen.classList.add("hide");
    questionFormT1.classList.remove("hide");
    questionFormT2.classList.add("hide");

    confirmAnswer.classList.add("hide");
    nextButton2.classList.add("hide");

    gameInProgress = true;
    shuffledQuestions = pitanjaLvl1.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setQuestionT1();
}

function gameEnd() {
    gameInProgress = false;
    message.textContent = "Imali ste " + points + " od " + nQuestions + " tačnih odgovora";

    questionFormT2.classList.add("hide");
    submitResult.classList.remove("hide");

    //confirmAnswer.classList.add("hide");
    //nextButton2.classList.add("hide");
}

function backToMenu() {
    homeScreen.classList.remove("hide");
    questionFormT1.classList.add("hide");
    questionFormT2.classList.add("hide");
    submitResult.classList.add("hide");

    points = counter = 0;
}



/**
 * 
 * Funkcije za pitanja Lvl1. - ponuđeni odgovori
 * 
 */
function setQuestionT1() {
    resetPrevState1();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * @param {Object} q - pitanje
 */
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
                correctSound.play();
            } else {
                wrongSound.play();
            }

            setStatusClass(document.body, selectedAnswer, correctAnswer);
            Array.from(answerButtons.children).forEach(button => {
                setStatusClass(button, button.innerHTML[3], correctAnswer);
            });

            if (counter == 4) {
                questionFormT1.classList.add("hide");
                questionFormT2.classList.remove("hide");
            
                confirmAnswer.classList.remove("hide");
                nextButton2.classList.remove("hide");
        
                setQuestionT2();
            } else {
                nextButton1.classList.remove("hide");
            }
        });
        answerButtons.appendChild(button);
    }

    counter++;
    console.log("Pitanje broj %d, odgovor = %s; POINTS %d", counter, q.correctAnswer, points);
}

function resetPrevState1() {
    nextButton1.classList.add("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * @param {Element} element - button element u kome je ponudjen odgovor
 * @param {string} selected - izabrani odgovor od strane igraca
 * @param {string} correct  - tacan odgovor
 */
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



/**
 * 
 * Funkcije za pitanja level 2 i 3 - zagonetke i anagrami
 * 
 */
 function setQuestionT2() {
    if (counter == nQuestions) {
        gameEnd();
    }

    startTimer(trueAnswer, seconds);

    let n;
    while (true) {
        n = randomNumber(9)
        if (!(n in randomNumbers)) {
            randomNumbers.push(n);
            counter++;
            resetPrevState2(); 
            break;
        }
    }

    if (counter <= 6) {
        question.textContent = pitanjaLvl2[n].question;
        trueAnswer = pitanjaLvl2[n].correctAnswer;
        seconds = 15;
    } else if (counter > 6 && counter <= 8) {
        questionElement3.classList.remove("hide");
        question.textContent = pitanjaLvl3[n].question;
        trueAnswer = pitanjaLvl3[n].correctAnswer;
        seconds = 30;
        timeLimit = 30;
        timeForWARN = 18;
        timeForALERT = 10;

        for (let c of pitanjaLvl3[n].letters) { 
            if (c != ' ') {
                const li = document.createElement("li");
                li.innerHTML = c;
                questionElement3.appendChild(li);
            }
        }    
    }

    console.log("Pitanje broj %d, odgovor = %s; POINTS %d", counter, trueAnswer, points);
}

function isAnswerTrue() {
    if (seconds > 0) {
        clearInterval(countdown);
        if (userAnswer.value.toUpperCase() === trueAnswer.toUpperCase()) {
            points++
            userAnswer.style.backgroundColor = 'rgb(125, 235, 52)';
            correctSound.play();
        } else {
            userAnswer.style.backgroundColor = 'rgb(230, 57, 70)';
            wrongSound.play();
            answer.classList.remove("hide");
            answer.innerHTML = "Tačan odgovor je <b>" + trueAnswer.toLowerCase() + "</b>";
        }

        userAnswer.disabled = true;
        confirmAnswer.disabled = true;

        if (counter == nQuestions)
            gameEnd();
    }
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

function resetPrevState2() {
    while (questionElement3.firstChild) {
        questionElement3.removeChild(questionElement3.firstChild);
    }
}



/**
 * 
 * Funkcije za unos, upis i prikaz rezultata 
 * 
 */
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

/**
 * @param {string} input - korisnicki unos
 * @returns {boolean}
 */
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

/**
 * @param {string} message - poruka za igraca
 */
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



/**
 * 
 * Funkcije za animaciju tajmera
 * 
 */

/**
 * @param {string} tAnswer  - tacan odgovor
 * @param {number} sec      - broj sekundi za odgovor
 */
 function startTimer(tAnswer, sec) {
    warnMsg.classList.add("hide");
    timer.classList.remove("hide");
    answer.classList.add("hide");
    timePassed = 0;
    timeLeft = timeLimit;

    clearInterval(countdown);
    seconds = sec;
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
            
            wrongSound.play();
            answer.classList.remove("hide");
            answer.innerHTML = "Tačan odgovor je <b>" + tAnswer.toLowerCase() + "</b>";
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
}

function calcTimeFraction() {
    const rawTimeFraction = timeLeft / timeLimit;
    return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(calcTimeFraction() * 283).toFixed(0)} 283`;
    timerPath.setAttribute("stroke-dasharray", circleDasharray);
}

/**
 * @param {number} leftTime - preostalo vrijeme u sekundama
 */
function setRemainingPathColor(leftTime) {
    if (leftTime <= timeForALERT) {
        timerPath.classList.remove("orange");
        timerPath.classList.add("red");
    } else if (leftTime <= timeForWARN) {
        timerPath.classList.remove("green");
        timerPath.classList.add("orange");
    }
}



// Click events
startButton.addEventListener("click", startQuiz);
confirmAnswer.addEventListener("click", isAnswerTrue);
nextButton1.addEventListener("click", () => {
    currentQuestionIndex++;
    setQuestionT1();
});
nextButton2.addEventListener("click", setQuestionT2);
submitInput.addEventListener("click", handleUserInput);
resultsBtn.addEventListener("click", showResults);
backToHome.addEventListener("click", () => {
    homeScreen.classList.remove("hide");
    resultsSection.classList.add("hide");
})
