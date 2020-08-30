import playGame from '../playGame.js';
import randomInt from '../randomInt.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const maxBasis = 10;
const maxMultiplicity = 10;

const play = () => {
  const numBasis = randomInt(maxBasis);
  const num1 = numBasis * randomInt(maxMultiplicity);
  const num2 = numBasis * randomInt(maxMultiplicity);
  return { question: `${num1} ${num2}`, answer: gcd(num1, num2).toString() };
};

export const playGameBrainGCD = () => {
  playGame(play, 'Find the greatest common divisor of given numbers.');
};

export default playGameBrainGCD;
