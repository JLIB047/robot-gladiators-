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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
        }
    }
    
// if a plauyer chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
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
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        
        playerHealth = Math.max(0, playerHealth - damage);
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

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
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
        enemyHealth = randomNumber(40, 60);
        fight(pickedEnemyName);
     } 
        //if we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1){
            //ask if player would like to use the store before the next round
            var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');
            //if yes, take them to the store() function 
            //if (typeof variable == "boolean") {
                if(storeConfrim = true){
                    shop();
                    } 
            //}
            //else { 
                //console.log(storeConfirm);
                //alert ("value was not Boolean");
            //}
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
var shop = function() {
    //ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your Health, UPGRADE your attack. or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. "
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
        if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
            
            break;
        case "UPGRADE":
        case "upgrade":
        if(playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            // do nothing, so the function will end 
            break;
            default:
                window.alert("You did not pick a valid option. Try again");

                // call shop() again to force player to pick a valid option
                shop();
                break;
    }
};
// Start game call
startGame();



