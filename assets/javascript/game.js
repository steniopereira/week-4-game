window.onload = function () {
// GAME OBJECTIVE - The goal of the game is to use the values assigned to each Jedi Kyber crystal button to match the Sith's random number.  After each kyber crystal is clicked, the Jedi's random number is added to the Jedi's Attack Number. If the player exceeds the random number, the player loses.  if the player matches the random number, the player wins.

// If the Jedi Attack number equals the Sith Attack number, the player wins that match.
// If the Jedi Attack exceeds the Sith Attack number, the player loses that match.
// Once the Jedi loses or wins the match, another match begins.


// Game starts/initiates & Sith Attack - Random Number between 19 and 120 is generated and displayed in Sith Attack Box
$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    console.log(Random)
    $("#number").text(Random);

// Setting up four random numbers array, total variable and printing the wins & losses variables	
var GeneratedNumbers = []
var total= 0;	
var wins= 0;
var losses = 0;
$("#numberWin").text(wins);
$("#numberLosses").text(losses);		

// Assign a random number to each kyber crystal for the Jedi Attack. Each crystal has a random number between 1 and 12.

function fourRandomNumbers(){
for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*11+1);
    GeneratedNumbers.push(num);
    }
    console.log(GeneratedNumbers) 
}

fourRandomNumbers();

//Reset the game
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $("#number").text(Random);
    GeneratedNumbers = [];
    fourRandomNumbers();
    total= 0;
    $("#Combined").text(total);
    } 

//adds the wins to the total
function victory(){
alert("The force is strong in you!");
    wins++;	
    $("#numberWin").text(wins);
    reset();
}

//adds the losses to the total
function defeat(){
alert ("The force has abandoned you!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
}

// Player selects any of the kyber crystals to determine the value assigned to it. That value is added to the Jedi Attack Box.  Each Kyber crystal can be clicked as many times as needed.

// green-kyber crystal value function
    $("#green-kyber").on ("click", function(){
        total = total + GeneratedNumbers[0];
        console.log("New total= " + total);
        $("#Combined").text(total);	

// win or lose conditions
    if (total == Random){
            victory();
        }
        else if ( total > Random){
            defeat();
        }		
    })	

// blue-kyber crystal value function
    $('#blue-kyber').on ('click', function(){
        total = total + GeneratedNumbers[1];
        console.log("New total= " + total);
        $("#Combined").text(total);	

            // win or lose conditions
            if (total == Random){
                victory();
            }
            else if ( total > Random){
                defeat();
            }	
    })	
// purple-kyber value function
    $("#purple-kyber").on ("click", function(){
        total = total + GeneratedNumbers[2];
        console.log("New total= " + total);
        $("#Combined").text(total);

            // win or lose conditions
            if (total == Random){
                victory();
            }
            else if ( total > Random){
                defeat();
            }	
    })	

// red-kyber value function
    $("#red-kyber").on ("click", function(){
        total = total + GeneratedNumbers[3];
        console.log("New total= " + total);
        $('#Combined').text(total);	

// win or lose conditions
            if (total == Random){
                victory();
            }
            else if ( total > Random){
                defeat();
            }
    });  	

});	
}   