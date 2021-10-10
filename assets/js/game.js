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

    console.log("Your robots bane is " + name);
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
    window.alert("Welcome to Robot Gladiators!")

    var fight = function(enemy) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);
        //reapeat and execute as long as the enemy-robot is alive
        while(playerInfo.health > 0 && enemy.health > 0){ 
     
    
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip 
        var confirmSkip = window.confirm(" Are you sure you'd like to quit? ");

        // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye! ");
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
        }
    }
    
// if a plauyer chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health
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
    //ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your Health, UPGRADE your attack. or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. "
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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



