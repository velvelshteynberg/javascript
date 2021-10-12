const startGameBtn = document.getElementById('start-game-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = 'Its a Draw';
const PLAYER_WINS = 'The Player wins';
const COMPUTER_WINS = 'The Computer wins';

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalide choice: We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection
};

const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < .34) {
        return ROCK;
    } else if (randomValue < .67 ) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = function (cChoice, pChoice) {

    if (cChoice === pChoice) {
        return DRAW
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ) {
        return PLAYER_WINS;
    } else {
        return COMPUTER_WINS;
    }
    
}

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...')
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    console.log(winner);
});