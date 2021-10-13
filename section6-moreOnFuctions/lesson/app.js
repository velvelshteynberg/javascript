const startGameBtn = document.getElementById('start-game-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = 'Its a Draw';
const PLAYER_WINS = 'The Player wins';
const COMPUTER_WINS = 'The Computer wins';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalide choice: We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
    }
    return selection
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < .34) {
        return ROCK;
    } else if (randomValue < .67 ) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE ) => 
    cChoice === pChoice ? DRAW
        :   (cChoice === ROCK && pChoice === PAPER) ||
            (cChoice === PAPER && pChoice === SCISSORS) ||
            (cChoice === SCISSORS && pChoice === ROCK) ? PLAYER_WINS : COMPUTER_WINS
    /*if (cChoice === pChoice) {
        return DRAW
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ) {
        return PLAYER_WINS;
    } else {
        return COMPUTER_WINS;
    }*/
    


startGameBtn.addEventListener('click',  () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...')
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice)
    }
        let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    if (winner === DRAW) {
        message = message + `had a draw.`;
    } else if (winner === PLAYER_WINS) {
        message = message + `won.`;
    } else {
        message = message + `lost.`;
    }
    alert(message);
    gameIsRunning = false;
});


//not related to game

const combine = (resultHandler,operation,  ...number) => {
    const validateNumber = (number) => {
return isNaN(number) ? 0 : number
    }
    
    let sum = 0;
    for (const num of number) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }   
    }
    resultHandler(sum)
};

const subtractUp = function (resultHandler, ...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum -= num;
    }
    resultHandler(sum);
}

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
}

combine(showResult.bind(this, 'The result after addition is:'), 'ADD', 2, 2);
combine(showResult.bind(this, 'The result after subtraction is:'),'SUBTRACT', 1,2,3,4,4)