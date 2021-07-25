import {showAlert} from './utils/util.js';
import {mapFiltersFormActivated} from './form.js';

const GET_LINK = 'https://23.javascript.pages.academy/keksobooking/data';
const SEND_LINK = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(GET_LINK)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      mapFiltersFormActivated();
      onSuccess(data);
    })
    .catch((err) => {
      showAlert(err);
    });

};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_LINK,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Проверьте соединение с интернетом');
    });
};

export {getData, sendData};
