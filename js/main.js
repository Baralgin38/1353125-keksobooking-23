const getRandomInteger = (min, max) => {
  if (min > max) {
    const transit = min;
    min = max;
    max = transit;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomInteger();

const getRandomIntegerFloat = (min, max, symbolAfterDot = 2) => {
  if (min > max) {
    const transit = min;
    min = max;
    max = transit;
  }

  return +(Math.random() * (max - min) + min).toFixed(symbolAfterDot);
};

getRandomIntegerFloat();

