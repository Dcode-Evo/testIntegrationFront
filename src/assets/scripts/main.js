console.log('It works');

const popUp = document.querySelectorAll(".modal--trigger");

const modalOne = document.querySelector('.modal-one');
const modalTwo = document.querySelector('.modal-two');
const modalThree = document.querySelector('.modal-three');
const modalFour = document.querySelector('.modal-four')

const closeCross = document.querySelectorAll('.close-cross');

const bodyBlackout = document.querySelector('.body-blackout');

popUp[0].addEventListener('click', addBlackOut);
popUp[1].addEventListener('click', addBlackOut);
popUp[2].addEventListener('click', addBlackOut);
popUp[3].addEventListener('click', addBlackOut);

function addBlackOut() {
   bodyBlackout.classList.add('is-black');
}

bodyBlackout.addEventListener('click', isNotBlack);
closeCross[0].addEventListener('click', isNotBlack);
closeCross[1].addEventListener('click', isNotBlack);
closeCross[2].addEventListener('click', isNotBlack);
closeCross[3].addEventListener('click', isNotBlack);

function isNotBlack() {
   document.querySelector('.is-black').classList.remove('is-black');
   modalOne.classList.remove('modal-is-open');
   modalTwo.classList.remove('modal-is-open');
   modalThree.classList.remove('modal-is-open');
   modalFour.classList.remove('modal-is-open');
}

popUp[0].addEventListener('click', openModalOne);

function openModalOne() {
   modalOne.classList.add('modal-is-open');
}

popUp[1].addEventListener('click', openModalTwo);

function openModalTwo() {
   modalTwo.classList.add('modal-is-open');
}

popUp[2].addEventListener('click', openModalThree);

function openModalThree() {
   modalThree.classList.add('modal-is-open');
}

popUp[3].addEventListener('click', openModalFour);

function openModalFour() {
   modalFour.classList.add('modal-is-open');
}

