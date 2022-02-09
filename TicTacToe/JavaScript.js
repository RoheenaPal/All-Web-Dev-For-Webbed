console.log(`Welcome To Tic-Tac-Toe`);
let music = new Audio("music.mp3");
let turn = new Audio("Ting.mp3");
let gameover = new Audio("GameOver.mp3");
let turn = "X";

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

//Funtion to check for a win
const checkWin = () => {

}


//Game Logic