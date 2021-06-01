const getRandomInteger = (min, max) => {
  min = Math.floor(Math.abs(min));
  max = Math.floor(Math.abs(max));

  if (min > max) {
    const transit = min;
    min = max;
    max = transit;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomInteger();

const getRandomIntegerFloat = (min, max, symbolAfterDot = 2) => {
  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    const transit = min;
    min = max;
    max = transit;
  }

  return +(Math.random() * (max - min) + min).toFixed(symbolAfterDot);
};

getRandomIntegerFloat();
