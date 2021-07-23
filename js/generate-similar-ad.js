import {addPinSimilarAdsOnMap} from './map.js';

const QUANTITY_ADS = 10;

const getHousingTypeOfAd = (housingType) => {
  switch(housingType) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};

const makeWording = (quantity, {singular, plular, pluralDeclension}) => {
  const stringQuantity = String(quantity);
  if (stringQuantity[stringQuantity.length - 1] === '1' || stringQuantity[stringQuantity.length - 2] === '1') {
    if (stringQuantity.length > 1 && stringQuantity[stringQuantity.length - 2] === '1') {
      return `${quantity} ${plular}`;
    } else {
      return `${quantity} ${singular}`;
    }
  } else if (stringQuantity[stringQuantity.length - 1] > 1 && stringQuantity[stringQuantity.length - 1] < 5) {
    return `${quantity} ${pluralDeclension}`;
  } else {
    return `${quantity} ${plular}`;
  }
};

const getQuantityRooms = (rooms) => {
  const declension = {
    singular: 'комната',
    plular: 'комнат',
    pluralDeclension: 'комнаты',
  };

  return makeWording(rooms, declension);
};

const getQuantityGuests = (guests) => {
  const declension = {
    singular: 'гостя',
    plular: 'гостей',
    pluralDeclension: 'гостей',
  };

  return makeWording(guests, declension);
};

const deleteChildElements = (parentElement) => {
  for(let i = parentElement.children.length - 1; i >= 0; i--) {
    parentElement.children[i].remove();
  }
};

const addFeaturesOnCardAd = (parentElement, features) => {
  deleteChildElements(parentElement);

  for(let i = 0; i < features.length; i++) {
    parentElement.insertAdjacentHTML('afterbegin', `<li class="popup__feature popup__feature--${features[i]}"></li>`);
  }
};

const addPhotoOnCardAd = (parentElement, photos) => {
  deleteChildElements(parentElement);

  for(let i = 0; i < photos.length; i++) {
    parentElement.insertAdjacentHTML('afterbegin', `<img src="${photos[i]}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
  }
};

const cardAdTemplateContent = document.querySelector('#card').content;
const cardAdTemplate = cardAdTemplateContent.querySelector('.popup');

const changeTextContentForCardAdElement = (objectProperty, cardAdElement, value) => {
  if (objectProperty) {
    cardAdElement.textContent = value;
  } else {
    cardAdElement.remove();
  }
};
const changeSrcForCardAdElement = (objectProperty, cardAdElement, value) => {
  if (objectProperty) {
    cardAdElement.src = value;
  } else {
    cardAdElement.remove();
  }
};

const generateCardSimilarAd = ({author, offer}) => {
  const cardAd = cardAdTemplate.cloneNode(true);
  const cardAdFeatures = cardAd.querySelector('.popup__features');
  const cardAdPhotos = cardAd.querySelector('.popup__photos');

  changeTextContentForCardAdElement(offer.title, cardAd.querySelector('.popup__title'), offer.title);
  changeTextContentForCardAdElement(offer.address, cardAd.querySelector('.popup__text--address'), offer.address);
  changeTextContentForCardAdElement(offer.price, cardAd.querySelector('.popup__text--price'), `${offer.price}  ₽/ночь`);
  changeTextContentForCardAdElement(offer.type, cardAd.querySelector('.popup__type'), getHousingTypeOfAd(offer.type));
  changeTextContentForCardAdElement(offer.rooms, cardAd.querySelector('.popup__text--capacity'), `${getQuantityRooms(offer.rooms)} для ${getQuantityGuests(offer.guests)}`);
  changeTextContentForCardAdElement(offer.checkin, cardAd.querySelector('.popup__text--time'), `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  changeTextContentForCardAdElement(offer.description, cardAd.querySelector('.popup__description'), offer.description);

  changeSrcForCardAdElement(author.avatar, cardAd.querySelector('.popup__avatar'), author.avatar);

  if(offer.features && offer.features.length > 0) {
    addFeaturesOnCardAd(cardAdFeatures, offer.features);
  } else {
    cardAdFeatures.remove();
  }

  if(offer.photos && offer.photos.length > 0) {
    addPhotoOnCardAd(cardAdPhotos, offer.photos);
  } else {
    cardAdPhotos.remove();
  }

  return cardAd;
};

const renderSimilarAd = (ads) => {
  ads.slice(0, QUANTITY_ADS)
    .forEach((ad) => {
      const cardAd = generateCardSimilarAd(ad);

      addPinSimilarAdsOnMap(ad, cardAd);
    });
};

export {renderSimilarAd};
