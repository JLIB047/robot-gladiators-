var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

fight(); 

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
    playerName  +  "attacked" +  enemyName + ". "  + enemyName +  "now has " +  enemyHealth +  "health remaining."
);

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;


// Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + "attacked" + playerName + ". " + playerName + "now has" + playerHealth + "health remaining."
);

//put new code under this 
console.log(
    playerName + "attacked" + enemyName + ". " + enemyName + "now has" + enemyHealth + "health remaining."
);

//check enemy's health
if (enemyHealth <= 0){
    window.alert(enemyName + "has died!");
}
else {
    window.alert(enemyName + "still has" + enemyHealth + "health left.");
}

console.log(enemyName + "attacked" + playerName + ". " + playerName + "now has" + playerHealth + "health remaining.");

if (playerHealth <= 0) {
    window.alert(playerName + "has died!");
}
else {
    window.alert(playerName + "still has" + playerhealth + "health left.");
}
