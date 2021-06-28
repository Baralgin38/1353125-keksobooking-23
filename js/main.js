import {getSimilarAd} from './data.js';
import {generateSimilarAd} from './generate-similar-ad.js';
import {
  isDeactivatedAdForm,
  isDeactivatedMapFiltersForm,
  setValidationOnTitleInput,
  setValidationOnPriceInput,
  setDependencyBetweenHousingTypeAndPriceInput
} from './form.js';

const QUANTITY_OF_SIMILAR_ADS = 10;

const similarAds = new Array(QUANTITY_OF_SIMILAR_ADS).fill('').map(getSimilarAd);

const cardAdTemplateContent = document.querySelector('#card').content;
const cardAdTemplate = cardAdTemplateContent.querySelector('.popup');

const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const housingType = document.querySelector('#type');


// const similarAdsFragment = document.createDocumentFragment();
const canvas = document.querySelector('#map-canvas');

// similarAds.forEach((ad) => {
//   similarAdsFragment.append(generateSimilarAds(ad, cardAdTemplate));
// });

canvas.append(generateSimilarAd(similarAds[0], cardAdTemplate));

isDeactivatedAdForm(adForm, false);
isDeactivatedMapFiltersForm(mapFiltersForm, false);

setValidationOnTitleInput(titleInput);
setValidationOnPriceInput(priceInput);
setDependencyBetweenHousingTypeAndPriceInput(housingType, priceInput)
