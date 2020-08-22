const brainEven = () => {
  const isEven = (num) => num % 2 === 0;
  const num = Math.round(Math.random() * 10);
  return [num, isEven(num) ? 'yes' : 'no'];
};

export default brainEven;
