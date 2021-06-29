const TITLE_MAX_LENGTH = 100;
const TITLE_MIN_LENGTH = 30;

const adForm = document.querySelector('.ad-form');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const housingType = adForm.querySelector('#type');
const quantityRooms = adForm.querySelector('#room_number');
const quantityGuests = adForm.querySelector('#capacity').children;

const formElementsDeactivating = (form, element, isDeactivated) => {
  const formFieldset = form.querySelectorAll(element);
  for(let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = isDeactivated;
  }
};

const isDeactivatedAdForm = (form, isDeactivated) => {
  if (isDeactivated) {
    form.classList.add('ad-form--disabled');
  } else {
    form.classList.remove('ad-form--disabled');
  }
  formElementsDeactivating(form, 'fieldset', isDeactivated);
};

const isDeactivatedMapFiltersForm = (form, isDeactivated) => {
  if (isDeactivated) {
    form.classList.add('map__filters--disabled');
  } else {
    form.classList.remove('map__filters--disabled');
  }
  formElementsDeactivating(form, 'select', isDeactivated);
  formElementsDeactivating(form, 'fieldset', isDeactivated);
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


const setDependencyBetweenRoomsAndGuests = () => {

  quantityRooms.addEventListener('change', () => {
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
          if (quantityGuests[i].value === '1' || quantityGuests[i].value === '2') {
            quantityGuests[i].disabled = false;
            quantityGuests[i].selected = true;
          } else {
            quantityGuests[i].disabled = true;
          }
        }
        break;
      case '3':
        for(let i = 0; i < quantityGuests.length; i++) {
          if (quantityGuests[i].value === '1' || quantityGuests[i].value === '2' || quantityGuests[i].value === '3') {
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
  });
};

export {
  isDeactivatedAdForm,
  isDeactivatedMapFiltersForm,
  setValidationOnTitleInput,
  setValidationOnPriceInput,
  setMinPriceOnPriceInput,
  setDependencyBetweenRoomsAndGuests
};
