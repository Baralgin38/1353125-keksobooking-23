const TITLE_MAX_LENGTH = 100;
const TITLE_MIN_LENGTH = 30;
const PRICE_MAX_VALUE = 1000000;

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

const setValidationOnTitleInput = (titleInput) => {
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

export {changeActivityAdForm, changeActivityMapFiltersForm, setValidationOnTitleInput};
