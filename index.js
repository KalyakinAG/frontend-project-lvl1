import { playGameBrainCalc } from './src/games/brainCalc.js';
import { playGameBrainEven } from './src/games/brainEven.js';
import { playGameBrainGCD } from './src/games/brainGCD.js';
import { playGameBrainProgression } from './src/games/brainProgression.js';
import { playGameBrainPrime } from './src/games/brainPrime.js';

export const playGame = (name) => {
  switch (name) {
    case 'brain-calc':
      playGameBrainCalc();
      break;
    case 'brain-even':
      playGameBrainEven();
      break;
    case 'brain-gcd':
      playGameBrainGCD();
      break;
    case 'brain-progression':
      playGameBrainProgression();
      break;
    case 'brain-prime':
      playGameBrainPrime();
      break;
    default:
      console.log(`Игра "${name}" не найдена.`);
  }
};

export default playGame;
