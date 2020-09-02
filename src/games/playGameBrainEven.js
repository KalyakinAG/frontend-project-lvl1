import playGame from '../playGame.js';
import getRandomInt from '../getRandomInt.js';

const max = 10;
const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const num = getRandomInt(0, max);
  return { question: num.toString(), answer: isEven(num) ? 'yes' : 'no' };
};

const playGameBrainEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(getGameData, gameDescription);
};

export default playGameBrainEven;
