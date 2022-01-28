    import questions from "../data/questions-en.js"

    function getArray(n) {
        let l = []
        let i = 0;
        while (i < n) {
            let rand = Math.floor(Math.random() * questions.length);
            let element = questions[rand];
            if (!l.includes(element)) {
                l.push(element)
                i++;
            }
        }
        return l;
    }

    function getRandomIndex(n) {
        let l = []
        let i = 0;
        while (i < n) {
            let rand = Math.floor(Math.random() * 8);
            if (!l.includes(rand)) {
                l.push(rand)
                i++;
            }
        }
        return l;
    }

    const correctSound = new Audio('sounds/correct.wav');
    const wrongSound = new Audio('sounds/wrong.wav');

    let active = null;
    let activeIndex = -1;

    function displayElements() {
        let l = getArray(8);
        let indexList = getRandomIndex(8);
        let k = 0;
        $(".images").append("<img class='img' src='" + l[indexList[k]].picture + "' id='" + l[indexList[k]].id + "' alt='" + l[indexList[k]].correctAnswer + "'></img>");
        activeIndex = l[indexList[k]]
        k++;
        for (let i = 0; i < l.length; i++) {
            if (i < 4) {
                $(".g1").append("<div class='answer en' id='" + l[i].id + "'>" + l[i].correctAnswer + "</div>")
            } else {
                $(".g2").append("<div class='answer en' id='" + l[i].id + "'>" + l[i].correctAnswer + "</div>")
            }
            $(".answer").unbind().on('click', function () {
                active = $(this);
                if (active.attr('id') == activeIndex.id) {
                    correctSound.play()
                    if (k == 8) {
                        $(".finish-message").css("display", "block");
                    }
                    active.css("visibility", "hidden");
                    $(".img#" + activeIndex.id).css("display", "none");
                    $(".images").append("<img class='img' src='" + l[indexList[k]].picture + "' id='" + l[indexList[k]].id + "' alt='" + l[indexList[k]].correctAnswer + "'></img>");
                    activeIndex = l[indexList[k]]
                    k++;
                }
                else {
                    wrongSound.play()
                    $(".images").css("display", "none");
                    $(".answers").css("display", "none");
                    $(".wbody").css("display", "flex");
                    $(".correct").css("display", "block");
                    $(".correct").text("Correct answer is: " + activeIndex.correctAnswer);
                    $("#wrap").mouseenter(function () {
                        $("#par").text(activeIndex.explanation);
                    })
                    $(".lt").css("display", "inline-block");
                    $(".lt").unbind().on('click', function () {
                        $(".images").css("display", "block");
                        $(".answers").css("display", "table");
                        $(".wbody").css("display", "none");
                        $(".lt").css("display", "none");
                        $(".correct").css("display", "none");
                        
                        let btn = $("#" + activeIndex.id + ".answer");
                        btn.css("visibility", "hidden")
                        $(".img#" + activeIndex.id).css("display", "none");
                        $(".images").append("<img class='img' src='" + l[indexList[k]].picture + "' id='" + l[indexList[k]].id + "' alt='" + l[indexList[k]].correctAnswer + "'></img>");
                        activeIndex = l[indexList[k]]
                        k++;
                    })
                }
            })
        }
    }

    $(document).ready(function () {
        setTimeout(() => {
            $(".home").css("display", "none");
            displayElements();
        }, 2000)

        return;
    })