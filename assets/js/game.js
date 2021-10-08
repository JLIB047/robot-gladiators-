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
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
        //reapeat and execute as long as the enemy-robot is alive
        while(playerHealth > 0 && enemyHealth > 0){ 
     
    
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
        }
//function to start a new game 
var startGame = function() {
    debugger;
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
        var pickedEnemyName = enemyNames[i];
        enemyHealth=50;
        fight(pickedEnemyName);
     } 
     else {
        window.alert("You have lost you robot in battle! Game Over!");
        break;
    }
  }
  //play again-- why do we have to state it twice? was startGame()
  //after the loop ends, player is either out of health or enemies to fight, so run endGame function
  endGame();
};
//function to end the entire game 
var endGame = function(){
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of" + playerMoney + " .");
    }
    else {
        window.alert("You've lost your robot in battle");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else{
        window.alert("Thank You for playing Robot Gladiators! Come back soon!");
    }

};
// Start game call
startGame();



