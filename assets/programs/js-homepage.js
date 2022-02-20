/*===== WORD OF THE DAY PROGRAMME =====*/
  
// Programme for word of the day
const wordOTDList = ["doublethink", "crimethink", "crimestop", "bellyfeel", "facecrime", "goodthink", "duckspeak"];
const wordOTDDefinitionList = [
    "'Reality control. The power to hold two completely contradictory beliefs in one's mind simultaneously, and accept both of them.'", 
    "'Doubting any of the principles of Ingsoc.'",
    "'To rid oneself of unorthodox thoughts that go against Ingsoc's ideology.'",
    "'The blind, enthusiastic acceptance of a concept.'",
    "'A facial expression which reveals that one has committed thoughtcrime.'",
    "'Political orthodoxy.'",
    "'Automatic, vocal support of political orthodoxies.'"
];
const d = new Date();
let todayWeekDay = d.getDay();
var wordOfTheDayNumber = todayWeekDay;
var wordOfTheDay = wordOTDList[wordOfTheDayNumber];

document.getElementById("wordDefinition").innerHTML = wordOTDDefinitionList[wordOfTheDayNumber];
 
// Programme variables
var button = document.getElementById("submitGuessButton");
 
const secretKey = ["down", "with", "big", "brother"];
const userKey = [];
 
var guessed = false;
var userScore = 0;
var guesses = 0;
 
 
// On button click programme
function wordOfTheDayButtonClick() {

    var userWord = document.getElementById("wordOfTheDayGuessBox").value;
    userKey.push(userWord);
    guesses += 1;

    if (guesses === 1) {
        document.getElementById("wordOfTheDayGuessBox").placeholder='3 more guesses';
    } else if (guesses === 2) {
        document.getElementById("wordOfTheDayGuessBox").placeholder='2 more guesses';
    } else if (guesses === 3) {
        document.getElementById("wordOfTheDayGuessBox").placeholder='1 more guess';
    } else if (guesses === 4) {
        document.getElementById("wordOfTheDayGuessBox").placeholder='Out of guesses';
    }
 
    if (userWord === wordOfTheDay) {
        // !!! correct word
        // removes ability of more guesses
        button.disabled = true;
        // disables input field
        document.getElementById("wordOfTheDayGuessBox").disabled = true;
        // changes color to gold
        document.getElementById("wordOfTheDayGuessBox").style.color = "#ffbe00";
        document.getElementById("wordOfTheDayGuessBox").style.borderColor = "#ffbe00";
      
    } else {
 
        if (guesses === 4) {
 
            for (let i = 0; i <= 3; i++) {
                if (userKey[i] === secretKey[i]) {
                    userScore += 1;
                }
            }
 
            if (userScore === 4) {
                // sends the user to the brotherhood
                window.open('brotherhood.html');
                // updates the placeholder to 'you are dead'
                document.getElementById("wordOfTheDayGuessBox").value = "";
                document.getElementById("wordOfTheDayGuessBox").placeholder='you are dead';
            }
            // removes ability of more guesses
            button.disabled = true;
            // disables input field
            document.getElementById("wordOfTheDayGuessBox").disabled = true;
        }
    }

    if (userWord === wordOfTheDay) {
        document.getElementById("wordOfTheDayGuessBox").value = wordOfTheDay;
    } else if ((guesses != 4) || ((guesses === 4) && (userScore != 4)) ) {
        document.getElementById("wordOfTheDayGuessBox").value = "";
    }
 
}