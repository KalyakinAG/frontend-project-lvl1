import readlineSync from 'readline-sync';

const gameLoop = (game) => {
  for (let step = 1; step <= 3; step += 1) {
    const [gameQuestion, gameAnswer] = game();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== gameAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      return false;
    }
  }
  return true;
};

const engine = (game, description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  if (gameLoop(game)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default engine;
