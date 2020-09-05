import { playGame } from '../game-engine.js';
import { getRandomInt } from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let div = 2; div < num / 2; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const numMax = 100;
const numMin = -10;

const getGameData = () => {
  const num = getRandomInt(numMin, numMax);
  return { question: num.toString(), answer: isPrime(num) ? 'yes' : 'no' };
};

const prime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(getGameData, gameDescription);
};

export default prime;
