import { playGame } from '../game-engine.js';
import { getRandomInt } from '../utils.js';

const lengthMax = 10;//  длина ряда прогрессии
const stepMax = 10;//  величина шага арифметической прогрессии
const stepMin = -10;
const numMax = 10;

const getGameData = () => {
  const step = getRandomInt(stepMin, stepMax);
  const secretIndex = getRandomInt(0, lengthMax - 1);
  const numbersProgression = [];
  const numStart = getRandomInt(0, numMax);
  const mapNumToString = (item, index) => {
    if (index === secretIndex) {
      return '..';
    }
    return item.toString();
  };
  //  Формирование прогрессии
  for (let i = 0; i < lengthMax; i += 1) {
    numbersProgression.push(numStart + step * i);
  }
  return { question: `${numbersProgression.map(mapNumToString).join(' ')}`, answer: numbersProgression[secretIndex].toString() };
};

const progression = () => {
  const gameDescription = 'What number is missing in the progression?';
  playGame(getGameData, gameDescription);
};

export default progression;
