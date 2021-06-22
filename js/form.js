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

export {changeActivityAdForm, changeActivityMapFiltersForm};
