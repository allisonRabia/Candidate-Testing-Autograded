const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? " , "True or false: 5 kilometer == 5000 meters? " , "(5 + 3)/2 * 10 = ? " , "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " , "What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3",];
let candidateAnswers = [""];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log(candidateName);
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user’s responses.
  for (i = 0 ; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
}
}

function gradeQuiz(candidateAnswers) {
  let numCorrectAnswers = 0;
  let numQuizQuestions = 5;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate’s responses in addition to the corresponding correct answers.
for (i = 0 ; i < questions.length; i++) {
if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  console.log("You answered correctly!")  
  console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    numCorrectAnswers++;
    console.log(numCorrectAnswers);

 } else {
    console.log("You answered incorrectly.")  
  console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);

  }
}

 //TODO 3.2 use this variable to calculate the candidates score.
 let grade = '';  
 //let percentCorrect = 0;

 //function scoreQuiz() {
    // for (i = 0; i < questions.length; i++) {
    //     if (cand)
    //
    //percentCorrect = ;
    grade = (((numCorrectAnswers)/(numQuizQuestions)) * 100);
    
    if (grade < 80) {
     console.log(`You scored ${grade} %.  You have failed this quiz.`); 
    }    else if (grade >= 80) {
        console.log(`You scored ${grade} %.  You have passed this test!`);
        
      }
    console.log(grade);

      return grade;
}
  //scoreQuiz();
  

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};