'use strict';

console.log('Hello Dion');

// Linter test


// Write 5 questions accepting either Y or N in any case
//examples: Yes, yes, YEs, yeS, yEs, Y, yy
//welcomePrompt with userName
var userName = prompt('What is your name?');
// console.log(userName);
alert(`Welcome ${userName}! Enjoy the page.`);

// //questionOne
// var questionOne = prompt('Are you excited to learn more about Dion?').toUpperCase();
// if (questionOne === 'YES' || questionOne === 'Y') {
//   //console.log('You are at the right place');
//   alert('Great! You are at the right place.');
// } else if (questionOne === 'NO' || questionOne === 'N') {
//   //console.log('Well, prepare to change thy mind');
//   alert('Well, prepare to change thy mind');
// } else {
//   //console.log('Well, this is an about Dion page, so...);
//   alert('Well, this is an about Dion page, so...');
// }

// //questionTwo
// var questionTwo = prompt('Does Dion live in the state of WA?').toUpperCase();
// if (questionTwo === 'YES' || questionTwo === 'Y') {
//   // console.log('You are correct');
//   alert('You are Correct!');
// } else if (questionTwo === 'NO' || questionTwo === 'N') {
//   // console.log('That is incorrect');
//   alert('That is incorrect!');
// } else {
//   // console.log('That is incorrect');
//   alert('Further research is required. See Dion for assitance.');
// }

// //questionThree
// var questionThree = prompt('Did Dion attend university in TX?').toUpperCase();
// if (questionThree === 'YES' || questionThree === 'Y') {
//   // console.log('You are correct');
//   alert('You are Correct!');
// } else if (questionThree === 'NO' || questionThree === 'N') {
//   // console.log('That is incorrect');
//   alert('That is incorrect!');
// } else {
//   // console.log('That is incorrect');
//   alert('That answer deserves more claification. See Dion for assitance.');
// }
// //questionFour
// var questionFour = prompt('Does Dion enjoy sushi over pizza?').toUpperCase();
// if (questionFour === 'YES' || questionFour === 'Y') {
//   // console.log('You are correct');
//   alert('You are Correct!');
// } else if (questionFour === 'NO' || questionFour === 'N') {
//   // console.log('That is incorrect');
//   alert('That is incorrect!');
// } else {
//   // console.log('That is incorrect');
//   alert('He does, trust me. See Dion for information.');
// }
// //questionFive
// var questionFive = prompt('Have you enjoyed learning more about Dion?').toUpperCase();
// if (questionFive === 'YES' || questionFive === 'Y') {
//   // console.log('You are correct');
//   alert(`Awesome ${userName}! Glad you enjoyed it.`);
// } else if (questionFive === 'NO' || questionFive === 'N') {
//   // console.log('That is incorrect');
//   alert(`Darn ${userName}! Well, tell me about you.`);
// } else {
//   // console.log('That is incorrect');
//   alert(`Well ${userName}, there is more to learn. See Dion and find out more exiting information.`);
// }

//question 6: guess a number. Prompt user to guess number. Alert if guess is too high or low. Provide 4 guessing opportunities. After all 4 attemps, provide correct answer if not guessed. Use a loop for this.
// var questionSix = prompt(` ${userName}, guess what Dion's favorite number is, 1-25?`);
// var availableNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// var guessesAvailable = 4;


for (var i = 0; i < 4; i++) {
  var questionSix = prompt(` ${userName}, guess what Dion's favorite number is, 1-25?`);
  questionSix = parseInt(questionSix);

  if (questionSix <= 20) {
    alert(`Sorry ${userName}, that is too low.`);
  } else if (questionSix >= 22) {
    alert(`Sorry ${userName}, that is too high.`);
  } else if (questionSix === 21) {
    alert(`Yes ${userName}, that is correct! Great guess.`);
    break;
  }
  if (i === 3) {
    alert(`Sorry, ${userName} the correct answer is 21.`);

  }
}

//questionSeven: Create a question with multiple possible answers and use an array to store them. Provide 6 attempts at guessing or end the the question once correctly guessed. Display all possible answers.Use a loop.

var countryList = ['CH, FJ, GE, GU, IN, KN, MV, UK, US, ZA?'].toUpperCase();
var countriesInSpace = ['CH, IN, UK, US'];
for (var j = 0; j < 6; j++) {
  var questionSeven = prompt(`Hello ${userName}, Guess which of the following countries have a space program?${countryList}`);
  if (questionSeven === countriesInSpace.length) {
    alert(`${userName}, that is correct!`);
    break;
  }
  else if (questionSeven === '') {
    alert(`${userName}, incorrect, try again.`);
  }

}
