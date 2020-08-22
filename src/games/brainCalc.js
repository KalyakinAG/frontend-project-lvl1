const brainCalc = () => {
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

export default brainCalc;
