var win = document.querySelector(".win")
var lose = document.querySelector(".lose")

var winCounter = 0; 
var loseCounter = 0; 

function init() {
    getWins();
    getLosses();
}

function winGame () {
    if (countDown >= 1){ 
        winCounter++ 
    }
}
localStorage.setItem('winCounter'),JSON.stringify(winCounter);
localStorage.setItem('loseCounter'),JSON.stringify(loseCounter);
// I ran out of time to learn this again 