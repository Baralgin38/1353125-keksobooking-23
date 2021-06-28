const TITLE_MAX_LENGTH = 100;
const TITLE_MIN_LENGTH = 30;

const formElementsDeactivating = (form, element, isDeactivated) => {
  const formFieldset = form.querySelectorAll(element);
  for(let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = isDeactivated;
  }
};

const changeActivityAdForm = (form, isDeactivated) => {
  if (isDeactivated) {
    form.classList.add('ad-form--disabled');
  } else {
    form.classList.remove('ad-form--disabled');
  }
  formElementsDeactivating(form, 'fieldset', isDeactivated);
};

const changeActivityMapFiltersForm = (form, isDeactivated) => {
  if (isDeactivated) {
    form.classList.add('map__filters--disabled');
  } else {
    form.classList.remove('map__filters--disabled');
  }
  formElementsDeactivating(form, 'select', isDeactivated);
  formElementsDeactivating(form, 'fieldset', isDeactivated);
};

const setValidationOnTitleInput = (input) => {
  input.addEventListener('input', () => {
    const valueLength = input.value.length;

    if (valueLength < TITLE_MIN_LENGTH) {
      input.setCustomValidity(`Нужно ввести ещё ${TITLE_MIN_LENGTH - valueLength} симв.`);
    } else if (valueLength > TITLE_MAX_LENGTH) {
      input.setCustomValidity(`Удалите лишние ${valueLength - TITLE_MAX_LENGTH} симв.`);
    } else {
      input.setCustomValidity('');
    }

    input.reportValidity();
  });
};

const setValidationOnPriceInput = (input) => {
  input.addEventListener('input', () => {

    input.reportValidity();
  });
};

const setPriceInputAttribute = (type, input) => {
  switch(type.value) {
    case 'bungalow':
      input.min = 0;
      input.placeholder = 0;
      break;
    case 'flat':
      input.min = 1000;
      input.placeholder = 1000;
      break;
    case 'hotel':
      input.min = 3000;
      input.placeholder = 3000;
      break;
    case 'house':
      input.min = 5000;
      input.placeholder = 5000;
      break;
    case 'palace':
      input.min = 10000;
      input.placeholder = 10000;
      break;
  }
};

const setDependencyBetweenHousingTypeAndPriceInput = (type, input) => {
  setPriceInputAttribute(type, input);

  type.addEventListener('change', () => {
    setPriceInputAttribute(type, input);
  });
};

export {
  changeActivityAdForm,
  changeActivityMapFiltersForm,
  setValidationOnTitleInput,
  setValidationOnPriceInput,
  setDependencyBetweenHousingTypeAndPriceInput
};
