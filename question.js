var start= document.querySelector("#btn");
var question = document.querySelector("#questions");
var main = document.querySelector(".container");
var title = document.querySelector("#title");
var opt1 = document.querySelector("#opt1");
var opt2 =document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var score = document.querySelector("#score");
var timeEl = documnet.querySelector("#timer");
var answer = document.querySelector("#answer");
var finalScore = 0;
var lastQuestion= question.length-1;
var runningQuestion= 0;
var question = [
    {
        title:" Which tag is used to break a line in HTML?",
        option1: "<p>", 
        option2:"<BR>", 
        option3:"<H1>",
        answer: "<BR>"
    },
    {
        title:" Which tag is used to insert an image in HTML?",
        option1:"<picture>",
        option2: "<img>",
        option3:"<body>",
        answer: "<img>"
    },
    {
        title:" Which is latest version of HTML?",
        option1: "HTML6", 
        option2:"HTML 4.5",
        option3:"HTML5",
        answer: "HTML5"
    },
    {
        title: "Which is a file extension for stylesheet?",
        option1:".html", 
        option2:".css",
        option3:".htm",
        answer: ".css"
    },
    {
        title:"Which element contains main content of web page?",
        option1: "<body>", 
        option2:"<p>",
        option3:"<html>",
        answer: "<body>"
    }       
];
start.addEventListener("click", startQuiz());
secondsLeft = 0;
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }
function question(){
    question.style.display="block"; 
    question[runningQuestion];
    title.textContent="<p>"+question.title+ "</p>";
    opt1.innerHTML = question.option1;
    opt1.append
    opt2.innerHTML = question.option2;
    opt3.innerHTML = question.option3;
function answer(){
    if(answer === true){
        finalScore = finalScore + 10;
    }
    else{
        finalscore = finalScore;
        timeEl =timerEl - 15;
        timerEl.textContent= timerEl;
    }


}
}
function score(){
   score.textContent=finalScore;
}
 function startQuiz(){
     event.preventDefault();
     function question();
     function answer();
     function score();
 }

  
