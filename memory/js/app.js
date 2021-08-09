import images from "../js/images.js"

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getArray(n) {
    let l = []
    let i = 0;
    while (i < n) {
        let rand = Math.floor(Math.random() * images.length);
        let element = images[rand];
        if (!l.includes(element)) {
            l.push(element)
            l.push(element)
            i++;
        }
    }
    return l;
}

let first = null;
let second = null;
let block = false;
let counter = 0;
let pair = 0;

let tap = new Audio('sound/tap.wav');
let success = new Audio('sound/success.wav');

function check() {
    return first !== null && second !== null;
}

function displayElements(n, lvl) {
    $(".start").css("display", "none");
    $(".scene").css("display", "inline-block");
    $(".scene").addClass("level" + lvl);
    $("body").css("background-image", "url('img/lvl" + lvl + "/bg.jpg')");
    let l = getArray(n)
    shuffle(l)
    for (let i = 0; i < l.length; i++) {
        $(".scene").append("<div class='myCard' id=" + l[i].id + " ><img class='close' src=img/lvl" + lvl + "/closed.png ></img><img class='open' src=" + l[i].link + " ></img></div>");

        $('.myCard').on('click', function () {
            if (!block && !$(this).hasClass("opened")) {
                tap.play();
                $(this).children(".open").css("display", "inline-block");
                $(this).children(".close").css("display", "none");

                $(this).addClass("opened");

                if (first == null)
                    first = $(this);
                else if (second == null)
                    second = $(this);

                if (check()) {
                    if (first.attr("id") != second.attr("id")) {
                        counter++;
                        block = true;
                        setTimeout(() => {
                            first.children(".open").css("display", "none");
                            first.children(".close").css("display", "inline-block");
                            first.removeClass("opened");

                            second.children(".open").css("display", "none");
                            second.children(".close").css("display", "inline-block");
                            second.removeClass("opened");

                            block = false;

                            first = null; second = null;
                        }, 1000);
                    }
                    else {
                        success.play();
                        pair++;
                        if (pair == n) {
                            setTimeout(() => {
                                $(".scene").css("display", "none");
                                $(".result").css("display", "inline-block");
                                $("#end").text("Честитамо! Успјешно сте завршили игру са " + counter + " промашаја!");
                            }, 1000)
                        }
                        first = null; second = null;
                    }
                }
            }
        })
    }
}

$(document).ready(function () {
    $("#level1start").click(function () {
        const n = 4;
        displayElements(n, 1);
        return;
    })

    $("#level2start").click(function () {
        const n = 6;
        displayElements(n, 2);
        return;
    })

    $("#level3start").click(function () {
        const n = 8;
        displayElements(n, 3);
        return;
    })

    $("#restart").click(function () {
        location.reload();
        return;
    })
})