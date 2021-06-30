import {getSimilarAd} from './data.js';
import {generateSimilarAd} from './generate-similar-ad.js';
import {
  changeStatusAdForm,
  changeStatusMapFiltersForm,
  setValidationOnTitleInput,
  setValidationOnPriceInput,
  setMinPriceOnPriceInput,
  changeQuantityGuests,
  changeTimeOut,
  changeTimeIn
} from './form.js';

const QUANTITY_OF_SIMILAR_ADS = 10;
const ACTIVATED = false;
const DEACTIVATED = true;
DEACTIVATED;

const similarAds = new Array(QUANTITY_OF_SIMILAR_ADS).fill('').map(getSimilarAd);

const cardAdTemplateContent = document.querySelector('#card').content;
const cardAdTemplate = cardAdTemplateContent.querySelector('.popup');

// const similarAdsFragment = document.createDocumentFragment();
const canvas = document.querySelector('#map-canvas');

// similarAds.forEach((ad) => {
//   similarAdsFragment.append(generateSimilarAds(ad, cardAdTemplate));
// });

canvas.append(generateSimilarAd(similarAds[0], cardAdTemplate));

changeStatusAdForm(ACTIVATED);
changeStatusMapFiltersForm(ACTIVATED);

setValidationOnTitleInput();
setValidationOnPriceInput();
setMinPriceOnPriceInput();
changeQuantityGuests();
changeTimeOut();
changeTimeIn();
