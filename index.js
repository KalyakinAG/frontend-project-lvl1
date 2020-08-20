import readlineSync from 'readline-sync';

import { gameEngine, brainEvenStep, brainCalcStep } from './src/games.js';

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  if (gameEngine(brainEvenStep)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What is the result of the expression?');
  if (gameEngine(brainCalcStep)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
