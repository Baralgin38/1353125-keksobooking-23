const adForm = document.querySelector('.ad-form');

const formFieldsetDeactivating = (form, isDeactivated) => {
  const formFieldset = form.querySelectorAll('fieldset');
  for(let i = 0; i < formFieldset.length; i++) {
    formFieldset[i].disabled = isDeactivated;
  }
};

const adFormDeactivating = (form) => {
  form.classList.add('ad-form--disabled');

  formFieldsetDeactivating(form, true);
};

adFormDeactivating(adForm);
