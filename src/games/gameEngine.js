import readlineSync from 'readline-sync';

const playGameLoop = (play) => {
  for (let step = 1; step <= 3; step += 1) {
    const [gameQuestion, gameAnswer] = play();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== gameAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      return false;
    }
  }
  return true;
};

const playGame = (play, description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  if (playGameLoop(play)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default playGame;
