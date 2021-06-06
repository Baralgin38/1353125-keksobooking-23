const replacingNumbers = (from, to) => {
  let min = Math.abs(from);
  let max = Math.abs(to);

  if (min > max) {
    const swap = min;
    min = max;
    max = swap;
  }

  return {min, max};
};

const getRandomInteger = (from, to) => {
  let {min, max} = replacingNumbers(from, to);

  min = Math.floor(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomInteger();

const getRandomIntegerFloat = (from, to, symbolAfterDot = 2) => {
  const {min, max} = replacingNumbers(from, to);

  return +(Math.random() * (max - min) + min).toFixed(symbolAfterDot);
};

getRandomIntegerFloat();
