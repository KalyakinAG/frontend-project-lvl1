import playGame from '../playGame.js';
import getRandomInt from '../getRandomInt.js';

const maxLength = 10;//  длина ряда прогрессии
const maxStep = 10;//  величина шага арифметической прогрессии
const max = 10;

const getGameData = () => {
  const step = getRandomInt(-maxStep, maxStep);
  const secretIndex = getRandomInt(0, maxLength - 1);
  const progression = [];
  const startNum = getRandomInt(0, max);
  const mapNumToString = (item, index) => {
    if (index === secretIndex) {
      return '..';
    }
    return item.toString();
  };
  //  Формирование прогрессии
  for (let i = 0; i < maxLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return { question: `${progression.map(mapNumToString).join(' ')}`, answer: progression[secretIndex].toString() };
};

const playGameBrainProgression = () => {
  playGame(getGameData, 'What number is missing in the progression?');
};

export default playGameBrainProgression;
