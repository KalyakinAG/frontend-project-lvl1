import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('Как вас зовут? ');
  console.log(`Привет, ${userName}!`);
};
