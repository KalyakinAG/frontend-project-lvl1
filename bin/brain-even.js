#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}
Answer "yes" if the number is even, otherwise answer "no".`);

const isEven = (num) => num % 2 === 0;
let isCorrect = true;
for (let tryNumber = 1; tryNumber <= 3; tryNumber += 1) {
  const num = Math.round(Math.random() * 10);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if (isEven(num)) {
    if (answer !== 'yes') {
      isCorrect = false;
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      break;
    }
  } else if (answer !== 'no') {
    isCorrect = false;
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    break;
  }
  console.log('Correct!');
}
if (isCorrect) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log(`Let's try again, ${playerName}!`);
}
