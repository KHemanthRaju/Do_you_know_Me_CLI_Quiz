var readlineSync = require("readline-sync");

var score = 0;

var highscores = [
  {
    name : "Hemanth",
    score : 5,
  },
  {
    name:"Ravi",
    score:0,
  },
]

var questions = [{
  question : "Where do I live? ",
  answer : "Bangalore",
},{
  question : "What is my favourite color? ",
  answer : "Black",
},{
  question : "Where do I work? ",
  answer : "Cerner",
},{
  question : "What is my favourite sport? ",
  answer : "Cricket",
},{
  question : "My Favourite Cricket Player? ",
  answer : "Virat Kohli",
}]

function welcome(){
  var username = readlineSync.question("What's your name? ");
  console.log("Welcome "+username+" to Do You know Hemanth?");
}

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log("right!!!!");
    score = score + 1;
  }else{
    console.log("wrong!!!");
  }
  console.log("Your current score : "+score);
  console.log("--------------");
}

function game(){
  for(var i=0;i<questions.length;i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
}

function showScores(){
  console.log("YAY! You SCORED: "+score);
  console.log("Check out the high scores");
  highscores.map(score => console.log(score.name," : ",score.score));
}

welcome();
game();
showScores();