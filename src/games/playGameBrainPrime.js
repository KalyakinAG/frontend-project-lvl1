import playGame from '../playGame.js';
import getRandomInt from '../getRandomInt.js';

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

const max = 100;

const getGameData = () => {
  const num = getRandomInt(-max, max);
  return { question: num.toString(), answer: isPrime(num) ? 'yes' : 'no' };
};

const playGameBrainPrime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(getGameData, gameDescription);
};

export default playGameBrainPrime;
