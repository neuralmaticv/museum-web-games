let first = null;
let second = null;
let block = false;
let counter = 0;
let pair = 0;

function check() {
    return first !== null && second !== null;
}

$(document).ready(function () {
    $("#restart").click(function () {
        location.reload();
        return;
    })
    $(".myCard").click(function () {
        if (!block && !$(this).hasClass("opened")) {
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
                    pair++;
                    if(pair == 6) {
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
        return;
    })

})