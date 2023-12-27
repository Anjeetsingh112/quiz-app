const questions=[
    {
        question:"Which is larget animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is smallest country in the world?",
        answers:[
            {text:"Vatican",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Shri Lanka",correct:false},
        ]
    },
    {
        question:"Which is larget desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahra",correct:true},
            {text:"Antarctica",correct:false},
        ]
    },
    {
        question:"Which is smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    },
  
]
const questionElement =document.getElementById("question");
const answerButton =document.getElementById("ans-btn");
const nextButton =document.getElementById("next-btn");

let currentQuestionsIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionsIndex =0;
     score=0;
     nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
let currentQuestion= questions[currentQuestionsIndex];
let questionNo= currentQuestionsIndex + 1;
questionElement.innerHTML= questionNo + ". " + currentQuestion.question;


currentQuestion.answers.forEach(answer => {
    const button= document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct =answer.correct;
    }
    button.addEventListener('click',(e)=>{
        const selectbtn=e.target;
        const isCorrect = selectbtn.dataset.correct==="true";
        if(isCorrect){
            selectbtn.classList.add("correct");
            score++;
        }
        else{
            selectbtn.classList.add("incorrect");
        }
        Array.from(answerButton.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                       button.classList.add("correct");
            }
            button.disabled ="true";
        });
        nextButton.style.display="block";
    });
});
}
function resetState(){
nextButton.style.display="none";
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
}
}
function showScore(){
resetState();
questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
nextButton.innerHTML="Play Again";
nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionsIndex++;
    if(currentQuestionsIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{ 
    if(currentQuestionsIndex<questions.length){
        handleNextButton();   
     }else{
        startQuiz();
     }
})
startQuiz();
