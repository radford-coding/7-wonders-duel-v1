const age1Positions = [
    [6, 8],
    [5, 7, 9],
    [4, 6, 8, 10],
    [3, 5, 7, 9, 11],
    [2, 4, 6, 8, 10, 12],
];

const age2Positions = [
    [2, 4, 6, 8, 10, 12],
    [3, 5, 7, 9, 11],
    [4, 6, 8, 10],
    [5, 7, 9],
    [6, 8],
];

const age3Positions = [
    [6, 8],
    [5, 7, 9],
    [4, 6, 8, 10],
    [5, 9],
    [4, 6, 8, 10],
    [5, 7, 9],
    [6, 8],
];

const positions = {
    1: age1Positions,
    2: age2Positions,
    3: age3Positions,
};

const ageColors = [
    'brown',
    'blue',
    'purple'
];

let age = 1;

const flipBtnEl = document.getElementById('flip');
let cardEls = document.querySelector('.card');
const boardEl = document.querySelector('.board');

const addCard = (txt, facedown) => {
    const newCard = document.createElement('div'); // container
    newCard.classList.add('card');
    const newCardInner = document.createElement('div'); // inner, to position front and back
    newCardInner.classList.add('card-inner');
    const newCardFront = document.createElement('div');
    newCardFront.classList.add('card-front');
    newCardFront.innerText = txt;
    const newCardBack = document.createElement('div');
    newCardBack.classList.add('card-back');
    if (facedown) {
        newCardInner.classList.add('card-flipped');
    };
    newCardBack.style.backgroundColor = ageColors[age - 1];
    newCardInner.appendChild(newCardFront);
    newCardInner.appendChild(newCardBack);
    newCard.appendChild(newCardInner);
    return newCard;
};

const dealCards = (age) => {
    let arr = positions[age];
    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[r].length; c++) {
            let newCard = addCard('test', r % 2 !== 0);
            newCard.id = `${age}-r-c`;
            newCard.style.gridColumn = `${arr[r][c]} / span 2`;
            newCard.style.gridRow = `${r + 2} / span 3`;
            boardEl.appendChild(newCard);
        };
    };
    cardEls = document.querySelectorAll('.card');
    cardEls.forEach(c => c.addEventListener('click', (e) => {

        console.log(e.target.remove());
    }));
};

dealCards(age);

flipBtnEl.addEventListener('click', (e) => {
    let temp = document.querySelectorAll('.card-inner');
    temp.forEach(c => c.classList.toggle('card-flipped'));
});

//TODO
// change cards to just be 1 div per - currently 3 divs for lovely flips, but makes it hard. perhaps since flipping is unimportant, just have an initial state and initial background color/image, that changes instantly before the slower flip animation happens
// clicking on a card chooses it
// can't choose cards with other cards atop them
