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

const generateSimilarAd = ({author, offer}, template) => {
  const cardAd = template.cloneNode(true);
  const cardAdFeatures = cardAd.querySelector('.popup__features');
  const cardAdDescription = cardAd.querySelector('.popup__description');
  const cardAdPhotos = cardAd.querySelector('.popup__photos');

  cardAd.querySelector('.popup__title').textContent = offer.title;
  cardAd.querySelector('.popup__text--address').textContent = offer.address;
  cardAd.querySelector('.popup__text--price').textContent = `${offer.price}  ₽/ночь`;
  cardAd.querySelector('.popup__type').textContent = getHousingTypeOfAd(offer.type);
  cardAd.querySelector('.popup__text--capacity').textContent = `${getQuantityRooms(offer.rooms)} для ${getQuantityGuests(offer.guests)}`;
  cardAd.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardAd.querySelector('.popup__avatar').src = author.avatar;

  if(offer.features && offer.features.length > 0) {
    addFeaturesOnCardAd(cardAdFeatures, offer.features);
  } else {
    cardAdFeatures.remove();
  }

  if (!offer.description) {
    cardAdDescription.remove();
  } else {
    cardAdDescription.textContent = offer.description;
  }

  if(offer.photos && offer.photos.length > 0) {
    addPhotoOnCardAd(cardAdPhotos, offer.photos);
  } else {
    cardAdPhotos.remove();
  }

  return cardAd;
};

export {generateSimilarAd};
