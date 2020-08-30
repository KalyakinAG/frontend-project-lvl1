import playGame from './gameEngine.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const play = () => {
  const numGCD = Math.round(Math.random() * 10);
  const num1 = numGCD * Math.round(Math.random() * 10);
  const num2 = numGCD * Math.round(Math.random() * 10);
  return [`${num1} ${num2}`, gcd(num1, num2).toString()];
};

export const playGameBrainGCD = () => {
  playGame(play, 'What is the result of the expression?');
};

export default playGameBrainGCD;
