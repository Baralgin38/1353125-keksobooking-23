import {setAddressValue} from './map.js';
import {sendData} from './api.js';

const TITLE_MAX_LENGTH = 100;
const TITLE_MIN_LENGTH = 30;

const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const housingType = adForm.querySelector('#type');
const quantityRooms = adForm.querySelector('#room_number');
const quantityGuests = adForm.querySelector('#capacity').children;
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const changeStatusFormElements = (form, element, status) => {
  const formFieldset = form.querySelectorAll(element);
  for(let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = status;
  }
};

const adFormActivated = () => {
  adForm.classList.remove('ad-form--disabled');
  changeStatusFormElements(adForm, 'fieldset', false);
};

const adFormDeactivated = () => {
  adForm.classList.add('ad-form--disabled');
  changeStatusFormElements(adForm, 'fieldset', true);
};

const mapFiltersFormActivated = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');
  changeStatusFormElements(mapFiltersForm, 'select', false);
  changeStatusFormElements(mapFiltersForm, 'fieldset', false);
};

const mapFiltersFormDeactivated = () => {
  mapFiltersForm.classList.add('map__filters--disabled');
  changeStatusFormElements(mapFiltersForm, 'select', true);
  changeStatusFormElements(mapFiltersForm, 'fieldset', true);
};

const setValidationOnTitleInput = () => {
  titleInput.addEventListener('input', () => {
    const valueLength = titleInput.value.length;

    if (valueLength < TITLE_MIN_LENGTH) {
      titleInput.setCustomValidity(`Нужно ввести ещё ${TITLE_MIN_LENGTH - valueLength} симв.`);
    } else if (valueLength > TITLE_MAX_LENGTH) {
      titleInput.setCustomValidity(`Удалите лишние ${valueLength - TITLE_MAX_LENGTH} симв.`);
    } else {
      titleInput.setCustomValidity('');
    }

    titleInput.reportValidity();
  });
};

const setValidationOnPriceInput = () => {
  priceInput.addEventListener('input', () => {

    priceInput.reportValidity();
  });
};

const setPriceInputAttribute = () => {
  switch(housingType.value) {
    case 'bungalow':
      priceInput.min = 0;
      priceInput.placeholder = 0;
      break;
    case 'flat':
      priceInput.min = 1000;
      priceInput.placeholder = 1000;
      break;
    case 'hotel':
      priceInput.min = 3000;
      priceInput.placeholder = 3000;
      break;
    case 'house':
      priceInput.min = 5000;
      priceInput.placeholder = 5000;
      break;
    case 'palace':
      priceInput.min = 10000;
      priceInput.placeholder = 10000;
      break;
  }
};

const setMinPriceOnPriceInput = () => {
  setPriceInputAttribute();

  housingType.addEventListener('change', () => {
    setPriceInputAttribute();
  });
};

const setAllowedQuantityGuests = () => {
  switch(quantityRooms.value) {
    case '1':
      for(let i = 0; i < quantityGuests.length; i++) {
        if (quantityGuests[i].value === '1') {
          quantityGuests[i].disabled = false;
          quantityGuests[i].selected = true;
        } else {
          quantityGuests[i].disabled = true;
        }
      }
      break;
    case '2':
      for(let i = 0; i < quantityGuests.length; i++) {
        if (quantityGuests[i].value === '2' || quantityGuests[i].value === '1') {
          quantityGuests[i].disabled = false;
          quantityGuests[i].selected = true;
        } else {
          quantityGuests[i].disabled = true;
        }
      }
      break;
    case '3':
      for(let i = 0; i < quantityGuests.length; i++) {
        if (quantityGuests[i].value === '3' || quantityGuests[i].value === '2' || quantityGuests[i].value === '1') {
          quantityGuests[i].disabled = false;
          quantityGuests[i].selected = true;
        } else {
          quantityGuests[i].disabled = true;
        }
      }
      break;
    case '100':
      for(let i = 0; i < quantityGuests.length; i++) {
        if (quantityGuests[i].value === '0') {
          quantityGuests[i].disabled = false;
          quantityGuests[i].selected = true;
        } else {
          quantityGuests[i].disabled = true;
        }
      }
      break;
  }
};

const changeAllowedQuantityGuests = () => {
  setAllowedQuantityGuests();

  quantityRooms.addEventListener('change', () => {
    setAllowedQuantityGuests();
  });
};

const changeTimeOut = () => {
  timeIn.addEventListener('change', () => {
    timeOut.value = timeIn.value;
  });
};

const changeTimeIn = () => {
  timeOut.addEventListener('change', () => {
    timeIn.value = timeOut.value;
  });
};


const resetForms = () => {
  adForm.reset();
  mapFiltersForm.reset();
  setPriceInputAttribute();
  setAllowedQuantityGuests();
  setAddressValue();
};


const setAdFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    sendData( , , formData);
  });
};



export {
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
};
