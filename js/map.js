/* global L:readonly */

const mapContainer = document.querySelector('#map-canvas');

const adMap = (adFormActivated, mapFiltersFormActivated) => {
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
};


export {adMap};
