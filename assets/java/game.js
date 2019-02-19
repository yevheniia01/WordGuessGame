var reptileTypes= ['IGUANA', 'GECKO', 'POGONA', 'CAIMANLIZARD', 'BALLPYTHON', 'TREEFROG', 'ANOLE', 'CORNSNAKE', 'MONITOR', 'KINGCOBRA', 'COPPERHEAD', 'CONSTRICTOR'];


var maxGuess = 10;
var storeArr = [];
var guessedLetters = [];
var remainingGuesses = 0;
var numWins = 0;
var numLosses = 0;
var theEnd = false;
var newWord;

var image1 = '../WordGuessGame/assets/images/greeniguana.jpeg';
var image2 = '../WordGuessGame/assets/images/crested_gecko.jpg';
var image3 = '../WordGuessGame/assets/images/beardeddragon.jpeg';
var image4 = '../WordGuessGame/assets/images/caimanlizard.jpeg';
var image5 = '../WordGuessGame/assets/images/ballpython.jpg';
var image6 = '../WordGuessGame/assets/images/cornsnake.jpg';
var image7 = '../WordGuessGame/assets/images/anole1.jpg';
var image8 = '../WordGuessGame/assets/images/treefrog.jpg';
var image9 = '../WordGuessGame/assets/images/monitor.jpg';
var image10 = '../WordGuessGame/assets/images/kingcobra.jpg';
var image11 = '../WordGuessGame/assets/images/copperhead.jpg';
var image12 = '../WordGuessGame/assets/images/boa.jpg';

function start() {
    newWord = reptileTypes[Math.floor(Math.random() * reptileTypes.length)];
    storeArr = [];
    
    for (var i =0; i < newWord.length; i++) {
        storeArr[i] = "_";
    }


    remainingGuesses = maxGuess;
    guessedLetters = [];

    document.getElementById("image").src = "";
    document.getElementById('numberOfGuesses').style.color = "";
    document.getElementById('button1').style.visibility = "hidden";

    updateFunc();
};

function updateFunc(){
    document.getElementById("numberWins").innerHTML = numWins;
    document.getElementById("numberLosses").innerHTML = numLosses;
    document.getElementById("numberOfGuesses").innerHTML = remainingGuesses;
    document.getElementById("answerWord").innerHTML = storeArr.join("");
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
};

function checkfunc(letter) {
    if (guessedLetters.indexOf(letter)=== -1){
        guessedLetters.push(letter);

        if (newWord.indexOf(letter) === -1){
            remainingGuesses--;
            if (remainingGuesses <=3) {
                document.getElementById("numberOfGuesses").style.color = "#e12d2e";
            }
        }else{
            for (var i = 0; i < newWord.length; i++){
                if (letter === newWord[i]){
                    storeArr[i] = letter;
                }
            }
        }
    }
};

function winFunc(){
    if (storeArr.indexOf("_")=== -1){
        numWins++;
        theEnd = true;

        if(newWord === "IGUANA"){
            document.getElementById("image").src = image1;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/NC7TLR0tBPU";
        }else if (newWord === "GECKO"){
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/KwWzQMkEmP4";
            document.getElementById("image").src = image2;
        }else if (newWord === "POGONA"){
            document.getElementById("image").src = image3;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://www.youtube.com/watch?v=FJUfpQMBoFY&t=370s";
        }else if (newWord === "CAIMANLIZARD"){
            document.getElementById("image").src = image4;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/NC7TLR0tBPU";
        }else if (newWord === "BALLPYTHON"){
                document.getElementById("image").src = image5;
                document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/HMyxhKT0CQQ";
        }else if (newWord === "TREEFROG"){
            document.getElementById("image").src = image8;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/jly9jgOqrzI";
        }else if (newWord === "ANOLE"){
            document.getElementById("image").src = image7;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/blXmYtPXrQ4";
        }else if (newWord === "CORNSNAKE"){
            document.getElementById("image").src = image6;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/vjQ8e84JHrA";
        }else if (newWord === "MONITOR"){
            document.getElementById("image").src = image9;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/4zqj4h8kx2M";
        }else if (newWord === "KINGCOBRA"){
            document.getElementById("image").src = image10;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/GCXzQ1fsbN8";
        }else if (newWord === "COPPERHEAD"){
            document.getElementById("image").src = image11;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/N8cqUB1HBqU";
        }else if (newWord === "CONSTRICTOR"){
            document.getElementById("image").src = image12;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/bACJQZG4b40";
        
        }
   }
}; 

function losseFunc(){
    if (remainingGuesses <=0){
        numLosses++;
        theEnd = true;
        alert("oh no.......try again!");
    }
};

document.onkeyup = function(event) {

    if (theEnd){
        start();
        theEnd = false;
    }else{
        if(event.keyCode >= 65 && event.keyCode <=90){
            checkfunc(event.key.toUpperCase());
            updateFunc();
            winFunc();
            losseFunc();
        }
    }
};

start();
updateFunc();

console.log(newWord);