/* global L:readonly */

const mapContainer = document.querySelector('#map-canvas');
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const addMap = (adFormActivated, mapFiltersFormActivated) => {
  const map = L.map(mapContainer)
    .on('load', () => {
      adFormActivated();
      mapFiltersFormActivated();
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

  mainPinMarker.addTo(map);
};


export {addMap};
