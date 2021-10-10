const Attack_Value = 10;
const Monster_Attack_Value = 14;
const Strong_Attack_Value = 17;
const Heal_value = 20;
const enteredValue = prompt('Maximum life for you and the monster.', '100')
const weak_attack = 'attack';
const strong_attack ='strong_attack';


let chosenMaximumLife = parseInt(enteredValue);

if (isNaN(chosenMaximumLife || chosenMaximumLife <= 0 )) {
    chosenMaximumLife = 100;
}
let currentMonsterHealth = chosenMaximumLife;
let currentPlayerHealth = chosenMaximumLife;
let hasBonusLife = true;


adjustHealthBars(chosenMaximumLife);

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

const enteredValue = prompt('Maximum life for you and the monster.', '100')

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(Monster_Attack_Value);
    currentPlayerHealth -= playerDamage;

    if (currentMonsterHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth -= initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('you won!');
        reset(chosenMaximumLife);
    } else if ( currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert ('you lost!');
        reset(chosenMaximumLife);
    } else if (currentMonsterHealth < 0 && currentPlayerHealth < 0) {
        alert('You have a draw!')
        reset(chosenMaximumLife);
    }
}

function reset() {
    currentPlayerHealth = chosenMaximumLife;
    currentMonsterHealth = chosenMaximumLife;
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === weak_attack) {
        maxDamage = Attack_Value;
    } else if (mode === strong_attack) {
        maxDamage = Strong_Attack_Value;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
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
        alert('You cant heal to more than your max initial health maximum.')
        healValue = chosenMaximumLife - currentPlayerHealth;
    } else {
        healValue = Heal_value;
    }

    increasePlayerHealth(Heal_value);
    currentPlayerHealth += Heal_value;
    endRound();

}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logB