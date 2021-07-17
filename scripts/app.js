const cards = document.querySelectorAll('.card');
const cardsLength = cards.length;

let hasFlipped = false;
let firstCard;
let secondCard;
let lockBoard = false;
const startTime = new Date().getTime();
let solved = 0;


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return; // double click
  this.classList.add('flip');
  

  if (!hasFlipped) {  // first click 
    hasFlipped = true;
    firstCard = this; 
    return;
  }
  hasFlipped = false
  secondCard = this;
  checkEquality();
  // } else {  // second click
  //   hasFlipped = false
  //   secondCard = this;

  //   checkEquality();
  // }
  
}

function checkEquality() {
  let equality = firstCard.dataset.card === secondCard.dataset.card

  equality ? disableCards(): unflipCardsTimeout();

}

function disableCards() {
  firstCard.removeEventListener( 'click', flipCard);
  secondCard.removeEventListener( 'click', flipCard);
  solved += 2;
  resetBoard();
  if( areGameDone() ){
    showFinishMessage();
  }
}

function unflipCardsTimeout() {
  lockBoard = true;
  setTimeout( () => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  hasFlipped = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function randomPosition() {
  cards.forEach( card => {
    let position = Math.floor(Math.random() * 12);
    card.style.order = position;
  } );

})(); // immediately invoked 

function areGameDone () {
  if (solved === cardsLength) { return true; }
  else { return false; }
};

function showFinishMessage() {
  const endTime = new Date().getTime()
  const timeSpend = Math.floor( (endTime - startTime)/1000 );

  document.getElementById('finished').style.display = 'block';
  document.getElementsByClassName('board-cards')[0].style.opacity = 0.5;
  document.getElementById('success_message').innerHTML = `success for: ${timeSpend} seconds`;

  document.getElementById('again').addEventListener('click', () => {
    location.reload();
  } );

}

cards.forEach(card => card.addEventListener('click', flipCard));