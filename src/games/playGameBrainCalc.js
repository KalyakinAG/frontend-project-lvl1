import playGame from '../playGame.js';
import getRandomInt from '../getRandomInt.js';

const max1 = 100;
const max2 = 10;
const operations = ['+', '-', '*'];

const getGameData = () => {
  const num1 = getRandomInt(0, max1);
  const num2 = getRandomInt(0, max2);
  const operation = operations[getRandomInt(0, operations.length - 1)];
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }
  return { question: `${num1} ${operation} ${num2}`, answer: result.toString() };
};

const playGameBrainCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  playGame(getGameData, gameDescription);
};

export default playGameBrainCalc;
