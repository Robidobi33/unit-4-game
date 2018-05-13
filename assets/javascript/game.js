//variables
var health = 0, hero, fighter, randomChar, heroHealth, charHealth, defeated = [], enemies = [0,1,2,3], counter=0;

//object array of characters
var characters = [

    bart = {
        name: "Bart",
        health: 175,
        d1: 25,
        d2: 10,
    },

    ned = {
        name: "Flanders",
        health: 230,
        d1: 20,
        d2: 5, 
    },

    homer = {
        name: "Homer",
        health: 300,
        d1: 15,
        d2: 5,
    },

    maggie = {
        name: "Maggie",
        health: 90,
        d1: 65,
        d2: 10,
    },
    
]


console.log(maggie);

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

function reset(){
    location.reload();
}

//start round fucntion

function startRound(hero){
    fighter = hero;
    $("#battleBox").html("Begin Battle!")
    $("#battle").css('visibility', 'visible');

    for(i=0; i<enemies.length; i++){
    
        if (hero == enemies[i]){
            enemies.splice(i, 1);
       }
       
    }
    
    randomChar = enemies[Math.floor(Math.random() * enemies.length)];

        for(i=0; i<enemies.length; i++){
        
            if (randomChar == enemies[i]){
                enemies.splice(i, 1);
            }

        }
    
    console.log(enemies.length)
    charHealth = characters[randomChar].health;
    heroHealth = characters[hero].health;

    $("#battleBox2").html(characters[hero].name + "   VS   " + characters[randomChar].name);
    
  }

    function startFight(hero){

        $("#battle").html("Attack");

        var items = ["a Donut","an Apple","One of Apu's Octuplets", "Flander's mustache", "a Pacifier", "a Duff Beer", "Grandpa's Kidney", "Krusty-Os", "Mr. Sparkle", "Homer's Dignity", " a Dental Plan", "Carl", "Homer's MooMoo", "Uranium", "a Flaming Moe", "a Walkman", "Santa's Little Helper", "Homer's Scream", "a Krusty doll", "Flaming Homer", "a Comic Book", "a Pearl Necklace", "a Pink Business Suit", "Spider Pig", "Dr. Hibbert's Inappropriate Laughter"];

        item = Math.floor(Math.random() * items.length);
        item2 = Math.floor(Math.random() * items.length);

                if(characters[hero].health && characters[randomChar].health >= 0){
                
                    var heroDmg = Math.floor(Math.random() * characters[hero].d1) + characters[hero].d2;
                    var charDmg = Math.floor(Math.random() * characters[randomChar].d1) + characters[randomChar].d2;
                
                    var heroAttack = 
                    characters[hero].name + " hit " + characters[randomChar].name + " with " + items[item] + " for " + heroDmg + "!" + "<br>";
                    
                    var charAttack = 
                    characters[randomChar].name + " hit " + characters[hero].name + " with " + items[item2] + " for " +  charDmg + "!";
            
                    $("#battleBox").html(heroAttack + "  " + charAttack);
                
                    }
                    
                    heroHealth = heroHealth -= charDmg;
                    charHealth = charHealth -= heroDmg;

                    if (heroHealth < 0){
                        heroHealth = 0;
                    }
                    if (charHealth < 0){
                        charHealth = 0;
                    }

                    $("#battleBox2").html(characters[hero].name  +" health: " + heroHealth + "<br>" +characters[randomChar].name + " health: " + charHealth);

                    heroDmg += heroDmg;
                    charDmg += charDmg;


                        if(charHealth <= 0){ 
                        $("#battleBox").html(characters[hero].name +" Won!");
                        counter++;
                        console.log("counter:" + counter);
                            if(counter == 3){
                                $("#battleBox").html(characters[hero].name + " is undefeated!");
                                $("#battle").on("click", reset).html("New Game")
                            }
                            
                                else{
                                    startRound(hero);
                                    $("#battle").html(characters[hero].name+" won! Begin next round");
                                }

                        }

                        else if(heroHealth <= 0){
                            $("#battleBox").html(characters[hero].name +" Lost!");
                            $("#battle").css('visibility', 'visible');  
                            counter = 0; 
                            $("#battle").on("click", reset).html("New Game");
                            
                        }

        }


    





