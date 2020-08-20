//  Части:
// - Приветствие: возращает имя игрока. Имя понадобится в конце
// - Функция игрового движка: четное число, калькулятор
// - Цикл вызова функции: {Вопрос, Ответ}
// - Завершение: если wrongAnswer, то попробуйте ещё

import readlineSync from 'readline-sync';

export const gameEngine = (gameStep) => {
  for (let step = 1; step <= 3; step += 1) {
    const [gameQuestion, gameAnswer] = gameStep();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== gameAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      return false;
    }
  }
  return true;
};

export const brainEvenStep = () => {
  const isEven = (num) => num % 2 === 0;
  const num = Math.round(Math.random() * 10);
  return [num, isEven(num) ? 'yes' : 'no'];
};

export const brainCalcStep = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 10);
  const operEnum = ['+', '-', '*'];
  const oper = operEnum[Math.round(Math.random() * 2)];
  let result = 0;
  switch (oper) {
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = num1 + num2;
  }
  return [`${num1} ${oper} ${num2}`, result.toString()];
};
