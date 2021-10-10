const Attack_Value = 10;
const Monster_Attack_Value = 14;
const Strong_Attack_Value = 17;
const Heal_value = 20;
const enteredValue = prompt('Maximum life for you and the monster.', '100')
const mode_attack = 'attack';
const strong_attack ='strong_attack';


let chosenMaximumLife = parseInt(enteredValue);

if (isNaN(chosenMaximumLife || chosenMaximumLife <= 0 )) {
    chosenMaximumLife = 100;
}
let currentMonsterHealth = chosenMaximumLife;
let currentPlayerHealth = chosenMaximumLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaximumLife);

let battleLog = [];

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry = {
        event:event, 
        value: value, 
        finalMonsterHealth: monsterHealth, 
        finalPlayerHealth: playerHealth,
    };

    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = 'Monster';
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: event, 
            value: value, 
            target: 'Monster',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
    };
    } else if (event = LOG_EVENT_MONSTER_ATTACK){
            logEntry = {
                event: event, 
                value: value, 
                target: 'Player',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
        }
    } else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: event, 
            value: value, 
            target: 'Player',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
    }
    } else if (event === LOG_EVENT_GAME_OVER){
        logEntry = {
            event: event, 
            value: value, 
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
    }
    }    
    battleLog.push(logEntry);
}    

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(Monster_Attack_Value);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth)
    if (currentMonsterHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth -= initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('you won!');
        writeToLog(LOG_EVENT_GAME_OVER, "player won", currentMonsterHealth, currentPlayerHealth)
        reset(chosenMaximumLife);
    } else if ( currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert ('you lost!');
        writeToLog(LOG_EVENT_GAME_OVER, "Monster won", currentMonsterHealth, currentPlayerHealth)
        reset(chosenMaximumLife);
    } else if (currentMonsterHealth < 0 && currentPlayerHealth < 0) {
        alert('You have a draw!')
        writeToLog(LOG_EVENT_GAME_OVER, "Its a draw", currentMonsterHealth, currentPlayerHealth)
        reset(chosenMaximumLife);
    }
}

function reset() {
    currentPlayerHealth = chosenMaximumLife;
    currentMonsterHealth = chosenMaximumLife;
}

function attackMonster(mode) {
    let maxDamage;
    let logEvent;
    if (mode === 'attack') {
        maxDamage = Attack_Value;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === 'strongAttack') {
        maxDamage = Strong_Attack_Value;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth)
    const playerDamage = dealPlayerDamage(Monster_Attack_Value);
    currentPlayerHealth -= playerDamage;
}

function attackHandler() {
   attackMonster('attack');
   endRound();
}

function strongAttackHandler () {
    attackMonster('strongAttack');
    endRound();
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaximumLife - Heal_value) {
        alert(`You cant heal to more than ${chosenMaximumLife} points`);
        healValue = chosenMaximumLife - currentPlayerHealth;
    } else {
        healValue = Heal_value;
    }

    increasePlayerHealth(Heal_value);
    currentPlayerHealth += Heal_value;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth)
    endRound();

}

function printLogHandler () {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)