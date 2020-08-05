import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('Как вас зовут? ');
  const temp = '';
  console.log(`Привет, ${userName}!`);
};
