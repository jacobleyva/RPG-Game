/*
I used a few refrences to help me get to this point I am still
 trying to undestand the logic of javascript these are the links 
 I used to help me create what I Made so far..

 1.https://www.geeksforgeeks.org/string-in-switch-case-in-java/
 2.https://www.youtube.com/watch?v=U-rbxPc_FJ4&t=279s
 3.https://stackoverflow.com/questions/34714834/calling-a-function-within-a-switch-case
*/ 

//Creating player object constructors

//one function for 3 characters starting on choosen one.
let Game = {
    setGameStart: function(classType) {
        this.Player(classType);
    },

    //created the stats for the characters within a switch case
    Player: function(classType) {
        switch (classType) {
            case "EVA 00":
              player = new Player(classType, 1200, 250);
              break;
            case "EVA 01":
              player = new Player(classType, 1800, 200);
              break;
            case "EVA 02":
              player = new Player(classType, 1650, 305);
              break;  
            default:
        }
    },
}
//function for what happens when the player attacks
let player;

function Player(classType, health, strength) {
    //calling the strings health and strength to compare
    this.classType = classType;
    this.health = health;
    this.strength = strength;
}

let enemy;
    //creating an enemy function to run a comparision 
function Enemy(classType, health, strength) {
    this.classType = classType;
    this.health = health;
    this.strength = strength;
}

//calculate what happens when the player attacks
let playerAttack = function(attack) {
    let calcBaseDmage;
    if (player.strength > 0) {
        calcBaseDmage = player.strength * player.health / 1000;
    
    }
}


