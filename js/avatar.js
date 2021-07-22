const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('#avatar');
const preview = document.querySelector('.ad-form-header__preview img');

const setPreviewUserPhoto = () => {
  avatarChooser.addEventListener('change', () => {
    const file = avatarChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

export {setPreviewUserPhoto};
