import {debounce} from './utils/debounce.js';
import {clearMarkerGroup} from './map.js';
import {renderSimilarAd} from './generate-similar-ad.js';

const DEFAULT_VALUE = 'any';
const RENDER_DELAY = 500;

const mapFiltersForm = document.querySelector('.map__filters');
const housingType = mapFiltersForm.querySelector('#housing-type');
const housingPrice = mapFiltersForm.querySelector('#housing-price');
const housingRoomsQuantity = mapFiltersForm.querySelector('#housing-rooms');
const housingGuestsQuantity = mapFiltersForm.querySelector('#housing-guests');
const housingFeatures = mapFiltersForm.querySelector('#housing-features');

const HousingPriceRange = {
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 10001,
    max: 50000,
  },
  high: {
    min: 50001,
    max: 1000000,
  },
};

const isMatchingHousingType = (ad) => housingType.value === DEFAULT_VALUE || ad.offer.type === housingType.value;

const isMatchingHousingRoomsQuantity = (ad) => housingRoomsQuantity.value === DEFAULT_VALUE || ad.offer.rooms === Number(housingRoomsQuantity.value);

const isMatchingHousingGuestsQuantity = (ad) => housingGuestsQuantity.value === DEFAULT_VALUE ||  ad.offer.guests === Number(housingGuestsQuantity.value);

const isMatchingHousingPrice = (ad) => {
  const currentHousingPrice = HousingPriceRange[housingPrice.value];

  return !currentHousingPrice || ad.offer.price >= currentHousingPrice.min && ad.offer.price <= currentHousingPrice.max;
};

const isMatchingHousingFeatures = (ad) => {
  const checkedFeatures = housingFeatures.querySelectorAll('.map__checkbox:checked');

  return Array.from(checkedFeatures).every((currentFeature) => ad.offer.features && ad.offer.features.includes(currentFeature.value));
};

const filterFunctions = [
  isMatchingHousingType,
  isMatchingHousingRoomsQuantity,
  isMatchingHousingGuestsQuantity,
  isMatchingHousingPrice,
  isMatchingHousingFeatures,
];

// const debouncedRender = debounce(renderSimilarAd, RENDER_DELAY);
// const onFilterChange = (ads) => {
//   mapFiltersForm.addEventListener('change', () => {
//     const filteredAds = ads.filter((ad) => filterFunctions.every((filterFunction) => filterFunction(ad)));
//     clearMarkerGroup();
//     debouncedRender(filteredAds);
//   });
// };

const filter = (ads) => {
  const filteredAds = ads.filter((ad) => filterFunctions.every((filterFunction) => filterFunction(ad)));
  clearMarkerGroup();
  renderSimilarAd(filteredAds);
};

const debounceFilter = debounce(filter, RENDER_DELAY);

const onFilterChange = (ads) => {
  mapFiltersForm.addEventListener('change', () => {
    debounceFilter(ads);
  });
};

export {onFilterChange};
