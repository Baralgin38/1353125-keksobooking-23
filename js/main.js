// import {getSimilarAd} from './data.js'; ??
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

// const QUANTITY_OF_SIMILAR_ADS = 10;  ??

// const similarAds = new Array(QUANTITY_OF_SIMILAR_ADS).fill('').map(getSimilarAd); ??

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

// similarAds.forEach((ad) => {
//   const cardAd = generateCardSimilarAd(ad, cardAdTemplate);

//   addPinSimilarAdsOnMap(ad, cardAd);
// });

getData((ads) => {
  ads.forEach((ad) => {
    const cardAd = generateCardSimilarAd(ad, cardAdTemplate);

    addPinSimilarAdsOnMap(ad, cardAd);
  });
});
