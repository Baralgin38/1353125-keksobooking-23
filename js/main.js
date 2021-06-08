const QUANTITY_OF_SIMILAR_ADS = 10;

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

getRandomInteger();

// Возвращает случайное дробное число из переданного диапазона.
const getRandomIntegerFloat = (from, to, symbolAfterDot = 2) => {
  const {min, max} = replacingNumbers(from, to);

  return +(Math.random() * (max - min) + min).toFixed(symbolAfterDot);
};

getRandomIntegerFloat();


const typesOfHousing = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timeOfPlacement = ['12:00', '13:00', '14:00'];
const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

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

// Возвращает одно объявление сгенерированное из моковых данных.
const getSimilarAd = () => {
  const lat = getRandomIntegerFloat(35.65000, 35.70000, 2);
  const lng = getRandomIntegerFloat(139.70000, 139.80000, 2);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
    },
    offer: {
      title: 'Прекрасный заголовок для отличного жилья',
      address: `${lat}, ${lng}`,
      price: getRandomInteger(50, 5000),
      type: getRandomArrayElement(typesOfHousing),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 5),
      checkin: getRandomArrayElement(timeOfPlacement),
      checkout: getRandomArrayElement(timeOfPlacement),
      features: getRandomArrayElements(shuffleArray(featuresList)),
      description: 'Самое лучшее жилье из всех что вы до этого видели.',
      photos: getRandomArrayElements(shuffleArray(photos)),
    },
    location: {
      lat,
      lng,
    },
  };
};

const similarAds = new Array(QUANTITY_OF_SIMILAR_ADS).fill('').map(getSimilarAd);

similarAds;
