import {isEscEvent} from './utils/util.js';

const successMessageTemplate= document.querySelector('#success').content.querySelector('.success');

const showSuccessMessage = () => {
  const message = successMessageTemplate.cloneNode(true);

  const onDocumentEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      message.remove();
      document.removeEventListener('keydown', onDocumentEscKeydown);
    }
  };

  const onMessageClick = () => {
    message.remove();
    document.removeEventListener('keydown', onDocumentEscKeydown);
  };

  message.addEventListener('click', onMessageClick);
  document.addEventListener('keydown', onDocumentEscKeydown);

  document.body.appendChild(message);

};


const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const showFailMessage = (errorTitle) => {
  const message = errorMessageTemplate.cloneNode(true);
  const errorDescription = message.querySelector('.error__message');
  const errorButton = message.querySelector('.error__button');
  errorDescription.insertAdjacentHTML('beforeend', `<br> ${errorTitle}`);

  const onDocumentEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      message.remove();
      document.removeEventListener('keydown', onDocumentEscKeydown);
    }
  };

  const onErrorButtonClick = () => {
    message.remove();
    document.removeEventListener('keydown', onDocumentEscKeydown);
  };

  const onMessageClick = () => {
    message.remove();
    document.removeEventListener('keydown', onDocumentEscKeydown);
  };

  message.addEventListener('click', onMessageClick);
  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onDocumentEscKeydown);

  document.body.appendChild(message);
  message.focus();
};


export {showSuccessMessage, showFailMessage};
