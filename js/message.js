import {isEscEvent} from './utils/util.js';

const successMessageTemplateContent = document.querySelector('#success').content;
// const successMessage = successMessageTemplateContent.querySelector('.success');

const onSuccess = () => {
  const message = successMessageTemplateContent.querySelector('.success');

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

// onSuccess();


const errorMessageTemplateContent = document.querySelector('#error').content;

const onFail = () => {
  const message = errorMessageTemplateContent.querySelector('.error');
  const errorButton = message.querySelector('.error__button');

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

onFail();
// const onDocumentClick = (evt) => {
//   deleteMessage();
// };

// const onDocumentKeydown = (evt) => {
//   if (isEscEvent(evt)) {
//     deleteMessage();
//   }
// };

// const createMessage = (message) => {
//   document.body.appendChild(message);
//   document.addEventListener('click', onDocumentClick);
//   document.addEventListener('keydown', onDocumentKeydown);
// };

// function deleteMessage () {
//   document.body.lastChild.remove();
//   document.removeEventListener('click', onDocumentClick);
//   document.removeEventListener('keydown', onDocumentKeydown);
// }

// createMessage(successMessage);
