import {setAddressValue, setMainPinDefaultCoordinates} from './map.js';
import {setPriceInputAttribute, setAllowedQuantityGuests} from './form.js';
import {clearMarkerGroup} from './map.js';

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


const setResetOnForms = (cb) => {
  adFormResetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForms();
    clearMarkerGroup();
    cb();
  });
};

export {resetForms, setResetOnForms};
