import {setAddressValue, setMainPinDefaultCoordinates, clearMarkerGroup} from './map.js';
import {setPriceInputAttribute, setAllowedQuantityGuests} from './form.js';
import {clearAdPhotoPreview} from './ad-photo.js';
import {clearAvatarPreview} from './avatar.js';

const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

const resetForms = () => {
  adForm.reset();
  clearAdPhotoPreview();
  clearAvatarPreview();
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
