/*jshint esversion: 6 */

const allImages = document.getElementsByClassName('img');
const answers = document.getElementsByClassName('answer');
const imagesData = [];
const answersData = [];

setTimeout("hidediv()",10000);
setTimeout("setActiveImageDisplayBlock()",10001);

for (let img of allImages) {
    const imgData = {
        display: false,
        name: img.alt,
        id: img.id,
    };
    imagesData.push(imgData);
}

if (imagesData.filter(img => img.display == false).length == allImages.length ) {
    imagesData[0].display = true;
} // set visibility on first image

let activeImage = imagesData.find(img => img.display === true); 
const inactiveImages = imagesData.filter(img => img.display === false);

for (const answer of answers) {
    const ansData = {
        display: true,
        name: answer.textContent,
        id: answer.id
    };
    answersData.push(ansData);
}


let startDate;
for (const answer of answers) {
    const answerData = answersData.find(element => element.id === answer.id);
    answer.addEventListener('click', () => {
        if(!startDate) {
            startDate = new Date();
        }
        if (isCorrectAnswer(activeImage, answerData)) {
            removeCorrectAnswer(answerData);
            activeImage.display = false;
            setInctiveImagesDisplayNone();
            if( inactiveImages. length > 0) {
                activeImage = inactiveImages[0];
                activeImage.display = true;
                setActiveImageDisplayBlock();
                inactiveImages.shift();
            } else {
                const endDate = new Date();
                showSuccessMessage(endDate);
            }   
        }
    } );
}


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function hidediv() {
        document.getElementById("start").style.visibility="hidden";
        document.getElementById("loading").style.visibility="hidden";

    }
    function setActiveImageDisplayBlock() {
        const active = imagesData.find(image => image.display === true);
        document.getElementById(active.id).style.display = 'block';
    }
    function setInctiveImagesDisplayNone() {
        const inactive = imagesData.filter(image => image.display === false);
        for (const img of inactive) 
            document.getElementById(img.id).style.display = 'none';
    }
    function removeCorrectAnswer(answer) {
        const correctAnswer = answersData.find(element => element.id === answer.id);
        document.getElementById(correctAnswer.id).innerHTML = ''; //.style.display = 'none';
        document.getElementById(correctAnswer.id).style.backgroundColor = 'transparent';
    } // or .innerHTML = '';

    function isCorrectAnswer(image, answer) {
        if(image.name === answer.name) {
            return true;
        } else {
            return false;
        }
    }

    function showSuccessMessage(date) {
        document.getElementById('answers').style.display = 'none';
        document.getElementById('images').style.display = 'none';
        document.getElementById('finish-message').style.display = 'block';
        const time = date - startDate;
        const message = `Uspiješno ste riješili kviz za ${time/1000} sekundi. Čestitamo.`;
        document.getElementById('add-message').innerText += message;
    }

    

