import {getRandomInteger, getRandomIntegerFloat, getRandomArrayElement, getRandomArrayElements, shuffleArray} from './utils/util.js';

const typesOfHousing = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timeOfPlacement = ['12:00', '13:00', '14:00'];
const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


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

export {getSimilarAd};
