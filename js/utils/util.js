const ALERT_SHOW_TIME = 5000;

// Меняет местами числа из диапазона, при условии что число ОТ больше чем число ДО.
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

// Возвращает случайное целое число из переданного диапазона.
const getRandomInteger = (from, to) => {
  let {min, max} = replacingNumbers(from, to);

  min = Math.floor(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};


// Возвращает случайное дробное число из переданного диапазона.
const getRandomIntegerFloat = (from, to, symbolAfterDot = 2) => {
  const {min, max} = replacingNumbers(from, to);

  return +(Math.random() * (max - min) + min).toFixed(symbolAfterDot);
};


// Взял на хабре https://habr.com/ru/post/358094/
// Копирует массив и перемешивает его.
const shuffleArray = (array) => {
  const arrayCopy = array.slice();

  for(let i = arrayCopy.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = arrayCopy[j];
    arrayCopy[j] = arrayCopy[i];
    arrayCopy[i] = swap;
  }

  return arrayCopy;
};

// Возвращает случайный элемент массива.
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// Возвращает массив случайной длинны.
const getRandomArrayElements = (array) => array.slice(getRandomInteger(0, array.length - 1));

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscEvent = (evt) => evt.key === 'Esc' || evt.key === 'Escape';

export {
  getRandomInteger,
  getRandomIntegerFloat,
  getRandomArrayElement,
  getRandomArrayElements,
  shuffleArray,
  showAlert,
  isEscEvent
};
