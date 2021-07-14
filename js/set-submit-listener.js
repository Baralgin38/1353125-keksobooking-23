import {resetForms} from './reset-form.js';
import {showSuccessMessage, showFailMessage} from './message.js';
import {sendData} from './api.js';

const adForm = document.querySelector('.ad-form');

const onSuccess = () => {
  resetForms();
  showSuccessMessage();
};

const onFail = (errorTitle) => {
  showFailMessage(errorTitle);
};

const setAdFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    sendData(onSuccess, onFail, formData);
  });
};

export {setAdFormSubmit};
