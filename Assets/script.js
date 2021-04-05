var timerEl = document.querySelector(".timer-count")
var startButton = document.querySelector(".start-btn")
var nextButton = document.querySelector(".next-btn")
var questionContainerEl = document.getElementById("question-container")
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')
var timeLeft = 60;


var randomQuestion, currentQuestionIndex

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
startButton.addEventListener("click", function () {
    countDown();
    console.log('started');
    startButton.classList.add('hide');
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    nextQuestion();
})


function nextQuestion() {
    resetFunction()
    showQuestion(randomQuestion[currentQuestionIndex])
}
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(function (answer) {
        var button = document.createElement('button')
        button.textContent = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}
function resetFunction() {
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}
function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    // setStatusClass(document.getElementsByClassName('btn'))
    // .classList.add(correct)
    Array.from(answerButtonsEl.children).forEach(function (button) {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        startButton.disabled = false;
    }
}

// I am quite sure it is to do with the above

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong');
        timeLeft-=1.25 ; 
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
var questions = [
    {
        question: 'Which of these is NOT a data type?',
        answers: [
            { text: 'Alerts', correct: true },
            { text: 'Booleans', correct: false },
            { text: 'Strings', correct: false },
            { text: 'Numbers', correct: false }
        ],
    },
    {
        question: 'What is the largest part of the brain?',
        answers: [
            { text: 'Amygdala', correct: false },
            { text: 'Cerebellum', correct: false },
            { text: 'Cerebrum', correct: true },
            { text: 'Front part', correct: false }
        ],
    },
    {
        question: 'Which of these is a programming language?',
        answers: [
            { text: 'Bite', correct: false },
            { text: 'Gnaw', correct: false },
            { text: 'Itch', correct: false },
            { text: 'Scratch', correct: true }
        ],
    }

]
// For countdown timer - Now fully functional except the penalties which I am waiting to fix the above
function countDown() {
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

