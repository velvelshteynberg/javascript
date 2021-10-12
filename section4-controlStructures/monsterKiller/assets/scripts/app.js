const Attack_Value = 10;
const Monster_Attack_Value = 14;
const Strong_Attack_Value = 17;
const Heal_value = 20;
const enteredValue = prompt('Maximum life for you and the monster.', '100')
const mode_attack = 'attack';
const strong_attack ='strong_attack';



function getMaxLifeValues() {
    const enteredValue = prompt('Maximum life for you and the monster.', '100')
    const parsedValue = parseInt(enteredValue);

    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw {message: 'Not valid input'};
    }
    return parsedValue;
}
let chosenMaximumLife;

try {
    chosenMaximumLife = getMaxLifeValues();
} catch (error) {
    chosenMaximumLife = 100;
    alert('you entered soemthing wrong');
    throw error;
} finally {
    // put in some code for 'clean up' work
}

let currentMonsterHealth = chosenMaximumLife;
let currentPlayerHealth = chosenMaximumLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaximumLife);

let battleLog = [];
let lastLoggedEntry = [];
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

function writeToLog(event, value, monsterHealth, playerHealth) {
    logEntry = {
        event:event, 
        value: value,
        finalMonsterHealth: monsterHealth, 
        finalPlayerHealth: playerHealth,
    };
    
    switch (event) {
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'Monster';
            break;
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'Monster';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'Player';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'Player';
            break;
        case LOG_EVENT_GAME_OVER:
            break;
        default: logEntry = {};

    }

    /*if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event:event, 
            value: value,
            target: 'Monster',
            finalMonsterHealth: monsterHealth, 
            finalPlayerHealth: playerHealth,
        };        
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: event, 
            value: value, 
            target: 'Monster',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
    };
    } else if (event === LOG_EVENT_MONSTER_ATTACK){
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
    }    */ 
    battleLog.push(logEntry);
}   

function endRound() {
    const initialPlayerHealth = chosenMaximumLife;
    const playerDamage = dealPlayerDamage(Monster_Attack_Value);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth)
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('you won!');
        writeToLog(LOG_EVENT_GAME_OVER, "player won", currentMonsterHealth, currentPlayerHealth)
        reset(chosenMaximumLife);
        resetGame(chosenMaximumLife);
    } else if ( currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert ('you lost!');
        writeToLog(LOG_EVENT_GAME_OVER, "Monster won", currentMonsterHealth, currentPlayerHealth)
        reset(chosenMaximumLife);
        resetGame(chosenMaximumLife);
    } else if (currentMonsterHealth < 0 && currentPlayerHealth < 0) {
        alert('You have a draw!')
        writeToLog(LOG_EVENT_GAME_OVER, "Its a draw", currentMonsterHealth, currentPlayerHealth)
        reset(chosenMaximumLife);
        resetGame(chosenMaximumLife);
    }
}

function reset(backToInitialHealth) {
    currentPlayerHealth = chosenMaximumLife;
    currentMonsterHealth = chosenMaximumLife;
}

function attackMonster(mode) {
    const maxDamage = mode === 'attack'? Attack_Value:Strong_Attack_Value;
    const logEvent = mode === 'attack'? LOG_EVENT_PLAYER_ATTACK:LOG_EVENT_PLAYER_STRONG_ATTACK;
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
        healValue = chosenMaximumLife - currentPlayerHealth;
        alert(`You got ${Math.round(healValue)} points`);
    } else {
        healValue = Heal_value;
    }

    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
    endRound();

}

function printLogHandler() {
    i = 0;
    /*for (let i = 0; i < 3; i++) {
        console.log('-----------------');
    }*/
    let j = 0;
    do {
        console.log(j);
        j++;
    } while (j < 3);
    /*for (let i = 0; i < battleLog.length; i++) {
        console.log(battleLog[i]);
    }*/
    for (const logEntry of battleLog) {
        if (!lastLoggedEntry && lastLoggedEntry !== 0 || lastLoggedEntry < i) {
            console.log(`#${i}`);
        for (const key in logEntry) {f
            console.log(key);
            console.log(logEntry[key]);
        }
        lastLoggedEntry = i
        break;
        }
        i++;
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)