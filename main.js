/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/*===== WORD OF THE DAY PROGRAMME =====*/

// Exact date programme
const monthOfYear = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
const d = new Date();
let todayMonth = monthOfYear[d.getMonth()]
let todayYear = d.getFullYear();
let todayDay = d.getDate();
document.getElementById("word-of-the-day-DATE").innerHTML = todayMonth + " " + todayDay + ", " + todayYear;

// Programme variables
var button = document.getElementById("submitGuessButton");

var wordOfTheDay = "doublethink";
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

    if (userWord === wordOfTheDay) {
        // says the word is correct
        document.getElementById("result").innerHTML = "Congratulations comrade!";
        // removes ability of more guesses
        button.remove();
        // disables input field
        document.getElementById("wordOfTheDayGuessBox").disabled = true;
    } else {

        if (guesses === 4) {

            for (let i = 0; i <= 3; i++) {
                if (userKey[i] === secretKey[i]) {
                    userScore += 1;
                }
            }

            if (userScore === 4) {
                // says the word is correct
                document.getElementById("result").innerHTML = "you are in...";
            } 
            // removes ability of more guesses
            button.remove();
            // disables input field
            document.getElementById("wordOfTheDayGuessBox").disabled = true;
        } 
    }
    
    document.getElementById("wordOfTheDayGuessBox").value = "";
}
