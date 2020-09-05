import { playGame } from '../game-engine.js';
import { getRandomInt } from '../utils.js';

const max = 10;
const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const num = getRandomInt(0, max);
  return { question: num.toString(), answer: isEven(num) ? 'yes' : 'no' };
};

const even = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(getGameData, gameDescription);
};

export default even;
