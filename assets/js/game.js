// Game States 
// "WIN" -player robot has defeated all enemy-robots 
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "Lose" -player robot's health is zero or less 

var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney)

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// function expression (assign a variable) v function declarartion making function, the keyword, first
    window.alert("Welcome to Robot Gladiators!")

    var fight = function(enemyName) {
        //reapeat and execute as long as the enemy-robot is alive
        while(playerHealth > 0 && enemyHealth > 0){ 
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip 
        var confirmSkip = window.confirm(" Are you sure you'd like to quit? ");

        // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye! ");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }
    }
    
// if a plauyer chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining." 
        );
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died! ");
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " healthleft.");
        }

        // remove player health
        playerHealth= playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + " . " +playerName + " now has " + playerHealth + " health reamining."
        );

        if (playerHealth <= 0) {
            window.alert(playerName + " has died! ");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
 }
    };
for(var i = 0; i < enemyNames.length; i++) {
        var pickedEnemyName = enemyNames[i];
        enemyHealth=50;
        fight(enemyNames[i]);
    }

