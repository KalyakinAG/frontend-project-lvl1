import playGame from '../playGame.js';
import randomInt from '../randomInt.js';

const maxLength = 10;//  длина ряда прогрессии
const maxStep = 10;//  величина шага арифметической прогрессии
const max = 10;

const play = () => {
  const oper = randomInt(1) === 0 ? '-' : '+';
  const step = randomInt(maxStep);
  const secretIndex = Math.round(Math.random() * (maxLength - 1));
  const progression = [randomInt(max)];
  const mapNumToString = (item, index) => {
    if (index === secretIndex) {
      return '..';
    }
    return item.toString();
  };
  //  Формирование прогрессии
  for (let i = 1; i < maxLength; i += 1) {
    if (oper === '-') {
      progression.push(progression[i - 1] - step);
    } else {
      progression.push(progression[i - 1] + step);
    }
  }
  return { question: `${progression.map(mapNumToString).join(' ')}`, answer: progression[secretIndex].toString() };
};

export const playGameBrainProgression = () => {
  playGame(play, 'What number is missing in the progression?');
};

export default playGameBrainProgression;
