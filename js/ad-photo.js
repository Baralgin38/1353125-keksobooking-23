const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const adPhotoChooser = document.querySelector('#images');
const adPhotoContainer = document.querySelector('.ad-form__photo');

const setPreviewAdPhoto = () => {
  adPhotoChooser.addEventListener('change', () => {
    const preview = document.createElement('img');
    preview.alt = 'Фото жилья.';
    preview.style.width = '100%';
    preview.style.height = '100%';

    const file = adPhotoChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
        adPhotoContainer.append(preview);
      });

      reader.readAsDataURL(file);
    }
  });
};

export {setPreviewAdPhoto};
