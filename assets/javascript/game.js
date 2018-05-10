//variables
var health = 0, hero, enemy = [], item;

//object array of characters
var characters = [

    homer = {
        name: "Homer",
        health: 300,
        dmg: Math.floor(Math.random() * 10)
    },

    bart = {
        name: "Bart",
        health: 175,
        dmg: Math.floor(Math.random() * 10) + 10
    },

    maggie = {
        name: "maggie",
        health: 90,
        dmg: Math.floor(Math.random() * 20) + 10
    },
    ned = {
        name: "Flanders",
        health: 230,
        dmg: Math.floor(Math.random() * 10) + 5
    }

]
console.log(characters);
console.log(maggie.attack);

function textChange(){
    $("#heroOne").html("HP: 175");
    $("#heroTwo").html("HP: 230");
    $("#heroThree").html("HP: 300");
    $("#heroFour").html("HP: 90");
}

function textRevert (){
    $("#heroOne").html("Bart");
    $("#heroTwo").html("Flanders");
    $("#heroThree").html("Homer");
    $("#heroFour").html("Maggie");
    
}

//start round fucntion

function startRound(hero){
    
    for(i=0;i<characters.lenght;i++){
        alert(characters[i]);
    }

    //index of name
    //splice

    //for loop for the remaining 3


    var heroAttack = 
    hero + " hit " + enemy[x] + " with a " + item + " for " + dmg + "!";

    var enemyAttack = 
    enemy[x] + " hit " + hero + " with a " + item + " for " + dmg + "!";


 
}





