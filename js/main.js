$(document).ready(function() 
{
    console.log ("starting super hero JS code");
    
    var SuperHero = function(img,name,about,truename,power,enemy,color)
    {
        this.img = img;
        this.name= name;
        this.about= about;
        this.truename= truename;
        this.power= power;
        this.enemy= enemy;
        this.color=color;
        this.changeHero = function(hero){
  
        $("#heroImg").attr("src",hero.img);
        $("#heroName").text(hero.name);
        $("#info").text(hero.about);
        $("#truename").text(hero.truename);
        $("#power").text(hero.power);
        $("#enemy").text(hero.enemy);
        $("#heroName").css("color",hero.color);
    };
    }; 
    
    var hulk = new SuperHero("img/hulk.jpg","Hulk","Super strong genetically muatated army experiment.","Bruce Banner","Super Strength","Military","Green");
   
    var flash = new SuperHero("img/flash.jpg","Flash","Struck by lightning and inherited the ability of super speed.","Barry Allen","Super Speed","Fiddler","Red");
    
    var superman = new SuperHero("img/superman.jpg","Superman","Alien Human from another planet.","Clark Kent","Super Human Abilities","Lex Lugor","Blue");
    
    var wolverine = new SuperHero("img/wolverine.jpg","Wolverine","Genetic experiment infused with the world's strongest metal.","James (Logan) Howlet","Regeneration and Metal Claws","Magneto","Yellow");
    
    var captainAmerica = new SuperHero("img/captain.jpg","Captain America","Army enhanced super soldier.","Joe Simon","Super Soldier","Red Skull","Blue");
    
    var chars= new Array();
    chars.push(hulk,flash,superman,wolverine,captainAmerica);
     
for (var i=0;i<chars.length;i++)
        {
           
setTimeout(function(x) { return function() { chars[x].changeHero(chars[x]); }; }(i), 4000*i);
            
        };
});

/* var clicks = 0;
$("#click").click(function(){
    if(clicks == 0){
        hulk.changeHero(hulk);
    }
    else if(clicks == 1){
        flash.changeHero(flash);
    }
    else if(clicks == 2) {
        superman.changeHero(superman);
    }
    else if(clicks == 3){
        wolverine.changeHero(wolverine);
    }
    else if(clicks == 4){
        captainAmerica.changeHero(captainAmerica);
    }
    
    ++clicks;
}); */
    
     
   /* var clicks = 0;
$("#click").click(function(){
    if(clicks == 0){
        hulk.changeHero(hulk);
    }
    else if(clicks == 1){
        flash.changeHero(flash);
    }
    else if(clicks == 2) {
        superman.changeHero(superman);
    }
    else if(clicks == 3){
        wolverine.changeHero(wolverine);
    }
    else if(clicks == 4){
        captainAmerica.changeHero(captainAmerica);
    }
    
    ++clicks;
}); */


  /* var heroList = [ hulk, flash, "superman", "wolverine", "captainAmerica"];
    var listLength = heroList.length;
    var changeHero = function() {
        for (var i=0;i<=listLength;i++)
        {
            setTimeout(function(){[0].changeHero([0]),3000*[0]});
        };
    };
        
        changeHero(); */

    
  /*  var chars = [hulk,flash,superman,wolverine,captainAmerica];
    
        for (var i=0;i<chars.length;i++)
            var chars = chars[i];
        {
            setTimeout(function(){chars.change(chars),3000});
            
        }; */
            
    
    
    
    