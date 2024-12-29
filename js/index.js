// Prevent us from attempting to use variables
// that are not declared
"use strict"
let healthPoints = 20;
let experiencePoints = 100;

if (healthPoints >= 10) { //Checks HP only if >10 then ok
    console.log("Hero is healthy.");
} else if (healthPoints < 10 && healthPoints >= 5) { //5 <= hp < 10
    console.log("Hero is slightly damaged.");
} else {
    console.log("Hero is close to death."); //if hp <5 then this
}
if (healthPoints >= 20) {
    console.log("Hero is leveling up!!!"); //hp >=20 Superhero
}
if (healthPoints == 0) {
    console.log("You're hero has died, and you are next!!"); //HP = 0 then dead
}
if (experiencePoints > 100) { //XP allows hero to level up
    console.log("Hero has a new Super Power!!");
}  

if (experiencePoints >= 100) { //XP makes hero a SUPER
    console.log("Hero is now a SUPERHERO!!");
} else if (experiencePoints < 100 && healthPoints >= 5) { //Hero is hungry!
    console.log("Hero needs to recharge!  Get him a sandwich!!");
} else if (experiencePoints <100 && healthPoints < 10){ //Hero is dying
    console.log("Hero is close to death.");
} else {
    console.log("Your Hero Has Died!!"); // Hero is dead
}