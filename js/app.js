'use strict';

console.log('Hello Dion');

// Linter test


// Write 5 questions accepting either Y or N in any case
//examples: Yes, yes, YEs, yeS, yEs, Y, yy

var questionOne = prompt('Does Dion live in the state of WA?');

var normalizedQuestionOne = questionOne.toLocaleLowerCase();

if (normalizedQuestionOne === 'yes' || questionOne === 'y')
// console.log(you are correct')

alert('You are Correct');

else {
  alert('That is incorrect');
}


