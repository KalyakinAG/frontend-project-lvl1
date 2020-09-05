import { playGame } from '../game-engine.js';
import { getRandomInt } from '../utils.js';

const num1Max = 100;
const num2Max = 10;
const operations = ['+', '-', '*'];

const getGameData = () => {
  const num1 = getRandomInt(0, num1Max);
  const num2 = getRandomInt(0, num2Max);
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

const calc = () => {
  const gameDescription = 'What is the result of the expression?';
  playGame(getGameData, gameDescription);
};

export default calc;
