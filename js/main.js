import {getSimilarAd} from './data.js';
import {generateSimilarAd} from './generate-similar-ad.js';
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
import {addMap} from './map.js';

const QUANTITY_OF_SIMILAR_ADS = 10;

const similarAds = new Array(QUANTITY_OF_SIMILAR_ADS).fill('').map(getSimilarAd);

const cardAdTemplateContent = document.querySelector('#card').content;
const cardAdTemplate = cardAdTemplateContent.querySelector('.popup');

// const similarAdsFragment = document.createDocumentFragment();
// similarAds.forEach((ad) => {
//   similarAdsFragment.append(generateSimilarAds(ad, cardAdTemplate));
// });

adFormDeactivated();
mapFiltersFormDeactivated();

setValidationOnTitleInput();
setValidationOnPriceInput();
setMinPriceOnPriceInput();
changeAllowedQuantityGuests();
changeTimeOut();
changeTimeIn();
addMap(adFormActivated, mapFiltersFormActivated);
