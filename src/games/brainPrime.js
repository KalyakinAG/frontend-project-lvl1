import playGame from './gameEngine.js';

const play = () => {
  const isPrime = (num) => {
    for (let div = 2; div < num / 2; div += 1) {
      if (num % div === 0) {
        return false;
      }
    }
    return true;
  };
  const num = 3 + Math.round(Math.random() * 100);
  return [num.toString(), isPrime(num) ? 'yes' : 'no'];
};

export const playGameBrainPrime = () => {
  playGame(play, 'What is the result of the expression?');
};

export default playGameBrainPrime;
