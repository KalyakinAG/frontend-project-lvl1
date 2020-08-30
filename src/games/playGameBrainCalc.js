import playGame from '../playGame.js';
import randomInt from '../randomInt.js';

const max1 = 100;
const max2 = 10;
const operEnum = ['+', '-', '*'];

const play = () => {
  const num1 = randomInt(max1);
  const num2 = randomInt(max2);
  const oper = operEnum[randomInt(operEnum.length - 1)];
  let result;
  switch (oper) {
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
      console.log('Операция выражения не определена!');
  }
  return { question: `${num1} ${oper} ${num2}`, answer: result.toString() };
};

const playGameBrainCalc = () => {
  playGame(play, 'What is the result of the expression?');
};

export default playGameBrainCalc;
