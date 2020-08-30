import playGame from './gameEngine.js';

const play = () => {
  const isEven = (num) => num % 2 === 0;
  const num = Math.round(Math.random() * 10);
  return [num, isEven(num) ? 'yes' : 'no'];
};

export const playGameBrainEven = () => {
  playGame(play, 'What is the result of the expression?');
};

export default playGameBrainEven;
