import playGame from '../playGame.js';
import randomInt from '../randomInt.js';

const isPrime = (num) => {
  for (let div = 2; div < num / 2; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const max = 100;
const min = 3;// минимальное простое число = 3

const play = () => {
  const num = min + randomInt(max - min);
  return { question: num.toString(), answer: isPrime(num) ? 'yes' : 'no' };
};

export const playGameBrainPrime = () => {
  playGame(play, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default playGameBrainPrime;
