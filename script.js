

let quizDiv=document.querySelector("quiz");
let questionButton1 = document.querySelector("answer1")
let highScores = JSON.parse(localStorage.getItem("highScores")) || []

let timer = 90

let timerId = setInterval(function(){

timer -=1
concole.log(timer);


 }, 1000)




let questions = [{question:"...", answers:["......"], correctAnswer: "...."}]





let currentQuestion = 0

renderQuestion();

function renderQuestion(){

console.log(questions[currentQuestion].question)
questionButton1.textContent = questions[currentQuestion].answers[0]
console.log(questions[currentQuestion].answers[1])
console.log(questions[currentQuestion].answers[2])
console.log(questions[currentQuestion].answers[3])
console.log(questions[currentQuestion].answers[4])
console.log(questions[currentQuestion].answers[5])
console.log("correct anser:" + questions[currentQuestion].correctAnswer)

}





quizDiv.addEventListener("click", function(event){

if(event.target.matches("button")){
    console.log("clicked")
    console.log("value" +event.target.innerText)
    console.log("correct answer:" +questions[currentQuestion].correctAnswer)

    currentQuestion++
    renderQuestion();

}

})





//button that saves