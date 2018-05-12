//variables
var health = 0, hero = 0, enemy = [];

//object array of characters
var characters = [


    bart = {
        name: "Bart",
        health: 175,
        d1: 10,
        d2: 10,
    },

    ned = {
        name: "Flanders",
        health: 230,
        d1: 10,
        d2: 5, 
    },

    homer = {
        name: "Homer",
        health: 300,
        d1: 10,
        d2: 1,
    },


    maggie = {
        name: "Maggie",
        health: 90,
        d1: 20,
        d2: 10,
    },
    
]

//alert(characters[2].name)
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

//start round fucntion

function startRound(hero){
   
    $("#battle").css('visibility', 'visible');

  //alert(characters.indexOf)
  
  }

function startFight(hero){
    
    var items = ["donut","apple","one of Apu's kids", "Flander's mustache", "pacifier"];

    item = Math.floor(Math.random() * items.length);
    item2 = Math.floor(Math.random() * items.length);

    for(i = 0; i < characters.length; i++){
      
        if(characters[hero] !== characters[i]){

            $("#battleBox").html(characters[hero].name + "   VS   " + characters[i].name);

            if(characters[hero].health && characters[i].health !== 0){
                
                var heroDmg = Math.floor(Math.random() * characters[hero].d1) + characters[hero].d2;
                var charDmg = Math.floor(Math.random() * characters[i].d1) + characters[i].d2;
               
                var heroAttack = 
                characters[hero].name + " hit " + characters[i].name + " with a " + items[item] + " for " + heroDmg + "!" + "<br>";
                
                var charAttack = 
                characters[i].name + " hit " + characters[hero].name + " with a " + items[item2] + " for " +  charDmg + "!";
           
                $("#battleBox").html(heroAttack + "  " + charAttack);
               
                heroDmg += heroDmg;
                charDmg += charDmg;

                var heroHealth = characters[hero].health - charDmg;
                var charHealth = characters[i].health - heroDmg;
           
                if(heroHealth === 0){
                    $("#battleBox").html("You Lose!");
                }
                


            }

            


        }






    }

    
   

 
}





