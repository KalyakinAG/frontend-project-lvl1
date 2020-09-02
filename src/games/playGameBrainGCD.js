import playGame from '../playGame.js';
import getRandomInt from '../getRandomInt.js';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const maxBasis = 10;
const maxMultiplicity = 10;

const getGameData = () => {
  const numBasis = getRandomInt(0, maxBasis);
  const num1 = numBasis * getRandomInt(0, maxMultiplicity);
  const num2 = numBasis * getRandomInt(0, maxMultiplicity);
  return { question: `${num1} ${num2}`, answer: getGCD(num1, num2).toString() };
};

const playGameBrainGCD = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  playGame(getGameData, gameDescription);
};

export default playGameBrainGCD;
