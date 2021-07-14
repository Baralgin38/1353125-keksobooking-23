import {setAddressValue, setMainPinDefaultCoordinates} from './map.js';
import {setPriceInputAttribute, setAllowedQuantityGuests} from './form.js';

const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

const resetForms = () => {
  adForm.reset();
  mapFiltersForm.reset();
  setPriceInputAttribute();
  setAllowedQuantityGuests();
  setMainPinDefaultCoordinates();
  setAddressValue();
};

const adFormResetButton = adForm.querySelector('.ad-form__reset');

export {resetForms};
