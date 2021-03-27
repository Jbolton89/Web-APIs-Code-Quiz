var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-btn");

// Grabbing question container to edit in JS
var questionContainerDiv = document.getElementsByClassName("question-container");

startButton.addEventListener("click", function() { 
    countDown(); 
})
startButton.addEventListener("click", function(){
    startQuiz();
})
function startQuiz() {

}


// For countdown timer - Now fully functional
function countDown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = 'Time Is Up!';
            clearInterval(timeInterval);
        }
    }, 1000)
    startButton.disabled = true;
}



// startButton.disabled = true; 
// Need to figure out how to disable this button once clicked