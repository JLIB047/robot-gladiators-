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

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    window.alert("Welcome to Robot Gladiators!")

    var fight = function(enemyName) {
        
    
// if a plauyer chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining." 
        );
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died! ");
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
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    //if player choses to skip 
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip 
    var confirmSkip = window.confirm(" Are you sure you'd like to quit? ");
    
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye! ");
        playerMoney = playerMoney - 2;
    }
    else {
        fight ();
    }
    window.alert(playerName + " has chosen to skip the fight! ");
} else { 
    window.alert(" You need to choose a valid option. Try again! ");
}
    }
for(var i = 0; i < enemyNames.length; i++) {
        fight(enemyNames[i]);
    }

