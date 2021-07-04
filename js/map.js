/* global L:readonly */

const mapContainer = document.querySelector('#map-canvas');
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPin = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
const address = document.querySelector('#address');

const setAddressValue = () => {
  const {lat, lng} = mainPin.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

mainPin.on('moveend', () => {
  setAddressValue();
});

const addMap = (adFormActivated, mapFiltersFormActivated) => {
  const map = L.map(mapContainer)
    .on('load', () => {
      adFormActivated();
      mapFiltersFormActivated();
      address.readOnly = true;
      setAddressValue();
    })
    .setView({
      lat: 35.6895,
      lng: 139.692,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPin.addTo(map);
};


export {addMap};
