import playGame from '../playGame.js';
import randomInt from '../randomInt.js';

const max = 10;
const isEven = (num) => num % 2 === 0;

const play = () => {
  const num = randomInt(max);
  return { question: num.toString(), answer: isEven(num) ? 'yes' : 'no' };
};

export const playGameBrainEven = () => {
  playGame(play, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default playGameBrainEven;
