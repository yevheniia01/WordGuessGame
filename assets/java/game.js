var reptileTypes= ['IGUANA', 'GECKO', 'POGONA', 'CAIMANLIZARD', 'BALLPYTHON', 'TREEFROG', 'ANOLE', 'CORNSNAKE', 'MONITOR', 'KINGCOBRA', 'COPPERHEAD', 'CONSTRICTOR'];


var maxGuess = 10;
var storeArr = [];
var guessedLetters = [];
var remainingGuesses = 0;
var winsCount = 0;
var losseCount = 0;
var gameOver = false;
var randomWord;

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
var imgGameOver = '../WordGuessGame/assests/images/videoblocks-game-over-8-bit-funky-a-funky-colorful-4k-game-over-screen-animation-letters-falling-towards-the-center-8-bit-retro-style-red-and-yellow_hcqx9_kax_thumbnail-full06.png'

function start() {
    randomWord = reptileTypes[Math.floor(Math.random() * reptileTypes.length)];
    storeArr = [];
    
    for (var i =0; i < randomWord.length; i++) {
        storeArr[i] = "_";
    }


    remainingGuesses = maxGuess;
    guessedLetters = [];

    document.getElementById("image").src = "";
    document.getElementById('numberOfGuesses').style.color = "";
    document.getElementById('button1').style.visibility = "hidden";
   
    refresh();
};

function refresh(){
    document.getElementById("numberWins").innerHTML = winsCount;
    document.getElementById("numberLosses").innerHTML = losseCount;
    document.getElementById("numberOfGuesses").innerHTML = remainingGuesses;
    document.getElementById("answerWord").innerHTML = storeArr.join("");
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
};

function checkfunc(letter) {
    if (guessedLetters.indexOf(letter)=== -1){
        guessedLetters.push(letter);

        if (randomWord.indexOf(letter) === -1){
            remainingGuesses--;
            if (remainingGuesses <=3) {
                document.getElementById("numberOfGuesses").style.color = "#e12d2e";
            }
        }else{
            for (var i = 0; i < randomWord.length; i++){
                if (letter === randomWord[i]){
                    storeArr[i] = letter;
                }
            }
        }
    }
};

function winFunc(){
    if (storeArr.indexOf("_") === -1){
        winsCount++;
        gameOver = true;

        if(randomWord === "IGUANA"){
            document.getElementById("image").src = image1;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/NC7TLR0tBPU";
        }else if (randomWord === "GECKO"){
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/KwWzQMkEmP4";
            document.getElementById("image").src = image2;
        }else if (randomWord === "POGONA"){
            document.getElementById("image").src = image3;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://www.youtube.com/watch?v=FJUfpQMBoFY&t=370s";
        }else if (randomWord === "CAIMANLIZARD"){
            document.getElementById("image").src = image4;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/NC7TLR0tBPU";
        }else if (randomWord === "BALLPYTHON"){
                document.getElementById("image").src = image5;
                document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/HMyxhKT0CQQ";
        }else if (randomWord === "TREEFROG"){
            document.getElementById("image").src = image8;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/jly9jgOqrzI";
        }else if (randomWord === "ANOLE"){
            document.getElementById("image").src = image7;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/blXmYtPXrQ4";
        }else if (randomWord === "CORNSNAKE"){
            document.getElementById("image").src = image6;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/vjQ8e84JHrA";
        }else if (randomWord === "MONITOR"){
            document.getElementById("image").src = image9;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/4zqj4h8kx2M";
        }else if (randomWord === "KINGCOBRA"){
            document.getElementById("image").src = image10;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/GCXzQ1fsbN8";
        }else if (randomWord === "COPPERHEAD"){
            document.getElementById("image").src = image11;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/N8cqUB1HBqU";
        }else if (randomWord === "CONSTRICTOR"){
            document.getElementById("image").src = image12;
            document.getElementById("button1").style.visibility = "visible";
            document.getElementById("button1").href = "https://youtu.be/bACJQZG4b40";
        
        }
   }
}; 

function losseFunc(){
    if (remainingGuesses <=0){
        losseCount++;
        gameOver = true;
        $(".body").append(imgGameOver)
    }
};

document.onkeyup = function(event) {

    if (gameOver){
        start();
        gameOver = false;
    }else{
        if(event.keyCode >= 65 && event.keyCode <=90){
            checkfunc(event.key.toUpperCase());
            refresh();
            winFunc();
            losseFunc();
        }
    }
};

start();
refresh();

console.log(randomWord);