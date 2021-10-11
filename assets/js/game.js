// Game States 
// "WIN" -player robot has defeated all enemy-robots 
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "Lose" -player robot's health is zero or less 
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
var getPlayerName = function () {
    var name = "";
    
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    //Add Loop here w Prompt and Condition 
    //

    console.log("Your robots name is " + name);
    return name;
}
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if(this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dolars.")
            this.health += 20;
            this.money -= 7;
    }
        else { 
            window.alert("You dont have enough money!");
    }
    },
    upgradeAttack: function() {
        if(this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dolars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You dont have enough money!");
        }
            
    }
};
// you can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money)

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// function expression (assign a variable) v function declarartion making function, the keyword, first
    window.alert("Welcome to Robot Gladiators!");

    var fightOrSkip = function() {
        // ask player if they'd like to fight or skip using fightOrSkip function ()
        var promptFight = window.prompt('Would you like to Fight or Skip this battle? Enter "FIGHT" or "SKIP" to choose.');
        if (promptFight === "" || promptFight === null) {
            window.alert("You need to provide a valid answer! Please try again.")
            return fightOrSkip();
        }
        promptFight = promptFight.toLowerCase();
        // if player picks "skip" confirm and then stop the loop 
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        //if yes (true), leave fight 
        if(confirmSkip) {
            window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
      }  
      return false;
        }
      


    var fight = function(enemy) {
        var isPlayerTurn = true; 
        if (Math.random() > 0.5) {
            isPlayerTurn = false;
        }
        fightOrSkip();
        //reapeat and execute as long as the enemy-robot is alive
        while(playerInfo.health > 0 && enemy.health > 0){ 
            if (isPlayerTurn) {

            
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            
        enemy.health = Math.max(0, enemy.health  - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + " . " + enemy.name + " now has " + enemy.health  + " health remaining." 
        );
        if (enemy.health  <= 0){
            window.alert(enemy.name + " has died! ");
            playerInfo.money = playerInfo.money + 20;
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health  + " healthleft.");
        }

        // remove player health
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerInfo.health + " health reamining."
        );

        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died! ");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.")
        } 
    }
    isPlayerTurn = !isPlayerTurn;
  }   
}
 
    
//function to start a new game 
var startGame = function() {
    //reset player stats
    playerInfo.reset();

for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        debugger;
    
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);
        fight(pickedEnemyObj);
     } 
        //if we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1){
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
    window.alert("The game has now ended. Let's see how you did!");
    //check localStorage for high score, if its not there, use 0
     var highScore = localStorage.getItem("highscore");
     if (highScore === null) {
         highScore = 0;
     }
     if(playerInfo.money > highScore) {
         localStorage.setItem("highscore", playerInfo.money);
         localStorage.setItem("name" , playerInfo.name);

         alert(playerInfo.name + "now has a high score of " + playerInfo.money + "!")
     }
     else {
         alertplayerInfo.name + "did not beat the high scorte of" + highScore + ". "
     }
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great Job, you've survived the game! You now have a score of" + playerInfo.money + " .");
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
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE"
    )
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
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



