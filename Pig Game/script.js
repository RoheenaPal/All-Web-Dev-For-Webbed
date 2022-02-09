const newGameButton = document.querySelector(".new-game-button");
const rollDiceButton = document.querySelector(".roll-dice-button");
const holdButton = document.querySelector(".hold-button");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const totalScoreOne = document.querySelector(".total-score-one");
const totalScoreTwo = document.querySelector(".total-score-two");
const currentScoreOne = document.querySelector(".current-score-one");
const currentScoreTwo = document.querySelector(".current-score-two");
const diceImage = document.querySelector(".dice-image");


const diceFace = ["/WebDev/Test/Pig Game/Dice/one.png",
    "/WebDev/Test/Pig Game/Dice/two.png",
    "/WebDev/Test/Pig Game/Dice/three.png",
    "/WebDev/Test/Pig Game/Dice/four.png",
    "/WebDev/Test/Pig Game/Dice/five.png",
    "/WebDev/Test/Pig Game/Dice/six.png",
];

const winScore = 100;

function checkWin(temp) {
    if (temp >= winScore) {
        return true;
    } else {
        return false;
    }
}

rollDiceButton.addEventListener('click', () => {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceImage.src = diceFace[dice - 1];
    if (dice === 1) {
        if (playerOne.classList.contains('active-player')) {
            currentScoreOne.textContent = '0';
            playerOne.classList.remove('active-player');
            playerTwo.classList.add('active-player');
        } else {
            currentScoreTwo.textContent = '0';
            playerTwo.classList.remove('active-player');
            playerOne.classList.add('active-player');
        }
    } else {
        if (playerOne.classList.contains('active-player')) {
            let temp = Number(currentScoreOne.textContent);
            temp += dice;
            currentScoreOne.textContent = temp;
        } else {
            let temp = Number(currentScoreTwo.textContent);
            temp += dice;
            currentScoreTwo.textContent = temp;
        }
    }
});
holdButton.addEventListener('click', () => {
    if (playerOne.classList.contains('active-player')) {
        let temp = Number(totalScoreOne.textContent);
        temp += Number(currentScoreOne.textContent);
        totalScoreOne.textContent = temp;
        if (checkWin(temp)) {
            declareWin('Player One Wins! 🎉 🎉 🎉 ');
        }
        currentScoreOne.textContent = '0';
        playerOne.classList.remove('active-player');
        playerTwo.classList.add('active-player');
    } else {
        let temp = Number(totalScoreTwo.textContent);
        temp += Number(currentScoreTwo.textContent);
        totalScoreTwo.textContent = temp;
        if (checkWin(temp)) {
            declareWin('Player Two Wins! 🎉 🎉 🎉 ');
        }
        currentScoreTwo.textContent = '0';
        playerTwo.classList.remove('active-player');
        playerOne.classList.add('active-player');
    }
});

newGameButton.addEventListener('click', () => {
    playerTwo.classList.remove('active-player');
    playerOne.classList.add('active-player');
    totalScoreOne.textContent = '0';
    currentScoreOne.textContent = '0';
    totalScoreTwo.textContent = '0';
    currentScoreTwo.textContent = '0';
    diceImage.src = diceFace[5];
});