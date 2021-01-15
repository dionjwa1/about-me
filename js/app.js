'use strict';

console.log('Hello Dion');

// Linter test


// Write 5 questions accepting either Y or N in any case
//examples: Yes, yes, YEs, yeS, yEs, Y, yy
//welcomePrompt with userName
var userName = prompt('What is your name?');
// console.log(userName);
alert(`Welcome ${userName}! Enjoy the page.`);

//questionTwo
var questionOne = prompt('Are you excited to learn more about Dion?').toUpperCase();
if (questionOne === 'YES' || questionOne === 'Y') {
  //console.log('You are at the right place');
  alert('Great! You are at the right place.');
} else if (questionOne === 'NO' || questionOne === 'N') {
  //console.log('Well, prepare to change thy mind');
  alert('Well, prepare to change thy mind');
} else {
  //console.log('Well, this is an about Dion page, so...);
  alert('Well, this is an about Dion page, so...');
}

//questionTwo
var questionTwo = prompt('Does Dion live in the state of WA?').toUpperCase();
if (questionTwo === 'YES' || questionTwo === 'Y') {
  // console.log('You are correct');
  alert('You are Correct');
} else if (questionTwo === 'NO' || questionTwo === 'N') {
  // console.log('That is incorrect');
  alert('That is incorrect');
} else {
  // console.log('That is incorrect');
  alert('Further research is required. See Dion for assitance.');
}
