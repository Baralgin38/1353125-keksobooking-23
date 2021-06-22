import {getSimilarAd} from './data.js';
import {generateSimilarAd} from './generate-similar-ad.js';
import {changeActivityAdForm, changeActivityMapFiltersForm} from './form.js';

const QUANTITY_OF_SIMILAR_ADS = 10;

const similarAds = new Array(QUANTITY_OF_SIMILAR_ADS).fill('').map(getSimilarAd);

const cardAdTemplateContent = document.querySelector('#card').content;
const cardAdTemplate = cardAdTemplateContent.querySelector('.popup');

const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

// const similarAdsFragment = document.createDocumentFragment();
const canvas = document.querySelector('#map-canvas');

// similarAds.forEach((ad) => {
//   similarAdsFragment.append(generateSimilarAds(ad, cardAdTemplate));
// });

canvas.append(generateSimilarAd(similarAds[0], cardAdTemplate));

changeActivityAdForm(adForm, true);
changeActivityMapFiltersForm(mapFiltersForm, true);
