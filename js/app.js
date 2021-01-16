'use strict';

console.log('Hello Dion');

// Linter test


// Write 5 questions accepting either Y or N in any case
//examples: Yes, yes, YEs, yeS, yEs, Y, yy
//welcomePrompt with userName
var userName = prompt('What is your name?');
// console.log(userName);
alert(`Welcome ${userName}! Enjoy the page.`);

//questionOne
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
  alert('You are Correct!');
} else if (questionTwo === 'NO' || questionTwo === 'N') {
  // console.log('That is incorrect');
  alert('That is incorrect!');
} else {
  // console.log('That is incorrect');
  alert('Further research is required. See Dion for assitance.');
}

//questionThree
var questionThree = prompt('Did Dion attend university in TX?').toUpperCase();
if (questionThree === 'YES' || questionThree === 'Y') {
  // console.log('You are correct');
  alert('You are Correct!');
} else if (questionThree === 'NO' || questionThree === 'N') {
  // console.log('That is incorrect');
  alert('That is incorrect!');
} else {
  // console.log('That is incorrect');
  alert('That answer deserves more claification. See Dion for assitance.');
}
//questionFour
var questionFour = prompt('Does Dion enjoy sushi over pizza?').toUpperCase();
if (questionFour === 'YES' || questionFour === 'Y') {
  // console.log('You are correct');
  alert('You are Correct!');
} else if (questionFour === 'NO' || questionFour === 'N') {
  // console.log('That is incorrect');
  alert('That is incorrect!');
} else {
  // console.log('That is incorrect');
  alert('Further research is required. See Dion for assitance.');
}
//questionFive
var questionFive = prompt('Have you enjoyed learning more about Dion?').toUpperCase();
if (questionFive === 'YES' || questionFive === 'Y') {
  // console.log('You are correct');
  alert(`Awesome ${userName}! Glad you enjoyed it.`);
} else if (questionFive === 'NO' || questionFive === 'N') {
  // console.log('That is incorrect');
  alert(`Darn ${userName}! Well, tell me about you.`);
} else {
  // console.log('That is incorrect');
  alert(`Well ${userName}, there is more to learn. See Dion and find out more exiting information.`);
}
