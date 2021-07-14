import {generateCardSimilarAd} from './generate-similar-ad.js';
import {
  adFormActivated,
  adFormDeactivated,
  mapFiltersFormActivated,
  mapFiltersFormDeactivated,
  setValidationOnTitleInput,
  setValidationOnPriceInput,
  setMinPriceOnPriceInput,
  changeAllowedQuantityGuests,
  changeTimeOut,
  changeTimeIn
} from './form.js';
import {addMap, addPinSimilarAdsOnMap} from './map.js';
import {getData} from './api.js';
import {setAdFormSubmit} from './set-submit-listener.js';

const cardAdTemplateContent = document.querySelector('#card').content;
const cardAdTemplate = cardAdTemplateContent.querySelector('.popup');

adFormDeactivated();
mapFiltersFormDeactivated();

setValidationOnTitleInput();
setValidationOnPriceInput();
setMinPriceOnPriceInput();
changeAllowedQuantityGuests();
changeTimeOut();
changeTimeIn();

addMap(adFormActivated, mapFiltersFormActivated);

getData((ads) => {
  ads.forEach((ad) => {
    const cardAd = generateCardSimilarAd(ad, cardAdTemplate);

    addPinSimilarAdsOnMap(ad, cardAd);
  });
});

setAdFormSubmit();
