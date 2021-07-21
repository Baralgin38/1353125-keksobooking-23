const TITLE_MAX_LENGTH = 100;
const TITLE_MIN_LENGTH = 30;

const MinPriceOfHousingType = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

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
      priceInput.min = MinPriceOfHousingType.BUNGALOW;
      priceInput.placeholder = MinPriceOfHousingType.BUNGALOW;
      break;
    case 'flat':
      priceInput.min = MinPriceOfHousingType.FLAT;
      priceInput.placeholder = MinPriceOfHousingType.FLAT;
      break;
    case 'hotel':
      priceInput.min = MinPriceOfHousingType.HOTEL;
      priceInput.placeholder = MinPriceOfHousingType.HOTEL;
      break;
    case 'house':
      priceInput.min = MinPriceOfHousingType.HOUSE;
      priceInput.placeholder = MinPriceOfHousingType.HOUSE;
      break;
    case 'palace':
      priceInput.min = MinPriceOfHousingType.PALACE;
      priceInput.placeholder = MinPriceOfHousingType.PALACE;
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
  changeTimeIn,
  setPriceInputAttribute,
  setAllowedQuantityGuests
};
