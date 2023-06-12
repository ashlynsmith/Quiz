// Variables and querySelectors to select what I want to change/work on
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




// timer and score for the quiz
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
let questions = [{question: "What do you spawn with in a new world in Minecraft?" , answers: ["A Wooden Pickaxe" , "An Stone Axe" , "1 Piece of Bread" , "Nothing"], correctAnswer: "Nothing" },
                {question: "How many hearts of damage do you take when you fall 10 blocks in Minecraft with no protection?" , answers: ["2 Full Hearts" , "1 Full Hearts and a Half" , "3 Full Hearts and a Half" , "3 Full Hearts"], correctAnswer: "3 Full Hearts and a Half" },
                {question: "What is Minecraft's rarest biome?" , answers: ["Ice Spikes Biome" , "Bamboo Jungle Biome" , "Mesa Biome" , "Mushroom Fields Biome"], correctAnswer: "Mushroom Fields Biome" },
                {question: "How long is one full day cycle in Minecraft?" , answers: ["15 Minutes" , "17 Minutes" , "19 Minutes" , "20 Minutes"], correctAnswer: "20 Minutes" },
                {question: "What are the chances in Minecraft that the end portal frame containing exactly  0 eyes." , answers: ["28%" , "35%" , "25%" , "31%"], correctAnswer: "28%" },
                {question: "How long does it take to break obsidian by hand in Minecraft?" , answers: ["300 Seconds" , "250 Seconds" , "200 Seconds" , "225 Seconds"], correctAnswer: "250 Seconds"},
                {question: "How many blocks of Diamonds would it take to build a full beacon in Minecraft" , answers: ["164 Blocks" , "168 Blocks" , "166 Blocks" , "165 Blocks"], correctAnswer: "164 Blocks" },
                {question: "What is the chance of a tamed wolf killing a wither skeleton and it dropping a wither skeleton skull in Minecraft?" , answers: ["1%" , "1.5%" , "2%" , "2.5%"], correctAnswer: "2.5" },
                {question: "How big of a nether portal do you need in Minecraft to transfer a ghast into the Over-World at minimum?" , answers: ["It's not possible" , "4x4" , "5x5" , "7x7"], correctAnswer: "5x5"},
                {question: "What item do you give frogs in Minecraft for breeding?" , answers: ["Lily Pads" , "Seeds" , "Spore Blossoms" , "Slime Balls"], correctAnswer: "Slime Balls" },
                {question: "Fake Question", answers: ["N/A" , "N/A", "N/A", "N/A"], correctAnswer: "N/A"}

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