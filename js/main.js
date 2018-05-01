$(document).ready(function() 
{
    console.log ("starting super hero JS code");

    /*
    ** generally you want to declare your constants up top early so they are easy to find and change if need be
    */
    // creating these constants to index super heroes and make code easier to read and maintain
    var Hulk = 0;
    var Flash = 1;
    var Superman = 2;
    var Wolverine = 3;
    var CaptainAmerica = 4;
    var LastHero = CaptainAmerica;

    // time to wait before alternating hero view
    var HeroChangeTimeoutMS = 3000;
    
    var SuperHero = function(img,name,about,truename,power,enemy,color)
    {
        
        this.img = img;
        this.name= name;
        this.about= about;
        this.truename= truename;
        this.power= power;
        this.enemy= enemy;
        this.color=color;
        // this method returns true if the hero has XRay Vision as one of its super powers; false otherwise
        this.hasXrayVision = function (){
            numPowers = this.power.length;
            var hasXrayVision = false;
               for (var j=0; j < numPowers; j++)
                {
                    if ( this.power[j] == " Xray Vision")
                    {
                        hasXrayVision = true;
                    }
                }   
                return hasXrayVision;
            }
    };
    
    
    // Will Display Text Green If hero has XrayVision , Red otherwise
    function xrayVisionID (hasXrayVision) {
         
        if (hasXrayVision === false)
            {
                $("#xray").text("False");
                $("#xray").css("color","red");
            }
                else
                {
                    $("#xray").text("True");
                    $("#xray").css("color","green");
                }

                
            };

    // moved changeHero out of the SuperHero constructor. This function is not a method for a particular hero so we want it to be 
    // outside of that
        function changeHero (hero)
    {
        console.log ("changing super hero view to " + hero.name);
        $("#heroImg").attr("src",hero.img);
        $("#heroName").text(hero.name);
        $("#info").text(hero.about);
        $("#truename").text(hero.truename);
        $("#power").text(hero.power);
        $("#enemy").text(hero.enemy);
        $("#heroName").css("color",hero.color);
        xrayVisionID(hero.hasXrayVision())
        console.log ("created super hero " + hero.name);
         
    }
    
    function changeHeroViewByIndex (index)
    {
        changeHero (superHeros [index]);
    }
    
 
    
    var superHeros = new Array();
            superHeros [Hulk] = new SuperHero("img/hulk.jpg","Hulk","Super strong genetically muatated army experiment.","Bruce Banner",["Super Strength"," Can grow in size"," Anger boost strength"],"Military","Green");
            superHeros [Flash] = new SuperHero("img/flash.jpg","Flash","Struck by lightning and inherited the ability of super speed.","Barry Allen",["Super Speed"," Go through walls"," Reverse time"],"Fiddler","Red");
            superHeros [Superman] = new SuperHero("img/superman.jpg","Superman","Alien Human from another planet.","Clark Kent",["Super Human Abilities"," Xray Vision"," Laser Beams"],"Lex Lugor","Blue");
            superHeros [Wolverine] = new SuperHero("img/wolverine.jpg","Wolverine","Genetic experiment infused with the world's strongest metal.","James (Logan) Howlet",["Regeneration"," Metal Claws"," Great Strength"],"Magneto","Yellow");
            superHeros [CaptainAmerica] = new SuperHero("img/captain.jpg","Captain America","Army enhanced super soldier.","Joe Simon",["Super Soldier"," Power Shield"," Justice"],"Red Skull","Blue");
           
    /*
    ** this function will iterate through each of the super heros in the array and will
    ** stop once all super heros in the array have been displayed
    */
    // using 'j' as an index variable as its much easier to find vs. 'i'
    for (var j=0; j < superHeros.length; j++)
    {
        // need to multiply timeout by index (j) or else all values chagne at the same time and you only see last super hero
        var timeoutValue = j * HeroChangeTimeoutMS;

        // the method below works but not for IE9 or below
        // setTimeout(changeHero, timeoutValue, superHeros[j]);

        // the method below works but is less efficient than the one above
        setTimeout(function(x) { return function() { changeHero(superHeros[x]); }; }(j), timeoutValue);


    };
    

    console.log ("exiting super hero JS now... ok");
   
}); // end of file
