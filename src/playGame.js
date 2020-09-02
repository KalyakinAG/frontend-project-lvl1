import readlineSync from 'readline-sync';

const gameRoundsCount = 3;

const playGameLoop = (play) => {
  for (let step = 1; step <= gameRoundsCount; step += 1) {
    const { question: gameQuestion, answer: gameAnswer } = play();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== gameAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      return false;
    }
  }
  return true;
};

const playGame = (getGameData, description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  if (playGameLoop(getGameData)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default playGame;
