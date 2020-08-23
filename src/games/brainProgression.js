const brainProgression = () => {
  const maxIndex = 9;
  const oper = Math.round(Math.random() * 1) === 0 ? '-' : '+';
  const step = Math.round(Math.random() * 10);
  const secretIndex = Math.round(Math.random() * maxIndex);
  const numArr = [Math.round(Math.random() * 10)];
  const mapNumToString = (item, index) => {
    if (index === secretIndex) {
      return '..';
    }
    return item.toString();
  };
  //  Формирование последовательности
  for (let i = 1; i < 10; i += 1) {
    if (oper === '-') {
      numArr.push(numArr[i - 1] - step);
    } else {
      numArr.push(numArr[i - 1] + step);
    }
  }
  return [`${numArr.map(mapNumToString).join(' ')}`, numArr[secretIndex].toString()];
};

export default brainProgression;
