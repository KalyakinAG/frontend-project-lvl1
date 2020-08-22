import brainCalc from './src/games/brainCalc.js';
import brainEven from './src/games/brainEven.js';
import brainGCD from './src/games/brainGCD.js';
import gameEngine from './src/gameEngine.js';

export const gameBrainCalc = () => {
  gameEngine(brainCalc, 'What is the result of the expression?');
};

export const gameBrainEven = () => {
  gameEngine(brainEven, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export const gameBrainGCD = () => {
  gameEngine(brainGCD, 'Find the greatest common divisor of given numbers.');
};
