import {getSimilarAd} from './data.js';
import {generateSimilarAds} from './generate-similar-ads.js';

const QUANTITY_OF_SIMILAR_ADS = 10;

const similarAds = new Array(QUANTITY_OF_SIMILAR_ADS).fill('').map(getSimilarAd);

const cardAdTemplateContent = document.querySelector('#card').content;
const cardAdTemplate = cardAdTemplateContent.querySelector('.popup');
// const similarAdsFragment = document.createDocumentFragment();
const canvas = document.querySelector('#map-canvas');

// similarAds.forEach((ad) => {
//   similarAdsFragment.append(generateSimilarAds(ad, cardAdTemplate));
// });

canvas.append(generateSimilarAds(similarAds[0], cardAdTemplate));
