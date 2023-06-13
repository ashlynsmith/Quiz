
let startQuizB = document.querySelector("#startQuiz")
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let timeE1 = document.querySelector("#timer");
let correctAnswer = document.querySelector("#correctAnswer")
let highScore = document.querySelector("#highScore")
let highScoreInput = document.querySelector("#highScoreInput")
let timerInput = document.querySelector("#timerInput")
let highScorePage = document.querySelector("#highScorePage")
let enter = document.querySelector("#enter")
let submitInitials = document.querySelector("#submitInitials")
let highScores = JSON.parse(localStorage.getItem("highScores")) || []
let ul = document.querySelector(".showScores")
let timer = 120
let timerID;
highScores.textContent = ("highScores")


// Displays High Score page
highScore.addEventListener("click", function(){
    startQuizB.classList.add("hide")
    highScorePage.classList.remove("hide")
    highScore.classList.add("hide")
    highScoreInput.classList.add("hide")
})
// Putting your time on the page when you submit it
enter.addEventListener("click", function(){
    timerInput.textContent = "Your score is: " +timer
})
// Return to quiz Start
highScorePage.addEventListener("click", function(){
    
    highScorePage.classList.add("hide")
    startQuizB.classList.remove("hide")
    highScore.classList.remove("hide")
    highScoreInput.classList.add("hide")
    
})

// Starts the quiz
startQuizB.addEventListener("click", function(){
    
    quizDiv.classList.remove("hide")
    startQuizB.classList.add("hide")
    startTimer();
    
    
})

// Submitting the initials and score to the high score page
enter.addEventListener("click", function (event){
    event.preventDefault();
    let playerScore = {
        initials: submitInitials.value,
        timer: timer,
    }
    highScores.push(playerScore)
    localStorage.setItem("highScores", JSON.stringify(highScores));
    renderScore();
    
    
})

function renderScore(){
    
    
    for (let i = 0; i < highScores.length; i++) {
        
        let liScore = document.createElement("li");

        liScore.textContent = highScores[i].initials + "-" + highScores[i].timer


        ul.appendChild(liScore)
         
    }

}




// timer and score 
function startTimer(){
    
    timeE1.textContent = timer;

    timerID = setInterval(function(){
    
        timer -=1
        timeE1.textContent = timer;

        if (timer <= 0 || currentQuestion === questions.length){
            
            clearInterval(timerID);
            endQuiz();
            timer.textContent = timerInput
            
    
        }
        
    
    }, 1000)
}

// question object to display
let questions = [{question: "Who painted the Mona Lisa?" , answers: ["Pablo Picasso" , "Leonardo De Vinci" , "Michelangelo" , "Vincent van Gogh"], correctAnswer: "Leonardo De Vinci" },
                {question: "In what museum is the Mona Lisa located at?" , answers: ["Louvre Museum" , "The Metropolitan Museum" , "Van Gough Museum" , "Vatican Museum"], correctAnswer: "Louvre Museum" },
                {question: "What city is the Vatican Museum located in?" , answers: ["Paris" , "New York" , "Vatican" , "Rome"], correctAnswer: "Vatican" },
                {question: "What art originated in Europe?" , answers: ["Neoclassicism" , "Romanticism" , "Academism" , "Realism" , "All the above"], correctAnswer: "All the above" },
                {question: "Who painted The Stary Night?" , answers: ["Pablo Picasso" , "Vincent van Gough" , "Salvador Dali" , "Claude Monet"], correctAnswer: "Vincent Van Gough" },
                {question: "Who painted the Impression, Sunrise?" , answers: ["Paul Cezanne" , "Pablo Picasso" , "Johannes Vermeer" , "Claude Monet"], correctAnswer: "Claude Monet"},
                {question: "Where is the original sculpture of the David located?" , answers: ["Piazza della Signoria" , "Palazzo Vecchio" , "Accademia Gallery of Florence" , "Piazzale Michelangelo"], correctAnswer: "Accademia Gallery of Florence" },
                {question: "What is the oldest museum in the world of Rome?" , answers: ["Capitoline Museum" , "Borghese Gallery and Museum" , "Palazzo Massimo" , "Museo Nazionale Romano"], correctAnswer: "Capitoline Muesum" },
                {question: "Who was the painter of The Scream?" , answers: ["Vincent van Gough" , "Edvard Munch" , "Pablo Picasso" , "Leonardo De Vinci"], correctAnswer: "Edvard Munch"},
                {question: "When was The Starry Night painted?" , answers: ["1823" , "1880" , "1767" , "1889"], correctAnswer: "1889" },

]
//Variables and putting calling the function to display the questions
currentQuestion = 0
renderQuestion();

// Renders the questions and answer choices onto the page
function renderQuestion(){
    
    question.textContent = questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3];
    if (currentQuestion === questions.length - 1){
        endQuiz()
    }
}


// Puts the questions on page
quizDiv.addEventListener("click" , function(event){
    let eventEl = event.target
    
    if(eventEl.matches("button")){
        if (eventEl.innerText === questions[currentQuestion].correctAnswer){
            correctAnswer.textContent =  "Correct Answer: " + questions[currentQuestion].correctAnswer; 
            
        }
        else {
            correctAnswer.textContent =  "Wrong Answer"
            timer -= 10;

        }

        currentQuestion++
        renderQuestion();
    }
    
    
})
    // Ends the quiz if time runs out or if you answer the last question
    function endQuiz() {

        quizDiv.classList.add("hide")
        highScoreInput.classList.remove("hide")
        highScorePage.classList.add("hide")
    }
