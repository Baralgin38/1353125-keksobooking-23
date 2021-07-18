import {renderSimilarAd} from './generate-similar-ad.js';
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
import {getData} from './api.js';
import {setAdFormSubmit} from './set-submit-listener.js';

// const QUANTITY_ADS = 9;

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
  renderSimilarAd(ads);
});

setAdFormSubmit();
