const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            {text:"Shark", correct: false},
            {text:"Blue-Whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Girraffe", correct: false}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            {text:"Africa", correct: false},
            {text:"Austrilia", correct: true},
            {text:"America", correct: false},
            {text:"Asia", correct: false}
        ]
    },
    {
        question: "Which is the largest Desert in the world?",
        answer: [
            {text:"Gobi", correct: false},
            {text:"Shara", correct: false},
            {text:"Kalahari", correct: false},
            {text:"Antartica", correct: true}
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer: [
            {text:"vetican City", correct: true},
            {text:"Nepal", correct: false},
            {text:"Bhutan", correct: false},
            {text:"Pakistan", correct: false}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerbtns = document.getElementById("answerbtn");
const nextbtn = document.getElementById("next");

let score = 0;
let currentQuestionIndex = 0;

function startQuiz(){
    score = 0;
    currentQuestionIndex = 0;
    nextbtn.innerHTML = 'Next'
    showQuestion()
}

function showQuestion(){
    resetData()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + "." + " " + currentQuestion.question

    currentQuestion.answer.forEach(function(answer){
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
      
    })
}

function resetData(){
    nextbtn.style.display = "none";
    while(answerbtns.firstChild){
        answerbtns.removeChild(answerbtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerbtns.children).forEach(function(button){
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true
    })
    nextbtn.style.display = "block"
}


nextbtn.addEventListener("click", function(){
    if(currentQuestionIndex < questions.length){
        handleNextBtn()
    }
    else{
        startQuiz()
    }
})


function showScore(){
    resetData();
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}!`
    nextbtn.innerHTML = "Play Again"
    nextbtn.style.display = "block"
}

function handleNextBtn(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}

startQuiz()