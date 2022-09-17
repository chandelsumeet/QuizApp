const readlineSync = require("readline-sync");
const userName = readlineSync.question(
  "Welcome to the Quiz. Please enter your name "
);
let totalScore = 0;
console.log(
  `Hi ${userName}. Note:- Every question has only two answer, either yes or no.  Let's start the quiz.`
);
let startGame = true;
const questions = [
  {
    key: "Q1",
    question: "Is <p> a block level element?",
    answer: "yes",
  },
  {
    key: "Q2",
    question: "Is javascript asynchronous?",
    answer: "no",
  },
  {
    key: "Q3",
    question: "Are let and const hoisted?",
    answer: "yes",
  },
  {
    key: "Q4",
    question: "is javscript is multithreded?",
    answer: "yes",
  },
  {
    key: "Q5",
    question: "Arrow function cannot be used as function constructor?",
    answer: "yes",
  },
];
questions.map((item, index) => {
  console.log(`${item.key} - Your question is -`);
  console.log(`${item.question}`);
  const ans = readlineSync.question("please enter your answer in yes or no. ");
  totalScore = item.answer === ans ? totalScore + 1 : totalScore;
});

console.log(`Your total score is ${totalScore}`);
